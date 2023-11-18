const ExpressApp = require("./index.js");

ExpressApp.config((app) => {
  //app.use(midlewares);
});
ExpressApp.use("get", "/a", (req, res) => {
  res.send("suceed a");
});
ExpressApp.use("get", "/b", (req, res) => {
  res.send("suceed b");
});
ExpressApp.listen(3333);
