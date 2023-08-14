const { Schema, model, Types } = require("mongoose");

const schemaClient = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  empresa_BelongTo: { type: Types.ObjectId, ref: "Empresa" },
});

const Client = model("Cliente", schemaClient);
module.exports = Client;
