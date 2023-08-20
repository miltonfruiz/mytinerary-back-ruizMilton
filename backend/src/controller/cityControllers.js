const City = require("../models/City");

const getCity = async (req, res) => {
  try {
    let city = await City.find();
    res.status(200).json(city);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getCityId = async (req, res) => {
  try {
    let { id } = req.params;
    let foundCity = await City.findById(id);
    res.status(200).json(foundCity);
  } catch (error) {
    res.status(500).json({ message: error });
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
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const deleteCity = async (req, res) => {
  try {
    let { id } = req.query;
    await City.deleteOne({ _id: id });
    res.status(201).json({ message: "city has been deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const updateCity = async (req, res) => {
  try {
    let { id } = req.query;
    await City.findByIdAndUpdate(id, { city: "New city" });
    res.status(201).json({
      message: "city has been updated",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = {
  getCity,
  getCityId,
  addCity,
  deleteCity,
  updateCity,
};
