const express = require("express");
const router = require("./router/router");
const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000");
});
