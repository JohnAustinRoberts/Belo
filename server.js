// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Routes
// =============================================================
// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/events", function(req, res) {
  res.sendFile(path.join(__dirname, "events.html"));
});

app.get("/forum", function(req, res) {
  res.sendFile(path.join(__dirname, "forum.html"));
});

app.get("/projects", function(req, res) {
  res.sendFile(path.join(__dirname, "projects.html"));
})

app.get("/join", function(req, res) {
	res.sendFile(path.join(__dirname, "join.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});