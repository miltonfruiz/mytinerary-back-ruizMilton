const express = require("express");
const { userCreator } = require("../controller/usersControllers");
const { userDataVerification } = require("../middlewares/usersVerification");
const { hashPassword } = require("../middlewares/authVerification");
const authRouter = express.Router();

authRouter.post("/register", userDataVerification, hashPassword, userCreator);
authRouter.post("/login", userDataVerification);

module.exports = authRouter;
