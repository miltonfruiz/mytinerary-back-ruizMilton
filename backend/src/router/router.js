const express = require("express");
const router = express.Router();
const {
  getCity,
  getCityId,
  postCity,
  deleteCity,
  updateCity,
} = require("../controller/cityControllers");
const { cityDataVerification } = require("../middlewares/cityVerification");

const {
  getItineraries,
  getItinerariesCity,
  getItineraryId,
  postItinerary,
  putItinerary,
  deleteItinerary,
} = require("../controller/itineraryControllers");
const {
  itineraryDataVerification,
} = require("../middlewares/itineraryVerification");

const authRouter = require("./auth");

router.get("/cities", getCity);
router.get("/cities/:id", getCityId);
router.post("/cities", cityDataVerification, postCity);
router.delete("/cities", cityDataVerification, deleteCity);
router.put("/cities", cityDataVerification, updateCity);

router.get("/itinerary", getItineraries);
router.get("/itinerary/:city", getItinerariesCity);
router.get("/itinerary/:id", getItineraryId);
router.post("/itinerary", itineraryDataVerification, postItinerary);
router.put("/itinerary", itineraryDataVerification, putItinerary);
router.delete("/itinerary", itineraryDataVerification, deleteItinerary);

router.use("/user", authRouter);

module.exports = router;
