import HEADERS from "./headers.js";
import DATA_TYPE from "./dataType.js";

const ASYNC = true; // Sync no longer supported by most clients

function mockXHR() {
  this.responseType = DATA_TYPE.TEXT;
  this.responseText = "";
  this.async = true;
  this.status = 200;
  this.header = {};
  this.timeout = 70;
  this.open = (method, uri, ASYNC, user, password) => {
    this.uri = uri;
    this.async = ASYNC;
    this.user = user;
    this.method = method;
  };
  this.send = () => {
    this.onload();
  };
  this.setRequestHeader = (header, value) => {
    this.header.header = value;
  };
  this.done = () => {};
  this.fail = () => {};
  this.always = () => {};
  this.then = () => {};
  this.options = {};
};

/**
 * AJAX capability using simple jQuery-like API<br/>
 * Supports the following object properties and features:
 * <ul>
 * <li>method</li>
 * <li>uri</li>
 * <li>contentType</li>
 * <li>dataType</li>
 * <li>beforeSend function</li>
 * <li>success callback</li>
 * <li>failure callback</li>
 * <li>complete callback</li>
 * <li>user</li>
 * <li>password</li>
 * <li>withCredentials</li>
 * <li>cache</li>
 * <li>timeout</li>
 * <li>mock - special flag for mocking response</li>
 * </ul>
 * @static
 * @param {Configuration} configuration object of configuration properties and callbacks.
 * @returns success or failure callback
 * @deprecated Use fetch or sync
 * @example request({
 *         uri: uri,
 *         contentType: "text/plain",
 *         dataType: "text",
 *         success: function (data, status) { ... },
 *         error: function (data, status) { ... }
 *     });
 */
const request = (configuration) => {
  console.warn("Request is deprecated, please use fetch.");
  // console.debug("AUGMENTED: Ajax object: " + JSON.stringify(configuration));
  let xhr = null;

  if (configuration && configuration.uri) {
    //console.warn("AUGMENTED: Ajax Here");
    let type = configuration.type;

    if (!configuration.method && configuration.type) {
      configuration.method = configuration.type;
    }

    let method = (configuration.method) ? configuration.method : "GET";
    let cache = (configuration.cache) ? (configuration.cache) : true;
//console.warn("AUGMENTED: Ajax Here 2", (configuration.mock));
    xhr = (configuration.mock) ? new mockXHR() : new XMLHttpRequest();
    //console.warn("AUGMENTED: Ajax xhr", xhr);
    if (configuration.timeout) {
      xhr.timeout = configuration.timeout;
    }
    //const ASYNC = true; //(configuration.async !== undefined) ? configuration.async : true;

    // CORS & Async
    if (configuration.crossDomain && configuration.xhrFields && configuration.xhrFields.withCredentials) {
      xhr.withCredentials = configuration.xhrFields.withCredentials;
      // Sync Not supported for all browsers in CORS mode
      //if (!async) {
      //  logger.warn("AUGMENTED: Augmented.Request: Sync Not supported for all browsers in CORS mode!");
      //}
      //async = true;
    }

    if (ASYNC && configuration.dataType) {
      xhr.responseType = (configuration.dataType) ? configuration.dataType : DATA_TYPE.TEXT;
    }

    xhr.open(method, encodeURI(configuration.uri), ASYNC,
      (configuration.user !== undefined) ? configuration.user : "",
      (configuration.password !== undefined) ? configuration.password : "");
    xhr.setRequestHeader(HEADERS.TYPE, (configuration.contentType) ? configuration.contentType : HEADERS.TEXT);

    if (configuration.dataType === DATA_TYPE.JSON) {
      xhr.setRequestHeader(HEADERS.ACCEPT, HEADERS.APPLICATION);
    }

    if (!cache) {
      xhr.setRequestHeader(HEADERS.CACHE, HEADERS.NO_CACHE);
    }

    // CORS
    if (xhr.withCredentials) {
      let allowOrigins = "*", allowMethods = "GET";
      if (configuration.allowOrigins) {
        allowOrigins = configuration.allowOrigins;
      }
      if (configuration.allowMethods) {
        allowMethods = configuration.allowMethods;
      }

      xhr.setRequestHeader(HEADERS.ALLOW_ORIGINS, allowOrigins);
      xhr.setRequestHeader(HEADERS.ALLOW_METHODS, allowMethods);
    }

    // Authorization
    if (xhr.withCredentials && configuration.user && configuration.password) {
      xhr.setRequestHeader(HEADERS.AUTH, "Basic " + window.btoa(configuration.user + ":" + configuration.password));
    }

    // custom headers
    if (configuration.headers) {
      let i = 0, keys = Object.keys(configuration.headers), l = keys.length;

      for (i = 0; i < l; i++) {
        xhr.setRequestHeader(keys[i], configuration.headers[keys[i]]);
      }
    }

    xhr.onload = () => {
      try {
        if (xhr.status > 199 && xhr.status < 399) {
          if (configuration.success) {
            if (xhr.responseType === "" || xhr.responseType === DATA_TYPE.TEXT) {
              if (xhr.responseText) {
                configuration.success(xhr.responseText, xhr.status, xhr);
              } else {
                console.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                configuration.success("", xhr.status, xhr);
              }
            } else if (xhr.responseType === DATA_TYPE.JSON) {
              if (xhr.response) {
                //console.debug("AUGMENTED: Ajax (JSON responseType) native JSON.");
                configuration.success(xhr.response, xhr.status, xhr);
              } else if (xhr.responseText) {
                //console.debug("AUGMENTED: Ajax (JSON responseType) parsed JSON from string.");
                configuration.success(JSON.parse(xhr.responseText), xhr.status, xhr);
              } else {
                console.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                configuration.success("", xhr.status, xhr);
              }
            } else {
              if (xhr.responseText) {
                configuration.success(xhr.responseText, xhr.status, xhr);
              } else if (xhr.response) {
                configuration.success(xhr.response, xhr.status, xhr);
              } else {
                console.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                configuration.success("", xhr.status, xhr);
              }
            }
          }
        } else if (xhr.status > 399 && xhr.status < 600) {
          if (configuration.failure) {
            configuration.failure(xhr, xhr.status, xhr.statusText);
          } else if (configuration.error) {
            configuration.error(xhr, xhr.status, xhr.statusText);
          }
        }
      } catch(e) {
        console.error("AUGMENTED: Ajax (" + e + ")");
        if (configuration && configuration.error) {
          configuration.error(xhr, xhr.status, xhr.statusText);
        }
        return xhr;
      }
      if (configuration.complete) {
        configuration.complete(xhr, xhr.status);
      }
      return xhr;
    };

    if (configuration.beforeSend) {
      configuration.beforeSend(xhr);
    }
    xhr.send(((configuration.data) ? configuration.data : ""));
  }

  //console.debug("AUGMENTED: Ajax status (" + xhr.status + ")");

  return xhr;
};

export default request;
