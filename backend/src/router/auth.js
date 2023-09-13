const express = require("express");
const {
  login,
  createAccount,
  authenticated,
} = require("../controller/usersControllers");
const { userDataVerification } = require("../middlewares/usersVerification");
const {
  hashPassword,
  userVerify,
  passwordVerify,
  generatedToken,
} = require("../middlewares/authVerification");
const authRouter = express.Router();

authRouter.post("/register", userDataVerification, hashPassword, createAccount);
authRouter.post(
  "/login",
  userDataVerification,
  userVerify,
  passwordVerify,
  generatedToken,
  login
);
authRouter.post("/authenticated", generatedToken, authenticated);

module.exports = authRouter;
