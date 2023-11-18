const {
  configureServer,
  startServer,
  requestManager,
} = require("./scripts/serverFacade.js");

const ExpressApp = {
  config: configureServer,
  listen: startServer,
  use: requestManager.execute,
};

module.exports = ExpressApp;
