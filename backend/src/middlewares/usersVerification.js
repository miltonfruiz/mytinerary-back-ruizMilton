const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    "string.min": "x ¡The name must be at least 3 characters long! x",
    "string.max": "x ¡The name must have a maximum of 20 characters! x",
    "string.empty": "x ¡Empty name, please try again! x",
    "any.required": "x ¡Name required! x",
  }),
  lastname: Joi.string().min(3).max(20).required().messages({
    "string.min": "x ¡The lastname must be at least 3 characters long! x",
    "string.max": "x ¡The lastname must have a maximum of 20 characters! x",
    "string.empty": "x ¡Empty lastname, please try again! x",
    "any.required": "x Lastname required! x",
  }),
  email: Joi.string().min(11).max(30).email().required().messages({
    "string.min": "x ¡The email must be at least 11 characters long! x",
    "string.max": "x ¡The email must have a maximum of 30 characters! x",
    "string.email": "x ¡Please enter your email! x",
    "string.empty": "x ¡Empty email, please try again! x",
    "any.required": "x ¡Email required! x",
  }),
  password: Joi.string().min(4).max(20).alphanum().required().messages({
    "string.min": "x ¡The password must be at least 4 characters long! x",
    "string.max": "x ¡The password must have a maximum of 20 characters! x",
    "string.alphanum": "x ¡The password value only a-z A-Z and 0-9! x",
    "string.password": "x ¡Please enter your password! x",
    "string.empty": "x ¡Empty password, please try again! x",
    "any.required": "x ¡Password required! x",
  }),
  images: Joi.string().uri().required().messages({
    "string.uri": "x ¡Please enter your uri! x",
    "string.empty": "x ¡Empty uri, please try again! x",
    "any.required": "x ¡Uri required! x",
  }),
  country: Joi.string().min(5).max(25).required().messages({
    "string.min": "x ¡The country must be at least 4 characters long! x",
    "string.max": "x ¡The country must have a maximum of 25 characters! x",
    "string.empty": "x ¡Empty country, please try again! x",
    "any.required": "x ¡Country required! x",
  }),
});

const userDataVerification = (req, res, next) => {
  const payload = req.body;
  const validatedUser = userSchema.validate(payload);
  if (validatedUser.error) {
    return res.status(400).json({
      message: validatedUser.error.details.map((err) => err.message),
    });
  }
  next();
};
module.exports = {
  userDataVerification,
};
