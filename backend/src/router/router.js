const express = require("express");
const router = express.Router();
const {
  getCities,
  getCitiesId,
  addCities,
  deleteCities,
  updateCities,
} = require("../controller/cityControllers");

const { cityDataVerification } = require("../middlewares/cityVerification");
//const { addAccount } = require("../controller/accountsController");

router.get("/cities", getCities);
router.get("/cities/:id", getCitiesId);
router.post("/cities", cityDataVerification, addCities);
router.delete("/cities", cityDataVerification, deleteCities);
router.put("/cities", cityDataVerification, updateCities);
// router.post("/accounts", addAccount);

module.exports = router;
