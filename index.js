const express = require("express");

const fs = require("fs/promises");
const cors = require("cors");
const _ = require("lodash"); // For helperfunctions, using for picking random values easier than using equations

const app = express();
const port = 3000;

// Controller Imports
const { carValue } = require("./controllers/carValue.js");
const { riskRating } = require("./controllers/riskRating.js");
const { quote } = require("./controllers/quote.js");

// Middleware to parse URL-encoded data and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoints
app.post("/carValue", carValue); // Accept POST request to allow for body input in JSON format

app.post("/riskRating", riskRating);

app.get("/quote", quote);

// Start the Express server and log confirmation message once it's running
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

module.exports = app;
