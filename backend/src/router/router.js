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

router.get("/city", getCity);
router.get("/city/:id", getCityId);
router.post("/city", cityDataVerification, postCity);
router.delete("/city", cityDataVerification, deleteCity);
router.put("/city", cityDataVerification, updateCity);

router.get("/itinerary", getItineraries);
router.get("/city/:id", getItinerariesCity);
router.get("/itinerary/:id", getItineraryId);
router.post("/itinerary", itineraryDataVerification, postItinerary);
router.put("/itinerary", itineraryDataVerification, putItinerary);
router.delete("/itinerary", itineraryDataVerification, deleteItinerary);

module.exports = router;
