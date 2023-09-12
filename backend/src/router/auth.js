const express = require("express");
const { login, createAccount } = require("../controller/usersControllers");
const { userDataVerification } = require("../middlewares/usersVerification");
const {
  hashPassword,
  userVerify,
  passwordVerify,
} = require("../middlewares/authVerification");
const authRouter = express.Router();

authRouter.post("/register", userDataVerification, hashPassword, createAccount);
authRouter.post(
  "/login",
  userDataVerification,
  userVerify,
  passwordVerify,
  login
);

module.exports = authRouter;
