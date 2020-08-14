import Sequelize from "sequelize";

const sequelize = new Sequelize("slack", "postgres", "number1", {
  dialect: "postgres",
  logging: true,
});

const modelDefiners = [
  require("./users"),
  require("./channel"),
  //   require("./member"),
  require("./message"),
  require("./team"),
];

// We define all models according to their files.
Object.keys(modelDefiners).forEach((modelName) => {
  if ("associate" in modelDefiners[modelName]) {
    modelDefiners[modelName].associate(models);
  }
});
sequelize.sync({ force: true });
// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
