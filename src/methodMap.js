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

export default METHOD_MAP;
