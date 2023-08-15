const Client = require("../models/Client");

const getClients = async (req, res) => {
  try {
    let clients = await Client.find();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getClient = (req, res) => {
  const { id } = req.params;
  const { data } = req.query;
  if (data) {
    res.json({
      name: "john",
      lastname: "johnson",
      age: "16",
      paramsId: id,
      queryData: data,
    });
  } else {
    res.json({ name: "john", lastname: "johnson", age: "16", paramsId: id });
  }
};
const addClient = (req, res) => {
  res.status(201).json({
    message: "client has been added",
  });
};

module.exports = { getClients, getClient, addClient };
