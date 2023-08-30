const Itinerary = require("../models/Itinerary");
const City = require("../models/City");

const getItineraries = async (req, res) => {
  try {
    let itinerary = await Itinerary.find();
    res.status(200).json(itinerary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getItinerariesCity = async (req, res) => {
  try {
    let { city } = req.params;
    let foundItinerary = await City.findOne({ _city: city });
    res.status(200).json(foundItinerary.itineraries);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getItineraryId = async (req, res) => {
  try {
    let { id } = req.params;
    let foundCity = await Itinerary.findById(id).populate("itineraries");
    res.status(200).json(foundCity);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const postItinerary = async (req, res) => {
  try {
    let { id } = req.query;
    let foundedCity = await City.findById(id);
    let newItinerary = await Itinerary.create({
      name: req.query.name,
      images: req.query.images,
      price: req.query.price,
      duration: req.query.duration,
      comments: req.query.comments,
      _city: foundedCity,
    });
    await foundedCity.updateOne({
      itineraries: [...foundedCity.itineraries, newItinerary],
    });
    let foundedCityUpdated = await City.findById(id).populate("itineraries");
    res.status(200).json({
      message: "The itinerary has been added successfully!",
      Updated: foundedCityUpdated,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const putItinerary = async (req, res) => {
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
const deleteItinerary = async (req, res) => {
  try {
    let { id } = req.query;
    await Itinerary.deleteOne({ _id: id });
    res
      .status(201)
      .json({ message: "The itinerary has been deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
module.exports = {
  getItineraries,
  getItinerariesCity,
  getItineraryId,
  postItinerary,
  putItinerary,
  deleteItinerary,
};
