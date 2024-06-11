const express = require("express");
const { verifyToken } = require("../middlewares/auth");
const {
  getListOfMataPelajaran,
} = require("../controllers/matapelajaran.controller");

const router = express.Router();

router.get("/", verifyToken, getListOfMataPelajaran);
module.exports = router;
