const express = require("express");
const router = express.Router();

// @route GET appi/posts/test
// @desc Tests post route
// @access Public
router.get("/test", (req, res) => {
  res.json({ msg: "Got to Posts route" });
});

module.exports = router;
