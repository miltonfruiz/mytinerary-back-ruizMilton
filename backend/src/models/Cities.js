const { Schema, model } = require("mongoose");

const schemaCities = new Schema({
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
    type: String,
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

const Cities = model("Cities", schemaCities);
module.exports = Cities;
