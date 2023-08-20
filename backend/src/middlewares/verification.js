const verifyDataCities = (req, res, next) => {
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
    return res.status(400).json({ message: "invalid data" });
  }
  if (city == "") {
    return res.status(400).json({ message: "invalid city" });
  }
  if (country == "") {
    return res.status(400).json({ message: "invalid country" });
  }
  if (images == "") {
    return res.status(400).json({ message: "invalid image" });
  }
  if (region == "") {
    return res.status(400).json({ message: "invalid region" });
  }
  if (population == 0) {
    return res.status(400).json({ message: "invalid population" });
  }
  if (money == "") {
    return res.status(400).json({ message: "invalid money" });
  }
  if (monument == "") {
    return res.status(400).json({ message: "invalid monument" });
  }
  if (description == "") {
    return res.status(400).json({ message: "invalid description" });
  }
  next();
};
module.exports = { verifyDataCities };
