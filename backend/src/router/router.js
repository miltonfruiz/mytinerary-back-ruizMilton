const express = require("express");
const router = express.Router();
const { getClient, getClients } = require("../controller/clientsController");

router.get("/clients", getClients);
router.get("/client", getClient);

module.exports = router;
