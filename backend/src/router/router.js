const express = require("express");
const router = express.Router();
const {
  getClient,
  getClients,
  addClient,
} = require("../controller/clientsController");

router.get("/clients", getClients);
router.get("/client/:id", getClient);
router.post("/clients", addClient);

module.exports = router;
