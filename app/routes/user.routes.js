const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  //Kullanıcı okuma
  app.get("/api/user/:id", authJwt.verifyToken, controller.findOne);
  //Kullanıcı güncelleme
  app.put("/api/user/:id", authJwt.verifyToken, controller.update);
  //Kullanıcı silme
  app.delete("/api/user/:id", authJwt.verifyToken, controller.delete);
};
