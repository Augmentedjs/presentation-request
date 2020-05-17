(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("presentation-request", [], factory);
	else if(typeof exports === 'object')
		exports["presentation-request"] = factory();
	else
		root["presentation-request"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/configuration.js":
/*!******************************!*\
  !*** ./src/configuration.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Object of configuration properties and callbacks.  Pass this to the request call to setup configutation
 */
const Configuration = {
  /**
   * uri property
   * @property {string} uri the uri
   */
  uri: "localhost",

  /**
   * url property
   * @property {string} url the url
   * @deprecated
   */
  url: "localhost",

  /**
   * contentType property
   * @property {string} contentType the content type (default is text/plain)
   */
  contentType: "text/plain",

  /**
   * dataType property
   * @property {string} dataType the data type (default is text)
   */
  dataType: "text",

  /**
   * async property - no longer supported
   * @property {boolean} async set async (default true)
   */
  //async: true;

  /**
   * method property
   * @property {string} method the ajax method (default GET)
   */
  method: "GET",

  /**
   * cache property
   * @property {boolean} cache the cache toggle (default true)
   */
  cache: true,

  /**
   * timeout property
   * @property {number} timeout the timeout property
   */
  timeout: 0,

  /**
   * crossDomain property - sets withCredentials to true
   * @property {boolean} crossDomain the cross domain property
   */
  crossDomain: false,

  /**
   * xhrFields property
   * @namespace xhrFields
   */
  xhrFields: {},

  /**
   * withCredentials property
   * @property {boolean} withCredentials the setting for credentails
   */
  withCredentials: false,

  /**
   * user property
   * @property {string} user the username for credentials
   */
  user: null,

  /**
   * password property
   * @property {string} password the password for credentials
   */
  password: null,

  /**
   * allowOrigins property
   * @property {string} allowOrigins the allowed origins for crossDomain
   */
  allowOrigins: "",

  /**
   * allowMethods property
   * @property {string} allowMethods the allowed methods for crossDomain
   */
  allowMethods: null,

  /**
   * headers property
   * @property {object} headers an object of headers (key, value)
   */
  headers: {},

  /**
   * success callback
   * @property {function} success a callback for success
   */
  success: null,

  /**
   * error callback
   * @property {function} error a callback for error
   */
  error: null,

  /**
   * complete callback
   * @property {function} complete a callback after the ajax call
   */
  complete: null,

  /**
   * beforeSend callback
   * @property {function} beforeSend a callback before the ajax call
   */
  beforeSend: null,

  /**
   * mock
   * @property {boolean} mock a toggle to mock the ajax call
   */
  mock: false
};
/* harmony default export */ __webpack_exports__["default"] = (Configuration);

/***/ }),

/***/ "./src/dataType.js":
/*!*************************!*\
  !*** ./src/dataType.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const DATA_TYPE = {
  "TEXT": "text",
  "JSON": "json"
};
/* harmony default export */ __webpack_exports__["default"] = (DATA_TYPE);

/***/ }),

/***/ "./src/headers.js":
/*!************************!*\
  !*** ./src/headers.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const HEADERS = {
  "TYPE": "Content-Type",
  "TEXT": "text/plain",
  "APPLICATION": "application/json",
  "ACCEPT": "Accept",
  "CACHE": "Cache-Control",
  "NO_CACHE": "no-cache",
  "ALLOW_ORIGINS": "Access-Control-Allow-Origin",
  "ALLOW_METHODS": "Access-Control-Allow-Methods",
  "AUTH": "Authorization"
};
/* harmony default export */ __webpack_exports__["default"] = (HEADERS);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Configuration, DATA_TYPE, HEADERS, METHOD_MAP, request, sync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _configuration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration.js */ "./src/configuration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _dataType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataType.js */ "./src/dataType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DATA_TYPE", function() { return _dataType_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _headers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headers.js */ "./src/headers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HEADERS", function() { return _headers_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _methodMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./methodMap.js */ "./src/methodMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "METHOD_MAP", function() { return _methodMap_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request.js */ "./src/request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _request_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _sync_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sync.js */ "./src/sync.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sync", function() { return _sync_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./src/methodMap.js":
/*!**************************!*\
  !*** ./src/methodMap.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Map from CRUD to HTTP for our default sync implementation.
const METHOD_MAP = {
  "create": "POST",
  "update": "PUT",
  "patch": "PATCH",
  "delete": "DELETE",
  "read": "GET",
  "CREATE": "POST",
  "UPDATE": "PUT",
  "PATCH": "PATCH",
  "DELETE": "DELETE",
  "READ": "GET"
};
/* harmony default export */ __webpack_exports__["default"] = (METHOD_MAP);

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headers.js */ "./src/headers.js");
/* harmony import */ var _dataType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataType.js */ "./src/dataType.js");


