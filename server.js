const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Require all models
const db = require("./index.js");

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/knack";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build/public"));
}

// Route for getting all tips from the db
app.get("/", function (req, res) {
  db.Tip.find({})
    .then(function (dbTip) {
      res.json(dbTip);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for grabbing a tips by their associated knack
app.get("/:knack", function (req, res) {
  db.Tip.find({ knack: req.params.knack })
    .then(function (dbTip) {
      res.json(dbTip);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for saving a tip associated with its knack
app.post("/", function (req, res) {
  db.Tip.create({
    tip: req.body.tip,
    knack: req.body.knack,
  }).then(tip => {
    res.json(tip)
  });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
