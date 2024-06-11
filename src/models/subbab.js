"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class SubBab extends Model {
    static associate(models) {
      SubBab.belongsTo(models.Bab, { foreignKey: "BabID" });
      SubBab.hasMany(models.Material, { foreignKey: "SubBabID" });
    }
  }

  SubBab.init(
    {
      Nama: DataTypes.STRING,
      Thumbnail: DataTypes.STRING,
      LabelGratis: DataTypes.BOOLEAN,
      BabID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "SubBab",
    }
  );

  return SubBab;
};
