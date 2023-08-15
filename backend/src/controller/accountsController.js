const Account = require("../models/Accounts");
const Client = require("../models/Client");

const addAccount = async (req, res) => {
  try {
    let { id } = req.query;
    let foundClient = await Client.findById(id);
    let newAccount = await Account.create({
      number: "VIN001",
      _client: foundClient,
    });
    await foundClient.updateOne({
      accounts: [...foundClient.accounts, newAccount],
    });
    let foundClientUpdated = await Client.findById(id).populate("accounts");
    res.status(200).json({
      message: "Client has been updated succesfully",
      client: foundClientUpdated,
    });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
module.exports = { addAccount };
