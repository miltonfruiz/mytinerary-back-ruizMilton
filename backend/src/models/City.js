const { Schema, model } = require("mongoose");

const schemaCity = new Schema({
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  population: {
    type: Number,
    required: true,
  },
  badge: {
    type: String,
    required: true,
  },
  monument: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const City = model("City", schemaCity);
module.exports = City;
