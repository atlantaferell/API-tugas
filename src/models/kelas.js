"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    static associate(models) {
      Kelas.hasMany(models.Mode, { foreignKey: "KelasID", as: "Modes" });
    }
  }

  Kelas.init(
    {
      Nama: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Kelas",
    }
  );

  return Kelas;
};
