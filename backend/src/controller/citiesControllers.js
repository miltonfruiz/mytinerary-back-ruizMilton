const Cities = require("../models/Cities");

const getCities = async (req, res) => {
  try {
    let cities = await Cities.find();
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCities };
