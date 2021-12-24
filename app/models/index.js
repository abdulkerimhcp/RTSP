const config = require("../config/db.config.js");
//Veritabanı Bağlantısı
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//Veritabanı models
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.snapshot = require("../models/snapshot.model.js")(sequelize, Sequelize);
db.log = require("../models/log.model.js")(sequelize, Sequelize);

module.exports = db;
