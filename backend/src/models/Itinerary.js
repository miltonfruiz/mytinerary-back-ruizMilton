const { Schema, model, Types } = require("mongoose");

const schemaItineary = new Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
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
  city: { type: Types.ObjectId, ref: "City" },
});
const Itinerary = model("Itinerary", schemaItineary);
module.exports = Itinerary;
