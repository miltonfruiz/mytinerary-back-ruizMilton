const cityDataVerification = (req, res, next) => {
  let { city, country, age } = req.body;
  if (
    !city ||
    !country ||
    !images ||
    !region ||
    !population ||
    !money ||
    !monument ||
    !description
  ) {
    return res.status(400).json({ message: "x ¡Invalid data! x" });
  }
  if (city == "") {
    return res.status(400).json({ message: "x ¡Invalid city! x" });
  }
  if (country == "") {
    return res.status(400).json({ message: "x ¡Invalid country! x" });
  }
  if (images == "") {
    return res.status(400).json({ message: "x ¡Invalid image! x" });
  }
  if (region == "") {
    return res.status(400).json({ message: "x ¡Invalid region! x" });
  }
  if (population == 0) {
    return res.status(400).json({ message: "x ¡Invalid population! x" });
  }
  if (money == "") {
    return res.status(400).json({ message: "x ¡Invalid money! x" });
  }
  if (monument == "") {
    return res.status(400).json({ message: "x ¡Invalid monument! x" });
  }
  if (description == "") {
    return res.status(400).json({ message: "x ¡Invalid description! x" });
  }
  next();
};
module.exports = { cityDataVerification };
