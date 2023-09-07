const User = require("../models/Users");

const userCreator = async (req, res) => {
  try {
    let payload = req.body;
    let existingUser = await User.findOne({ email: payload.email });
    if (existingUser) {
      res.status(403).json({ message: "¡User already exists!" });
    }
    let userCreate = await User.create(payload);
    res.status(200).json({
      message: "User created successfully",
      userCreate,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
module.exports = {
  userCreator,
};
