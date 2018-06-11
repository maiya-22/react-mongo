// location, bio, etc
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ msg: "Got to Profile route" });
});

module.exports = router;
