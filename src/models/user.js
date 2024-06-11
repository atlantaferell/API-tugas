"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Progres, { foreignKey: "UserID" });
    }
  }

  User.init(
    {
      Nama: DataTypes.STRING,
      Email: DataTypes.STRING,
      Password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
