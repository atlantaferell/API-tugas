"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Materials", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Nama: {
        type: Sequelize.STRING,
      },
      Thumbnail: {
        type: Sequelize.STRING,
      },
      XP: {
        type: Sequelize.INTEGER,
      },
      Gold: {
        type: Sequelize.INTEGER,
      },
      Tipe: {
        type: Sequelize.STRING,
      },
      StatusSelesai: {
        type: Sequelize.BOOLEAN,
      },
      SubBabID: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Materials");
  },
};
