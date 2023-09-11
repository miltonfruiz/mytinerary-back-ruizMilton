const bcrypt = require("bcrypt");

const hashPassword = (req, res, next) => {
  try {
    const passwordPlain = req.body.password;
    const hashPassword = bcrypt.hashSync(passwordPlain, 10);
    req.body.password = hashPassword;
    next();
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
const passwordVerify = (passwordPlain, hashPassword) => {
  const isValid = bcrypt.compareSync(passwordPlain, hashPassword);
  return isValid;
};

const userVerify = async (req, res, next) => {
  const { email } = req.body;
  const foundedUser = await User.findOne({ email: email });
  if (foundedUser) {
    req.user = foundedUser;
    next();
  } else {
    res.status(400).json({ message: "x ¡User not founded! x" });
  }
};

module.exports = {
  hashPassword,
  passwordVerify,
};
