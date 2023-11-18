// serverFacade.js

const express = require("express");
const app = express();

const { router, requestManager } = require("./routesStrategies");

// Mounting the router
app.use("/", router); // Mounting at /api, for example

function configureServer(callbackF) {
  // Any common server configurations, middleware, error handling, etc.
  // Example: app.use(express.json());
  callbackF(app);
}

function startServer(port) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = { configureServer, startServer, requestManager };
