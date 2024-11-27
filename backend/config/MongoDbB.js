const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("debug", true); // Enable Mongoose debug mode

const connectToDb = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
      console.log("Connection is successful for MongoDB");
    })
    .catch((e) => {
      console.log("MongoDB connection error: ", e);
    });
};

module.exports = connectToDb;
