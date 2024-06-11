"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    static associate(models) {
      Material.belongsTo(models.SubBab, { foreignKey: "SubBabID" });
      Material.hasMany(models.Progres, { foreignKey: "MaterialID" });
    }
  }

  Material.init(
    {
      Nama: DataTypes.STRING,
      Thumbnail: DataTypes.STRING,
      XP: DataTypes.INTEGER,
      Gold: DataTypes.INTEGER,
      Tipe: DataTypes.STRING,
      StatusSelesai: DataTypes.BOOLEAN,
      SubBabID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Material",
    }
  );

  return Material;
};
