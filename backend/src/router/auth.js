const express = require("express");
const { userCreator } = require("../controller/usersControllers");
const authRouter = express.Router();

authRouter.post("/userCreator", userCreator);

module.exports = authRouter;
