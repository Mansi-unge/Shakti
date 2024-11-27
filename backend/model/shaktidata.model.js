const mongoose = require("mongoose");

const flightlogSchema = new mongoose.Schema(
  {
    droneName: { type: String, required: true },
    droneSerialNo: { type: String, required: true },
    started: {
      pitch: { type: Number, required: true },
      roll: { type: Number, required: true },
      yaw: { type: Number, required: true },
      altitude: { type: Number, required: true },
      temperature: { type: Number, required: true },
      pressure: { type: Number, required: true }, 
    },
    ended: {
      pitch: { type: Number, required: false },
      roll: { type: Number, required: false },
      yaw: { type: Number, required: false },
      altitude: { type: Number, required: false },
      temperature: { type: Number, required: false },
      pressure: { type: Number, required: false }, 
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Flightlog = mongoose.model("Flightlog", flightlogSchema);

module.exports = Flightlog;
