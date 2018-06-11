const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB config

const db = require("./config/keys").mongoURI;

// connect to Mongo db:
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hello");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  `server running on port ${PORT}`;
});
