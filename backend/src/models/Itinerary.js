const { Schema, model } = require("mongoose");

const schemaItineary = new Schema({
  images: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
});
const Itinerary = model("Itinerary", schemaItineary);
module.exports = Itinerary;
