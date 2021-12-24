//Log Model
module.exports = (sequelize, Sequelize) => {
  const Log = sequelize.define("logs", {
    username: {
      type: Sequelize.STRING,
    },
  });

  return Log;
};
