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
  postItinerary,
  getItineraryName,
  getItineraryId,
  updateItinerary,
  deleteItinerary,
} = require("../controller/itineraryControllers");
const {
  itineraryDataVerification,
} = require("../middlewares/itineraryVerification");

router.get("/city", getCity);
router.get("/city/:id", getCityId);
router.post("/city", cityDataVerification, postCity);
router.delete("/city", cityDataVerification, deleteCity);
router.put("/city", cityDataVerification, updateCity);

router.get("/itinerary/:name", getItineraryName);
router.get("/itinerary/:id", getItineraryId);
router.post("/itinerary", postItinerary);
router.put("/itinerary", itineraryDataVerification, updateItinerary);
router.delete("/itinerary", itineraryDataVerification, deleteItinerary);

module.exports = router;
