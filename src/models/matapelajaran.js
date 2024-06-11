"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MataPelajaran extends Model {
    static associate(models) {
      MataPelajaran.belongsTo(models.Mode, { foreignKey: "ModeID" });
      MataPelajaran.hasMany(models.Bab, { foreignKey: "MataPelajaranID" });
    }
  }

  MataPelajaran.init(
    {
      Nama: DataTypes.STRING,
      ModeID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "MataPelajaran",
    }
  );

  return MataPelajaran;
};
