const { authJwt } = require("../middleware");
const controller = require("../controllers/index.controller");
const controllerr = require("../controllers/auth.controller");

module.exports = function (app) {
  //index get
  app.get("/", controller.index);
  //index post
  app.post("/", controller.snapshot);
  //login get
  app.get("/login", controller.login);
  //login get
  app.post("/login", controllerr.signin);
  //register get
  app.get("/register", controller.register);
  //register get
  app.post("/register", controllerr.signup);
  //token get
  app.get("/api/token", authJwt.verifyToken);
};
