const { User: UserModel } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  const { Nama, Email, Password } = req.body;

  try {
    const passwordHash = await bcrypt.hash(Password, 10);

    const user = await UserModel.create({
      Nama,
      Email,
      Password: passwordHash,
    });

    if (!user) {
      return res.status(500).send({
        message: "Failed to register user",
        data: null,
      });
    }

    return res.status(201).send({
      message: "User successfully registered",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { Email, Password } = req.body;

  try {
    const user = await UserModel.findOne({
      attributes: ["id", "Nama", "Email", "Password"],
      where: { Email },
    });

    if (!user) {
      return res.status(401).send({
        message: "Invalid email / password",
        data: null,
      });
    }

    const isPasswordValid = await bcrypt.compare(Password, user.Password);
    if (!isPasswordValid) {
      return res.status(401).send({
        message: "Invalid email / password",
        data: null,
      });
    }

    const token = jwt.sign(
      { id: user.id, Nama: user.Nama, Email: user.Email },
      process.env.JWT_SECRET
    );

    return res.send({
      message: "User successfully logged in",
      data: { token },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
