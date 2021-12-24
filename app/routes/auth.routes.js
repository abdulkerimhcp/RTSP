const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //Kullanıcı Kayıt
  app.post("/api/auth/signup", controller.signup);
  //Kullanıcı Giriş
  app.post("/api/auth/signin", controller.signin);
};