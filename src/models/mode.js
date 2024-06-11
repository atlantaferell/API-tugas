"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Mode extends Model {
    static associate(models) {
      Mode.belongsTo(models.Kelas, { foreignKey: "KelasID", as: "Kelas" });
      Mode.hasMany(models.MataPelajaran, {
        foreignKey: "ModeID",
        as: "MataPelajarans",
      });
    }
  }

  Mode.init(
    {
      Nama: DataTypes.STRING,
      KelasID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Mode",
    }
  );

  return Mode;
};
