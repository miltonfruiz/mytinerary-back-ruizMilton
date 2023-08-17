const express = require("express");
const router = express.Router();
const {
  getClient,
  getClients,
  addClient,
  deleteClient,
  updateClient,
} = require("../controller/clientsController");
const { verifyDataClient } = require("../middlewares/verification");
const { addAccount } = require("../controller/accountsController");

router.get("/clients", getClients);
router.get("/clients/:id", getClient);
router.post("/clients", verifyDataClient, addClient);
router.delete("/clients", verifyDataClient, deleteClient);
router.put("/clients", verifyDataClient, updateClient);
router.post("/accounts", addAccount);

module.exports = router;
