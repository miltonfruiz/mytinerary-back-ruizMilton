const express = require("express");
const { userCreator } = require("../controller/usersControllers");
const { userDataVerification } = require("../middlewares/usersVerification");
const authRouter = express.Router();

authRouter.post("/register", userDataVerification, userCreator);

module.exports = authRouter;
