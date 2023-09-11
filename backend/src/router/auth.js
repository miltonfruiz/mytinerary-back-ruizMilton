const express = require("express");
const { login, createAccount } = require("../controller/usersControllers");
const { userDataVerification } = require("../middlewares/usersVerification");
const { hashPassword } = require("../middlewares/authVerification");
const authRouter = express.Router();

authRouter.post("/register", userDataVerification, hashPassword, createAccount);
authRouter.post("/login", userDataVerification, login);

module.exports = authRouter;
