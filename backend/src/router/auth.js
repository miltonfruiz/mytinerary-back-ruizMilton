const express = require("express");
const { userCreator } = require("../controller/usersControllers");
const authRouter = express.Router();

authRouter.post("/register", userCreator);

module.exports = authRouter;
