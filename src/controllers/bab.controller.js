// controllers/babController.js

const { Bab, SubBab, Progres } = require("../models");

const getBabByMataPelajaran = async (req, res) => {
  const { id_mata_pelajaran } = req.query;

  try {
    const babs = await Bab.findAll({
      where: { MataPelajaranID: id_mata_pelajaran },
      include: [
        {
          model: SubBab,
          attributes: ["id", "LabelGratis"],
        },
      ],
    });

    const result = babs.map((bab) => ({
      id: bab.id,
      Nama: bab.Nama,
      Thumbnail: bab.Thumbnail,
      JumlahSubBabGratis: bab.JumlahSubBabGratis,
      SubBabs: bab.SubBabs.map((subBab) => ({
        id: subBab.id,
        LabelGratis: subBab.LabelGratis,
      })),
    }));

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getBabByMataPelajaran,
};
