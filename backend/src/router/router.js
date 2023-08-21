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
//const { addAccount } = require("../controller/accountsController");

router.get("/city", getCity);
router.get("/city/:id", getCityId);
router.post("/city", cityDataVerification, postCity);
router.delete("/city", cityDataVerification, deleteCity);
router.put("/city", cityDataVerification, updateCity);
// router.post("/accounts", addAccount);

module.exports = router;