const ASYNC = true; // Sync no longer supported by most clients

function mockXHR() {
  this.responseType = _dataType_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT;
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
}

;
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

const request = configuration => {
  //console.debug("AUGMENTED: Ajax object: " + JSON.stringify(configuration));
  let xhr = null;

  if (configuration && configuration.uri) {
    //console.warn("AUGMENTED: Ajax Here");
    let type = configuration.type;

    if (!configuration.method && configuration.type) {
      configuration.method = configuration.type;
    }

    let method = configuration.method ? configuration.method : "GET";
    let cache = configuration.cache ? configuration.cache : true; //console.warn("AUGMENTED: Ajax Here 2", (configuration.mock));

    xhr = configuration.mock ? new mockXHR() : new XMLHttpRequest(); //console.warn("AUGMENTED: Ajax xhr", xhr);

    if (configuration.timeout) {
      xhr.timeout = configuration.timeout;
    } //const ASYNC = true; //(configuration.async !== undefined) ? configuration.async : true;
    // CORS & Async


    if (configuration.crossDomain && configuration.xhrFields && configuration.xhrFields.withCredentials) {
      xhr.withCredentials = configuration.xhrFields.withCredentials; // Sync Not supported for all browsers in CORS mode
      //if (!async) {
      //  logger.warn("AUGMENTED: Augmented.Request: Sync Not supported for all browsers in CORS mode!");
      //}
      //async = true;
    }

    if (ASYNC && configuration.dataType) {
      xhr.responseType = configuration.dataType ? configuration.dataType : _dataType_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT;
    }

    xhr.open(method, encodeURI(configuration.uri), ASYNC, configuration.user !== undefined ? configuration.user : "", configuration.password !== undefined ? configuration.password : "");
    xhr.setRequestHeader(_headers_js__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE, configuration.contentType ? configuration.contentType : _headers_js__WEBPACK_IMPORTED_MODULE_0__["default"].TEXT);

    if (configuration.dataType === _dataType_js__WEBPACK_IMPORTED_MODULE_1__["default"].JSON) {
      xhr.setRequestHeader(_headers_js__WEBPACK_IMPORTED_MODULE_0__["default"].ACCEPT, _headers_js__WEBPACK_IMPORTED_MODULE_0__["default"].APPLICATION);
    }

    if (!cache) {
      xhr.setRequestHeader(_headers_js__WEBPACK_IMPORTED_MODULE_0__["default"].CACHE, _headers_js__WEBPACK_IMPORTED_MODULE_0__["default"].NO_CACHE);
    } // CORS


    if (xhr.withCredentials) {
      let allowOrigins = "*",
          allowMethods = "GET";

      if (configuration.allowOrigins) {
        allowOrigins = configuration.allowOrigins;
      }

      if (configuration.allowMethods) {
        allowMethods = configuration.allowMethods;
      }

      xhr.setRequestHeader(_headers_js__WEBPACK_IMPORTED_MODULE_0__["default"].ALLOW_ORIGINS, allowOrigins);
      xhr.setRequestHeader(_headers_js__WEBPACK_IMPORTED_MODULE_0__["default"].ALLOW_METHODS, allowMethods);
    } // Authorization


    if (xhr.withCredentials && configuration.user && configuration.password) {
      xhr.setRequestHeader(_headers_js__WEBPACK_IMPORTED_MODULE_0__["default"].AUTH, "Basic " + window.btoa(configuration.user + ":" + configuration.password));
    } // custom headers


    if (configuration.headers) {
      let i = 0,
          keys = Object.keys(configuration.headers),
          l = keys.length;

      for (i = 0; i < l; i++) {
        xhr.setRequestHeader(keys[i], configuration.headers[keys[i]]);
      }
    }

    xhr.onload = () => {
      try {
        if (xhr.status > 199 && xhr.status < 399) {
          if (configuration.success) {
            if (xhr.responseType === "" || xhr.responseType === _dataType_js__WEBPACK_IMPORTED_MODULE_1__["default"].TEXT) {
              if (xhr.responseText) {
                configuration.success(xhr.responseText, xhr.status, xhr);
              } else {
                console.warn("AUGMENTED: Ajax (" + xhr.responseType + " responseType) did not return anything.");
                configuration.success("", xhr.status, xhr);
              }
            } else if (xhr.responseType === _dataType_js__WEBPACK_IMPORTED_MODULE_1__["default"].JSON) {
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
      } catch (e) {
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

    xhr.send(configuration.data ? configuration.data : "");
  } //console.debug("AUGMENTED: Ajax status (" + xhr.status + ")");


  return xhr;
};

/* harmony default export */ __webpack_exports__["default"] = (request);

/***/ }),

/***/ "./src/sync.js":
/*!*********************!*\
  !*** ./src/sync.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _methodMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methodMap.js */ "./src/methodMap.js");
/* harmony import */ var _dataType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataType.js */ "./src/dataType.js");
/* harmony import */ var _headers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headers.js */ "./src/headers.js");


 // import request from "./request.js";
