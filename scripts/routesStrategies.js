const express = require("express");
const router = express.Router();

var requestManager = {
  // router: router,
};

requestManager.execute = (verb, route, callbackF) => {
  return requestManager[verb].call(requestManager, route, callbackF);
};

// Handling GET requests
requestManager.get = (route, callbackF) => {
  router.get(route, (req, res) => {
    callbackF(req, res);
  });
};

// Handling POST requests
requestManager.post = (route, callbackF) => {
  router.post(route, (req, res) => {
    callbackF(req, res);
  });
};

// Handling DELETE requests
requestManager.delete = (route, callbackF) => {
  router.delete(route, (req, res) => {
    callbackF(req, res);
  });
};

// Handling PUT requests
requestManager.put = (route, callbackF) => {
  router.put(route, (req, res) => {
    callbackF(req, res);
  });
};

requestManager.patch = (route, callbackF) => {
  router.put(route, (req, res) => {
    callbackF(req, res);
  });
};

module.exports = { router, requestManager };
