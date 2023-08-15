const Client = require("../models/Client");

const getClients = async (req, res) => {
  try {
    let clients = await Client.find();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getClient = async (req, res) => {
  try {
    let { id } = req.params;
    let foundClient = await Client.findById(id);
    res.status(200).json(foundClient);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const addClient = async (req, res) => {
  try {
    let payload = req.body;
    let createClient = await Client.create(payload);
    res.status(201).json({
      message: "client has been added",
      client: createClient,
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const deleteClient = async (req, res) => {
  try {
    let { id } = req.query;
    await Client.deleteOne({ _id: id });
    res.status(201).json({
      message: "client has been deleted",
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
const updateClient = async (req, res) => {
  try {
    let { id } = req.query;
    await Client.findByIdAndUpdate(id, { name: "Nombre nuevo" });
    res.status(201).json({
      message: "client has been updated",
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
module.exports = {
  getClients,
  getClient,
  addClient,
  deleteClient,
  updateClient,
};
