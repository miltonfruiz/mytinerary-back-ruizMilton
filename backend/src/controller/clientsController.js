/// const Client = require("../models/Cities");

// const getClient = async (req, res) => {
//   try {
//     let client = await Client.find();
//     res.status(200).json(client);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
// const getClient = async (req, res) => {
//   try {
//     let { id } = req.params;
//     let foundClient = await Clients.findById(id);
//     res.status(200).json(foundClient);
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// };
// const addClient = async (req, res) => {
//   try {
//     let payload = req.body;
//     let createClient = await Clients.create(payload);
//     res.status(201).json({
//       message: "client has been added",
//       client: createClient,
//     });
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// };
// const deleteClient = async (req, res) => {
//   try {
//     let { id } = req.query;
//     await Clients.deleteOne({ _id: id });
//     res.status(201).json({
//       message: "client has been deleted",
//     });
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// };
// const updateClient = async (req, res) => {
//   try {
//     let { id } = req.query;
//     await Clients.findByIdAndUpdate(id, { name: "Nombre nuevo" });
//     res.status(201).json({
//       message: "client has been updated",
//     });
//   } catch (err) {
//     res.status(500).json({ message: err });
//   }
// };

// module.exports = {
//   getClient,
//   addClient,
//   deleteClient,
//   updateClient,
// };
