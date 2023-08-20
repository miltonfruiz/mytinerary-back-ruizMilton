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
  image: {
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
  money: {
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
