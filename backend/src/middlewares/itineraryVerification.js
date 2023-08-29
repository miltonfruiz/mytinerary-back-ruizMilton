const itineraryDataVerification = (req, res, next) => {
  let { name, images, price, duration, comments } = req.body;
  if (!name || !images || !price || !duration || !comments) {
    return res.status(400).json({ message: "x ¡Invalid dataaaaaaaaaaaaa! x" });
  }
  if (name == "") {
    return res.status(400).json({ message: "x ¡Invalid name! x" });
  }
  if (images == "") {
    return res.status(400).json({ message: "x ¡Invalid images! x" });
  }
  if (price == 0) {
    return res.status(400).json({ message: "x ¡Invalid price! x" });
  }
  if (duration == "") {
    return res.status(400).json({ message: "x ¡Invalid duration! x" });
  }
  if (comments == "") {
    return res.status(400).json({ message: "x ¡Invalid comments! x" });
  }
  next();
};
module.exports = { itineraryDataVerification };
