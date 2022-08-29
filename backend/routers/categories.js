const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Je suis dans l'api des categories ");
});

module.exports = router;
