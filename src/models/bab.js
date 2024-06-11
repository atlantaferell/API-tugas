"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Bab extends Model {
    static associate(models) {
      Bab.belongsTo(models.MataPelajaran, { foreignKey: "MataPelajaranID" });
      Bab.hasMany(models.SubBab, { foreignKey: "BabID" });
    }
  }

  Bab.init(
    {
      Nama: DataTypes.STRING,
      Thumbnail: DataTypes.STRING,
      JumlahSubBabGratis: DataTypes.INTEGER,
      MataPelajaranID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Bab",
    }
  );

  return Bab;
};
