const { Schema, model, Types } = require("mongoose");

const schemaSignUp = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  images: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});
const SignUp = model("SignUp", schemaSignUp);
module.exports = SignUp;
