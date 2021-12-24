//Snapshot Model
module.exports = (sequelize, Sequelize) => {
  const Snapshot = sequelize.define("snapshots", {
    path: {
      type: Sequelize.STRING,
    },
  });

  return Snapshot;
};
