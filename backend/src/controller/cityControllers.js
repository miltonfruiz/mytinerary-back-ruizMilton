const City = require("../models/City");

const getCity = async (req, res) => {
  try {
    let city = await City.find();
    res.status(200).json(city);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getCityId = async (req, res) => {
  try {
    let { id } = req.params;
    let foundCity = await City.findById(id);
    res.status(200).json(foundCity);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const addCity = async (req, res) => {
  try {
    let payload = req.body;
    let createCity = await City.create(payload);
    res.status(201).json({
      message: "city has been added",
      city: createCity,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const deleteCity = async (req, res) => {
  try {
    let { id } = req.query;
    await City.deleteOne({ _id: id });
    res.status(201).json({ message: "city has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const updateCity = async (req, res) => {
  try {
    let { id } = req.query;
    await City.findByIdAndUpdate(id, { city: "New city" });
    res.status(201).json({
      message: "city has been updated",
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
module.exports = {
  getCity,
  getCityId,
  addCity,
  deleteCity,
  updateCity,
};
