const { isEmail, isStrongPassword } = require("validator");
const { User: UserModel } = require("../models");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const validateRegister = async (req, res, next) => {
  const { Nama, Email, Password } = req.body;

  if (!Nama || !Email || !Password) {
    return res.status(400).send({
      message: "Name, email, and password are required",
      data: null,
    });
  }

  if (!isEmail(Email)) {
    return res.status(400).send({
      message: "Invalid email",
      data: null,
    });
  }

  if (
    !isStrongPassword(Password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
    })
  ) {
    return res.status(400).send({
      message: "Password is too weak",
      data: null,
    });
  }

  const emailCheck = await UserModel.findOne({
    where: { Email },
  });
  if (emailCheck) {
    return res.status(400).send({
      message: "Email already registered",
      data: null,
    });
  }

  next();
};

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const validateLogin = (req, res, next) => {
  const { Email, Password } = req.body;

  if (!Email || !Password) {
    return res.status(400).send({
      message: "Email and password are required",
      data: null,
    });
  }

  if (!isEmail(Email)) {
    return res.status(400).send({
      message: "Invalid email",
      data: null,
    });
  }

  next();
};
module.exports = { validateRegister, validateLogin };
