const { Kelas, Mode } = require("../models");

// Controller untuk mendapatkan data list of kelas
async function getListOfKelas(req, res, next) {
  try {
    const kelasList = await Kelas.findAll({
      attributes: ["id", "Nama"],
    });
    res.json(kelasList);
  } catch (error) {
    next(error);
  }
}

// Controller untuk mendapatkan data list of mode dengan informasi kelas
async function getListOfModeWithKelas(req, res, next) {
  try {
    const modeList = await Mode.findAll({
      include: [
        {
          model: Kelas,
          as: "Kelas", // Alias harus sesuai dengan yang didefinisikan di model
          attributes: ["id", "Nama"],
          required: true, // Menggunakan INNER JOIN
        },
      ],
      attributes: ["id", "Nama", "KelasID"],
    });
    res.json(modeList);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getListOfKelas,
  getListOfModeWithKelas,
};
