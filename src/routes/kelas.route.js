const express = require("express");
const { verifyToken } = require("../middlewares/auth");
const {
  getListOfKelas,
  getListOfModeWithKelas,
} = require("../controllers/kelas.controller");

const router = express.Router();

router.get("/kelas", verifyToken, getListOfKelas);
router.get("/modes", verifyToken, getListOfModeWithKelas);

module.exports = router;
