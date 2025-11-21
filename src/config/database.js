const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const conn = async () => {
  await mongoose.connect(process.env.MONGO_URI);
};

module.exports = conn;
