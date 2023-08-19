const Cities = require("../models/Cities");

const getCities = async (req, res) => {
  try {
    let cities = await Cities.find();
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getCitiesId = async (req, res) => {
  try {
    let { id } = req.params;
    let foundCities = await Cities.findById(id);
    res.status(200).json(foundCities);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { getCities, getCitiesId };
