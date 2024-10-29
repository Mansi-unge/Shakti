const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = async () => {
  mongoose
    .connect(process.env.MONGO_DB, {})
    .then(() => {
      console.log("Connection is Successful establish for MongoDB");
    })
    .catch((e) => {
      console.log("MongoDb Connection error ", e);
    });
};

module.exports = connectToDb;
 