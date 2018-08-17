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

export default Configuration;
