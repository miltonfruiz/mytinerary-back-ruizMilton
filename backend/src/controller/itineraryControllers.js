const Itinerary = require("../models/Itinerary");
const City = require("../models/City");

const getItinerary = async (req, res) => {
  try {
    let itinerary = await Itinerary.find();
    res.status(200).json(itinerary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getItineraryName = async (req, res) => {
  try {
    let { city } = req.params;
    let foundCity = await City.findByCity(city);
    res.status(200).json(foundCity);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getItineraryId = async (req, res) => {
  try {
    let { id } = req.params;
    let foundItinerary = await Itinerary.findById(id);
    res.status(200).json(foundItinerary);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const postItinerary = async (req, res) => {
  try {
    let payload = req.body;
    let createItinerary = await Itinerary.create(payload);
    res.status(201).json({
      message: "The itinerary has been added successfully!",
      itinerary: createItinerary,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const updateItinerary = async (req, res) => {
  try {
    let { id } = req.query;
    await Itinerary.findByIdAndUpdate(
      id,
      { name: req.query.name },
      { images: req.query.images },
      { price: req.query.price },
      { duration: req.query.duration },
      { comments: req.query.comments }
    );
    res.status(201).json({
      message: "The itinerary has been updated successfully!",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
