// authentication
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ msg: "Got to Users route" });
});

module.exports = router;
