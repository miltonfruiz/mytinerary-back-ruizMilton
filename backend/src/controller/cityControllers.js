const Cities = require("../models/City");

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
const addCities = async (req, res) => {
  try {
    let payload = req.body;
    let createCities = await Cities.create(payload);
    res.status(201).json({
      message: "cities has been added",
      cities: createCities,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const deleteCities = async (req, res) => {
  try {
    let { id } = req.query;
    await Cities.deleteOne({ _id: id });
    res.status(201).json({ message: "cities has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const updateCities = async (req, res) => {
  try {
    let { id } = req.query;
    await Cities.findByIdAndUpdate(id, { name: "New name" });
    res.status(201).json({
      message: "cities has been updated",
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
module.exports = {
  getCities,
  getCitiesId,
  addCities,
  deleteCities,
  updateCities,
};
