const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToDb = require("./config/MongoDbB");
const Flightlog = require("./model/shaktidata.model.js");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST"],
  },
});

// Set up CORS options
const corsOptions = {
  origin: "http://localhost:5173", // Your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Apply CORS middleware globally
app.use(cors(corsOptions));

// Middleware to parse JSON request body
app.use(express.json());

// Database connection
connectToDb();

// Function to generate dummy S.H.A.K.T.I data
const generateShaktiData = () => ({
  droneName: "Drone-001", // Add a dummy drone name
  droneSerialNo: "SN123456", // Add a dummy drone serial number
  started: {
    pitch: parseFloat((Math.random() * 360 - 180).toFixed(2)),
    roll: parseFloat((Math.random() * 360 - 180).toFixed(2)),
    yaw: parseFloat((Math.random() * 360).toFixed(2)),
    altitude: parseFloat((Math.random() * 1000).toFixed(2)),
    temperature: parseFloat((Math.random() * 50).toFixed(2)),
    pressure: parseFloat((Math.random() * 200 + 900).toFixed(2)),
  },
  ended: {
    pitch: parseFloat((Math.random() * 360 - 180).toFixed(2)),
    roll: parseFloat((Math.random() * 360 - 180).toFixed(2)),
    yaw: parseFloat((Math.random() * 360).toFixed(2)),
    altitude: parseFloat((Math.random() * 1000).toFixed(2)),
    temperature: parseFloat((Math.random() * 50).toFixed(2)),
    pressure: parseFloat((Math.random() * 200 + 900).toFixed(2)),
  },
});

// Track the started data once when the server starts
let startedData = generateShaktiData();
let lastData = null;
let isSaving = false; // Lock to prevent parallel saves

// Function to save data with locking mechanism
const saveFlightlog = async (data) => {
  if (isSaving) {
    return; // Prevent saving if another save operation is in progress
  }

  isSaving = true; // Lock the save operation

  try {
    // If it's the first entry, create a new flightlog document
    if (!lastData) {
      lastData = new Flightlog({
        droneName: startedData.droneName,
        droneSerialNo: startedData.droneSerialNo,
        started: startedData.started,
        ended: data.ended, // Save the initial 'ended' data
      });
      await lastData.save();
      console.log("First entry saved to database");
    } else {
      // If lastData exists, update the 'ended' data in the existing document
      lastData.ended = data.ended;
      await lastData.save();
     
    }
  } catch (error) {
    console.error("Error saving the data to MongoDB:", error);
  } finally {
    isSaving = false; // Unlock after save operation completes
  }
};

// Emit data to frontend and save to MongoDB every 1 second
setInterval(async () => {
  // Generate new data for 'ended'
  const newData = generateShaktiData();

  // Emit updated data to frontend
  io.emit("data", newData);

  // Save the data
  await saveFlightlog(newData);
}, 1000);

// Save the final data when the server shuts down
process.on("SIGINT", async () => {
  if (lastData) {
    try {
      // Save the final 'ended' data when server shuts down
      await saveFlightlog(lastData); // Ensure last data is saved
      console.log("Last entry saved to database");
    } catch (error) {
      console.error("Error saving the last entry to MongoDB:", error);
    }
  }

  console.log("Server shutting down...");
  process.exit();
});

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Hello from server</h1>");
});

// Server listening on a specific port
const port = process.env.PORT || 8081;
server.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});