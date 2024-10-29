// importing imp packages
const express = require("express");
const app = express();
require("dotenv").config();

// handle cross origin isshue
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173", // The frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions)); // Apply CORS to all routes

// temp
const DroneProfile = require("./model/DronProfile");

// db connection
const connectToDb = require("./config/MongoDbB");
connectToDb();

// middlewares
app.use(express.json());

// routes mounting

// const variable
const port = process.env.PORT || 8081;

// default route
app.get("/", (req, res) => {
  res.send("<h1> Hello from server </h1>" );
});

// Create a new drone profile
app.post("/createdrone", async (req, res) => {
  try {
    console.log("we are inside ", req.body);
    const newProfile = new DroneProfile(req.body);
    await newProfile.save();
    res.status(201).json({
      success: true,
      msg: "entry is created",
      data: newProfile,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("the bug is ", error);
  }
});


// fetch all drones data 
app.get("/getAllDrones", async (req, res) => {
  try {

    const data = await DroneProfile.find();

    return res.status(200).json({
      // Send an error response
      success: true,
      data: data, // Send only the error message
    });
  } catch (error) {
    console.log("Something went wrong while fetching all drone data", error);
    return res.status(500).json({
      // Send an error response
      success: false,
      error: error.message, // Send only the error message
    });
  }
});


// get single drone details 
app.get("/get/:id", async (req, res) => {
  try {
    const id = req.params.id; // Extract the id from req.params

    const data = await DroneProfile.findById(id); // Find the document by id

    // console.log("Your data is here:", data);

    return res.status(200).json({
      // Send an error response
      success: true,
      data: data, // Send only the error message
      id: id,
    });
  } catch (error) {
    console.log("Something went wrong while fetching single drone data", error);
    return res.status(500).json({
      // Send an error response
      success: false,
      error: error.message, // Send only the error message
    });
  }
});

// Backend: updateDrone route 
app.put("/updateDrone/:id", async (req, res) => {
  try {
    const id =  req.params.id; // Extract the id from req.params
    const updatedData = req.body; // Get the updated data from the request body

    // Assuming you're using mongoose and have a DroneProfile model
    const droneProfileId = updatedData.id; // Extract the ID for finding the document
    const updatedDroneProfile = await DroneProfile.findByIdAndUpdate(
      id,
      updatedData,
      { new: true } // Return the updated document
    );

    if (updatedDroneProfile) {
      res.status(200).json({ success: true, data: updatedDroneProfile });
    } else {
      res
        .status(404)
        .json({ success: false, message: "Drone profile not found" });
    }
  } catch (error) {
    console.log("Error updating drone profile:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// listening server
app.listen(port, () => {
  console.log("We are live on port ", port);
});
