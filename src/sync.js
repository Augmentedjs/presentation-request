import METHOD_MAP from "./methodMap.js";
import DATA_TYPE from "./dataType.js";
import HEADERS from "./headers.js";

// pull from Next as a module
const isFunction = (name) => {
  return Object.prototype.toString.call(name) == "[object Function]";
};

/**
 * Base sync method that can pass special augmented features
 */
const sync = async (method = METHOD_MAP.READ, model, options = {}) => {
  if (!model) {
    throw new Error("No model to sync!");
  }

  // Logger.debug("sync", method, "options", options)

  if (options.attrs) {
    console.warn("options.attrs is deprecated, please use options.data");
    options.data = options.attrs;
  }

  // let data = null;

  const type = (method) ? METHOD_MAP[String(method).toUpperCase()] : METHOD_MAP.READ;

  // Logger.debug("parsed method", type);

  // Default JSON-request options.
  const params = {
    type: type,
    dataType: DATA_TYPE.JSON,
    contentType: HEADERS.APPLICATION,
    success: options.success,
    error: options.error,
    data: null
  };

  // Ensure that we have a uri.
  if (!options.uri) {
    if (model.uri) {
      if (isFunction(model.uri)) {
        options.uri = model.uri();
      } else {
        options.uri = model.uri;
      }
    } else {
      throw new Error(`A "uri" property or model with "uri" must be specified in the collection or model class!`);
    }
  }

  params.data = (!options.data) ? model.toString(options) : JSON.stringify(options.data);

  // Logger.debug("data to send", params.data);

  return await fetch(options.uri, {
    "method": params.type,
    "headers": {"Content-Type": params.contentType},
    "credentials": "include",
    "body": (params.type !== METHOD_MAP.READ && params.type !== METHOD_MAP.DELETE) ? params.data: null
  })
  .then((res) => {
    // Logger.debug(`Status: ${res.status}`);
    if(res.ok) {
      // Logger.debug("fetch finished", res);
      return res.json();
    }
    throw new Error(`${res.status}: ${params.uri} ${res.statusText}`);
  })
  .then((response) => {
    // Logger.debug(`Response: ${JSON.stringify(response)}`);
    model.set(response);
    return response;
  })
  .then((response) => {
    if (params.success) {
      return params.success(response);
    }
    return response;
  })
  .then((response) => {
    // null is the old xhr
    model.trigger("request", model, null, options);
    // Logger.debug("completing sync");
    return response;
  })
  .catch((error) => {
    if (params.error) {
      return params.error(error);
    }
    console.error(error);
    return error;
  });
};

export default sync;
