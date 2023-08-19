const verifyDataClient = (req, res, next) => {
  let { name, lastName, age } = req.body;
  if (!name || !lastName || !age) {
    return res.status(400).json({ message: "invalid data" });
  }
  if (name == "") {
    return res.status(400).json({ message: "invalid name" });
  }
  if (lastName == "") {
    return res.status(400).json({ message: "invalid lastName" });
  }
  if (age == 0) {
    return res.status(400).json({ message: "invalid age" });
  }
  next();
};
module.exports = { verifyDataClient };
