const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  return mongoose.connect(process.env.MONGO_CON);
};

module.exports = { connect };
