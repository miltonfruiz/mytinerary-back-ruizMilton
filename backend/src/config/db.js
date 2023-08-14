const { connect } = require("mongoose");

const URL =
  "mongodb+srv://miltonfruizok:<Oo8J985QBg2cN5MM>@cluster0.14r2qon.mongodb.net/?retryWrites=true&w=majority";

connect(URL)
  .then(() => {
    console.log("Connect success to database");
  })
  .catch(() => {
    console.log("Error connecting to database");
  });
