import METHOD_MAP from "./methodMap.js";
import request from "./request.js";
import DATA_TYPE from "./dataType.js";

// pull from Next as a module
const isFunction = (name) => {
  return Object.prototype.toString.call(name) == "[object Function]";
};

/**
 * Base sync method that can pass special augmented features
 */
const sync = async (method, model, options) => {
  if (!model) {
    console.error("no model to sync!");
    throw new Error("no model to sync!");
  }

  let data = null;
  if (!options) {
    options = {};
  }
  const type = (method) ? METHOD_MAP[method] : METHOD_MAP.READ;
  // Default JSON-request options.
  const params = {
    type: type,
    dataType: DATA_TYPE.JSON
  };

  // Ensure that we have a URL.
  if (!options.url) {
    if (model && model.url) {
      if (isFunction(model.url)) {
        options.url = model.url();
      } else {
        options.url = model.url;
      }
    } else {
      throw new Error(`A "url" property or model with "url" must be specified in the collection or model class!`);
    }
  }

  // Ensure that we have the appropriate request data.
  if (options.data == null && model && (method === METHOD_MAP.CREATE || method === METHOD_MAP.UPDATE || method === METHOD_MAP.PATCH)) {
    params.contentType = "application/json";
    params.data = JSON.stringify(options.attrs || model.toJSON(options));
  }

  // Don't process data on a non-GET request.
  if (params.type !== METHOD_MAP.READ) {
    //params.processData = false;
    params.data = null;
  }

  const myData = (params.data) ? JSON.stringify(data) : null;

  const ret = await fetch(options.url, {
    "method": params.type,
    "headers": {"Content-Type": params.contentType},
    "credentials": 'include',
    "body": myData
  }).then((res) => {
    //console.debug(`Status: ${res.status}`);
    if(res.ok) {
      //console.debug("fetch finished");
      return res.json();
    }
    throw new Error(`${res.status}: ${params.url} ${res.statusText} `);
  }).then((response) => {
    //console.debug(`Response: ${JSON.stringify(response)}`);
    model.set(response);
    data = response;
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
    //console.debug("completing sync");
    return response;
  }).catch((error) => {
    if (params.error) {
      return params.error(error);
    }
    console.error(error);
    return error;
  });

  //console.debug("function ended");
  return ret;
};

export default sync;
