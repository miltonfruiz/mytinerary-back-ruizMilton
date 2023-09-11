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
module.exports = {
  hashPassword,
};
