const express = requiere("express");
const router = express.Router();

router.get("/clients", (req, res) => {
  res.json({
    clients: {
      name: "john",
      lastname: "johnson",
      age: "16",
    },
  });
});
module.exports = router;
