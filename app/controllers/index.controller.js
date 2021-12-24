const db = require("../models");
const Snapshot = db.snapshot;

//Index.ejs render fonksiyonu
exports.index = (req, res) => {
  res.render("index");
};

//Login.ejs render fonksiyonu
exports.login = (req, res) => {
  res.render("login");
};

//Register.ejs render fonksiyonu
exports.register = (req, res) => {
  res.render("register");
};

//Snapshot kayıt fonksiyonu
exports.snapshot = (req, res) => {
  const fs = require("fs");
  let a = req.body.image;
  let m = a.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  let b = Buffer.from(m[2], "base64");

  let timestamp = Date.now();
  const path =
    __dirname + `/upload/snapshot_${timestamp}.png`.replace("\\", "/");
  fs.writeFile(path, b, () => {
    Snapshot.create({
      path: path,
    });
    res.json({ path: path });
  });
};
