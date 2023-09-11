const { passwordVerify } = require("../middlewares/authVerification");
const User = require("../models/Users");

const userCreator = async (req, res) => {
  try {
    let payload = req.body;
    let existingUser = await User.findOne({ email: payload.email });
    if (existingUser) {
      return res.status(403).json({ message: "x ¡User already exists! x" });
    }
    let userCreated = await User.create(payload);
    res.status(200).json({
      message: "User created successfully",
      userCreated,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { password, email } = req.body;
    const foundedUser = await User.findOne({ email: email });
    if (foundedUser) {
      if (passwordVerify(password, foundedUser.password)) {
        return (
          res.status(200).json /
          { message: "Successfully logged in", user: foundedUser }
        );
      } else {
        return res.status(400).json({ message: "Wrong password" });
      }
    } else {
      res.status(400).json({ message: "User not founded" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  userCreator,
  login,
};
