const { Schema, model, Types } = require("mongoose");
const schemaAccount = new Schema({
  number: {
    type: String,
    required: true,
  },
  _client: { type: Types.ObjectId, ref: "Client" },
});
