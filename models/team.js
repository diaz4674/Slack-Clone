export default (sequelize, DataTypes) => {
  const Team = sequelize.define("team", {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    members: DataTypes.STRING,
  });

  Team.associate = (models) => {
    Team.belongsToMany(models.User, {
      through: "member",
      foreignKey: "teamId",
    });
    Team.belongsTo(models.User, {
      foreignKey: "owner",
    });
  };
  return Team;
};