// pull from Next as a module

const isFunction = name => {
  return Object.prototype.toString.call(name) == "[object Function]";
};
/**
 * Base sync method that can pass special augmented features
 */


const sync = async (method, model, options = {}) => {
  if (!model) {
    console.error("No model to sync!");
    throw new Error("No model to sync!");
  }

  let data = null;
  const type = method ? _methodMap_js__WEBPACK_IMPORTED_MODULE_0__["default"][method] : _methodMap_js__WEBPACK_IMPORTED_MODULE_0__["default"].READ; // Default JSON-request options.

  const params = {
    type: type,
    dataType: _dataType_js__WEBPACK_IMPORTED_MODULE_1__["default"].JSON,
    success: options.success,
    error: options.error
  }; // Ensure that we have a uri.

  if (!options.uri) {
    if (model && model.uri) {
      if (isFunction(model.uri)) {
        options.uri = model.uri();
      } else {
        options.uri = model.uri;
      }
    } else {
      throw new Error(`A "uri" property or model with "uri" must be specified in the collection or model class!`);
    }
  } // Ensure that we have the appropriate request data.


  if (options.data == null && model && (method === _methodMap_js__WEBPACK_IMPORTED_MODULE_0__["default"].CREATE || method === _methodMap_js__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE || method === _methodMap_js__WEBPACK_IMPORTED_MODULE_0__["default"].PATCH)) {
    params.contentType = _headers_js__WEBPACK_IMPORTED_MODULE_2__["default"].APPLICATION;
    params.data = JSON.stringify(options.attrs || model.toJSON(options));
  } // TODO: figure out what this was supposed to do.
  // Don't process data on a non-GET request.
  // if (params.type !== METHOD_MAP.READ) {
  //params.processData = false;
  // params.data = null;
  // }


  const myData = params.data ? JSON.stringify(data) : null;
  return await fetch(options.uri, {
    "method": params.type,
    "headers": {
      "Content-Type": params.contentType
    },
    "credentials": 'include',
    "body": myData
  }).then(res => {
    //console.debug(`Status: ${res.status}`);
    if (res.ok) {
      //console.debug("fetch finished");
      return res.json();
    }

    throw new Error(`${res.status}: ${params.uri} ${res.statusText} `);
  }).then(response => {
    //console.debug(`Response: ${JSON.stringify(response)}`);
    model.set(response);
    data = response;
    return response;
  }).then(response => {
    if (params.success) {
      return params.success(response);
    }

    return response;
  }).then(response => {
    // null is the old xhr
    model.trigger("request", model, null, options); //console.debug("completing sync");

    return response;
  }).catch(error => {
    if (params.error) {
      return params.error(error);
    }

    console.error(error);
    return error;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sync);

/***/ })

/******/ });
});
//# sourceMappingURL=presentation-request.js.map