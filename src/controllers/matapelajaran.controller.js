const {
  MataPelajaran: MataPelajaranModel,
  Mode: ModeModel,
  Kelas: KelasModel,
} = require("../models");

const getListOfMataPelajaran = async (req, res, next) => {
  const { id_kelas, id_mode_pembelajaran } = req.query;

  if (!id_kelas || !id_mode_pembelajaran) {
    return res.status(400).send({
      message: "error",
      error: "id_kelas and id_mode_pembelajaran are required",
    });
  }

  try {
    const mataPelajaranList = await MataPelajaranModel.findAll({
      include: [
        {
          model: ModeModel,
          as: "Mode",
          where: { id: id_mode_pembelajaran },
          include: [
            {
              model: KelasModel,
              as: "Kelas",
              where: { id: id_kelas },
            },
          ],
        },
      ],
      attributes: [
        ["id", "MataPelajaranID"],
        ["Nama", "MataPelajaranNama"],
      ],
      raw: true,
    });

    const result = mataPelajaranList.map((mataPelajaran) => ({
      MataPelajaranID: mataPelajaran.MataPelajaranID,
      MataPelajaranNama: mataPelajaran.MataPelajaranNama,
      ModeID: id_mode_pembelajaran,
      ModeNama: mataPelajaran["Mode.Nama"],
      KelasID: id_kelas,
      KelasNama: mataPelajaran["Mode.Kelas.Nama"],
    }));

    return res.send({
      message: "success",
      data: result,
    });
  } catch (error) {
    return res.status(500).send({
      message: "error",
      error: error.message,
    });
  }
};

module.exports = { getListOfMataPelajaran };
