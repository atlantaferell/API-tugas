"use strict";

const {
  User,
  Bab,
  Kelas,
  MataPelajaran,
  Material,
  Mode,
  SubBab,
  Progres,
} = require("../../models");

module.exports = {
  async up(queryInterface, _Sequelize) {
    await Bab.destroy({ truncate: true });
    await Kelas.destroy({ truncate: true });
    await MataPelajaran.destroy({ truncate: true });
    await Material.destroy({ truncate: true });
    await Mode.destroy({ truncate: true });
    await SubBab.destroy({ truncate: true });
    await User.destroy({ truncate: true });
    await Progres.destroy({ truncate: true });

    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        Nama: "Ferell",
        Email: "test1@example.com",
        Password:
          "$2a$12$.HOb8SlLxGN4usHDihNaQe6IFDodXO09pO6Nfi.M96XzcTJ9F1HDu", //Qwerty123,
      },
      {
        id: 2,
        Nama: "Geo",
        Email: "test2@example.com",
        Password:
          "$2a$12$.HOb8SlLxGN4usHDihNaQe6IFDodXO09pO6Nfi.M96XzcTJ9F1HDu",
      },
      {
        id: 3,
        Nama: "Atlanta",
        Email: "test3@example.com",
        Password:
          "$2a$12$.HOb8SlLxGN4usHDihNaQe6IFDodXO09pO6Nfi.M96XzcTJ9F1HDu",
      },
    ]);
    await queryInterface.bulkInsert("kelas", [
      { id: 1, Nama: "Kelas 1" },
      { id: 2, Nama: "Kelas 2" },
      { id: 3, Nama: "Kelas 3" },
      { id: 4, Nama: "Kelas 4" },
      { id: 5, Nama: "Kelas 5" },
      { id: 6, Nama: "Kelas 6" },
      { id: 7, Nama: "Kelas 7" },
      { id: 8, Nama: "Kelas 8" },
      { id: 9, Nama: "Kelas 9" },
      { id: 10, Nama: "Kelas 10" },
      { id: 11, Nama: "Kelas 11" },
      { id: 12, Nama: "Kelas 12" },
      { id: 13, Nama: "Kelas 10 SMK" },
      { id: 14, Nama: "Kelas 11 SMK" },
      { id: 15, Nama: "Kelas 12 SMK" },
      { id: 16, Nama: "UTBK & Ujian Mandiri" },
      { id: 17, Nama: "Pelatihan Guru" },
    ]);
    await queryInterface.bulkInsert("modes", [
      { id: 1, Nama: "Kurikulum Merdeka", KelasID: 1 },
      { id: 2, Nama: "Kurikulum Merdeka", KelasID: 2 },
      { id: 3, Nama: "Kurikulum Merdeka", KelasID: 3 },
      { id: 4, Nama: "Kurikulum Merdeka", KelasID: 4 },
      { id: 5, Nama: "Kurikulum Merdeka", KelasID: 5 },
      { id: 6, Nama: "Kurikulum Merdeka", KelasID: 6 },
      { id: 7, Nama: "Kurikulum Merdeka", KelasID: 7 },
      { id: 8, Nama: "Kurikulum Merdeka", KelasID: 8 },
      { id: 9, Nama: "Kurikulum Merdeka", KelasID: 9 },
      { id: 10, Nama: "Kurikulum Merdeka", KelasID: 10 },
      { id: 11, Nama: "Kurikulum Merdeka", KelasID: 11 },
      { id: 12, Nama: "Kurikulum Merdeka", KelasID: 12 },
      { id: 13, Nama: "Pembelajaran Tematik", KelasID: 13 },
      { id: 14, Nama: "Pembelajaran Tematik", KelasID: 14 },
      { id: 15, Nama: "Pembelajaran Tematik", KelasID: 15 },
      { id: 16, Nama: "Pembelajaran Menurut Topik", KelasID: 16 },
      { id: 17, Nama: "Pembelajaran Menurut Topik", KelasID: 17 },
    ]);
    await queryInterface.bulkInsert("matapelajarans", [
      { id: 1, Nama: "Matematika", ModeID: 1 },
      { id: 2, Nama: "Bahasa Indonesia", ModeID: 1 },
      { id: 3, Nama: "IPA Terpadu", ModeID: 1 },
      { id: 4, Nama: "Pendidikan Karakter", ModeID: 1 },
      { id: 5, Nama: "RuangNgaji", ModeID: 1 },
      { id: 6, Nama: "Matematika", ModeID: 13 },
      { id: 7, Nama: "Bahasa Indonesia", ModeID: 13 },
      { id: 8, Nama: "IPA Terpadu", ModeID: 13 },
      { id: 9, Nama: "Pendidikan Karakter", ModeID: 13 },
      { id: 10, Nama: "RuangNgaji", ModeID: 13 },
      { id: 11, Nama: "Matematika", ModeID: 16 },
      { id: 12, Nama: "Bahasa Indonesia", ModeID: 16 },
      { id: 13, Nama: "IPA Terpadu", ModeID: 16 },
      { id: 14, Nama: "Pendidikan Karakter", ModeID: 16 },
      { id: 15, Nama: "RuangNgaji", ModeID: 16 },
    ]);
    await queryInterface.bulkInsert("babs", [
      {
        id: 1,
        Nama: "Bab 1",
        Thumbnail: "thumbnail1.jpg",
        JumlahSubBabGratis: 3,
        MataPelajaranID: 1,
      },
      {
        id: 2,
        Nama: "Bab 2",
        Thumbnail: "thumbnail2.jpg",
        JumlahSubBabGratis: 2,
        MataPelajaranID: 2,
      },
      {
        id: 3,
        Nama: "Bab 3",
        Thumbnail: "thumbnail3.jpg",
        JumlahSubBabGratis: 1,
        MataPelajaranID: 3,
      },
    ]);
    await queryInterface.bulkInsert("subbabs", [
      {
        id: 1,
        Nama: "Sub-Bab 1",
        Thumbnail: "thumbnail1.jpg",
        LabelGratis: true,
        BabID: 1,
      },
      {
        id: 2,
        Nama: "Sub-Bab 2",
        Thumbnail: "thumbnail2.jpg",
        LabelGratis: false,
        BabID: 1,
      },
      {
        id: 3,
        Nama: "Sub-Bab 3",
        Thumbnail: "thumbnail3.jpg",
        LabelGratis: true,
        BabID: 2,
      },
    ]);
    await queryInterface.bulkInsert("materials", [
      {
        id: 1,
        Nama: "Material 1",
        Thumbnail: "thumbnail1.jpg",
        XP: 100,
        Gold: 50,
        Tipe: "Tipe 1",
        StatusSelesai: true,
        SubBabID: 1,
      },
      {
        id: 2,
        Nama: "Material 2",
        Thumbnail: "thumbnail2.jpg",
        XP: 150,
        Gold: 75,
        Tipe: "Tipe 2",
        StatusSelesai: false,
        SubBabID: 2,
      },
      {
        id: 3,
        Nama: "Material 3",
        Thumbnail: "thumbnail3.jpg",
        XP: 200,
        Gold: 100,
        Tipe: "Tipe 3",
        StatusSelesai: true,
        SubBabID: 3,
      },
    ]);
    await queryInterface.bulkInsert("progres", [
      {
        id: 1,
        UserID: 1,
        MaterialID: 1,
        XP: 50,
      },
      {
        id: 2,
        UserID: 2,
        MaterialID: 2,
        XP: 100,
      },
      {
        id: 3,
        UserID: 3,
        MaterialID: 3,
        XP: 150,
      },
    ]);
  },

  async down(_queryInterface, _Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
