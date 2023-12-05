const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());

/**
 * routes here
 */

app.get("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, async () => {
  try {
    // add db con
    console.log("Server listening on port", PORT);
  } catch (error) {
    console.log("Error Connecting", error);
  }
});
