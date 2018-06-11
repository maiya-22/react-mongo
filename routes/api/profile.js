// location, bio, etc
const express = require("express");
const router = express.Router();

// @route GET appi/profile/test
// @desc Tests profile route
// @access Public
router.get("/test", (req, res) => {
  res.json({ msg: "Got to Profile route" });
});

module.exports = router;
