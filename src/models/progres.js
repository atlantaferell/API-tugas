"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Progres extends Model {
    static associate(models) {
      Progres.belongsTo(models.User, { foreignKey: "UserID" });
      Progres.belongsTo(models.Material, { foreignKey: "MaterialID" });
    }
  }

  Progres.init(
    {
      UserID: DataTypes.INTEGER,
      MaterialID: DataTypes.INTEGER,
      XP: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Progres",
    }
  );

  return Progres;
};
