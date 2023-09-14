const express = require("express");
const {
  login,
  createAccount,
  authenticated,
  logout,
} = require("../controller/usersControllers");
const { userDataVerification } = require("../middlewares/usersVerification");
const {
  hashPassword,
  userVerify,
  passwordVerify,
  generatedToken,
  passportVerify,
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
authRouter.post(
  "/authenticated",
  passportVerify.authenticate("jwt", { session: false }),
  generatedToken,
  authenticated
);
authRouter.post(
  "/logout",
  passportVerify.authenticate("jwt", { session: false }),
  logout
);
module.exports = authRouter;
