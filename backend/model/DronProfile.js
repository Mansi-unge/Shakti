const mongoose = require("mongoose");

const droneProfileSchema = new mongoose.Schema(
  {
    usageDetail: {
      application: { type: String, required: true }, // Example field
      operationalArea: { type: String, required: true }, // Example field
      controlRange: { type: String, required: true }, // in meters
      gpsPositioning: { type: String, required: true }, // true if available
      weatherResistance: { type: String, required: true }, // true if available
    },
    purchaseDetail: {
      owner: { type: String, required: true },
      location: { type: String, required: true },
      phone: { type: String, required: true },
      purchaseDate: { type: String, required: true },
      droneSerialNumber: { type: String, required: true },
      vendor: { type: String, required: true },
      warranty: { type: String, required: true }, // Warranty details
      maintenanceSchedule: { type: String, required: true }, // Maintenance schedule details
    },
    droneDetail: {
      droneModel: { type: String, required: true },
      manufacture: { type: String, required: true },
      droneSerialNumber: { type: String, required: true },
      type: { type: String, required: true }, // Type of drone (e.g., commercial, agricultural)
    },
    specification: {
      maxTakeOffWeight: { type: String, required: true }, // in kg
      payloadCapacity: { type: String, required: true }, // in kg
      spraySystem: { type: String, required: true }, // Details about spray system
      sprayWidth: { type: String, required: true }, // in meters
      batteryCapacity: { type: String, required: true }, // in mAh
      numberOfBatteries: { type: String, required: true },
      flightTimePerBattery: { type: String, required: true }, // in minutes
      chargingTimePerBattery: { type: String, required: true }, // in minutes
    },
    pilotDetail: {
      pilotName: { type: String, required: true },
      pilotCertificationNumber: { type: String, required: true },
      trainingLevel: { type: String, required: true }, // Training level (e.g., beginner, advanced)
      insuranceCoverage: { type: String, required: true }, // Insurance coverage details
    },
    Dstatus: {
      type: String,
      require: true,
      enum: ["Active", "Inactive", "Repair", "Flying"],
    },
  },
  { timestamps: true }
); // timestamps for createdAt, updatedAt

const DroneProfile = mongoose.model("DroneProfile", droneProfileSchema);

module.exports = DroneProfile;
