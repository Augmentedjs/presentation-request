/**
* Object of configuration properties and callbacks.  Pass this to the request call to setup configutation
* @memberof Request
*/
const Configuration = {
  /**
  * url property
  * @property {string} url the url
  * @memberof Configuration
  */
  url: "localhost",
  /**
  * contentType property
  * @property {string} contentType the content type (default is text/plain)
  * @memberof Configuration
  */
  contentType: "text/plain",
  /**
  * dataType property
  * @property {string} dataType the data type (default is text)
  * @memberof Configuration
  */
  dataType: "text",
  /**
  * async property - no longer supported
  * @property {boolean} async set async (default true)
  * @memberof Configuration
  */
  //async: true;
  /**
  * method property
  * @property {string} method the ajax method (default GET)
  * @memberof Configuration
  */
  method: "GET",
  /**
  * cache property
  * @property {boolean} cache the cache toggle (default true)
  * @memberof Configuration
  */
  cache: true,
  /**
  * timeout property
  * @property {number} timeout the timeout property
  * @memberof Configuration
  */
  timeout: 0,
  /**
  * crossDomain property - sets withCredentials to true
  * @property {boolean} crossDomain the cross domain property
  * @memberof Configuration
  */
  crossDomain: false,
  /**
  * xhrFields property
  * @namespace xhrFields
  * @memberof Configuration
  */
  xhrFields: {},
  /**
  * withCredentials property
  * @property {boolean} withCredentials the setting for credentails
  * @memberof Configuration.xhrFields
  */
  withCredentials: false,
  /**
  * user property
  * @property {string} user the username for credentials
  * @memberof Configuration
  */
  user: null,
  /**
  * password property
  * @property {string} password the password for credentials
  * @memberof Configuration
  */
  password: null,
  /**
  * allowOrigins property
  * @property {string} allowOrigins the allowed origins for crossDomain
  * @memberof Configuration
  */
  allowOrigins: "",
  /**
  * allowMethods property
  * @property {string} allowMethods the allowed methods for crossDomain
  * @memberof Configuration
  */
  allowMethods: null,
  /**
  * headers property
  * @property {object} headers an object of headers (key, value)
  * @memberof Configuration
  */
  headers: {},
  /**
  * success callback
  * @property {function} success a callback for success
  * @memberof Configuration
  */
  success: null,
  /**
  * error callback
  * @property {function} error a callback for error
  * @memberof Configuration
  */
  error: null,
  /**
  * complete callback
  * @property {function} complete a callback after the ajax call
  * @memberof Configuration
  */
  complete: null,
  /**
  * beforeSend callback
  * @property {function} beforeSend a callback before the ajax call
  * @memberof Configuration
  */
  beforeSend: null,
  /**
  * mock
  * @property {boolean} mock a toggle to mock the ajax call
  * @memberof Configuration
  */
  mock: false
};

export default Configuration;
