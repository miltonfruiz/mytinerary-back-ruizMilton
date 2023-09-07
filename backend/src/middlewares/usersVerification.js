const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  lastname: Joi.string().min(3).max(20).required(),
  email: Joi.string().min(10).max(20).email().required(),
  password: Joi.string().min(6).max(16).alphanum().required(),
  images: Joi.string().uri().required(),
  country: Joi.string().min(5).max(20).required(),
});

const userDataVerification = (req, res, next) => {};
