const DroneProfile = require('../model/drone.mode');


// Create a new drone profile
const createDroneProfile = async (req, res) => {
  try {
    const newProfile = new DroneProfile(req.body);
    await newProfile.save();
    res.status(201).json({ success: true, msg: "Entry created", data: newProfile });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Fetch all drone profiles
const getAllDrones = async (req, res) => {
  try {
    const data = await DroneProfile.find();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Fetch a single drone profile by ID
const getDroneById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await DroneProfile.findById(id);
    if (data) {
      res.status(200).json({ success: true, data });
    } else {
      res.status(404).json({ success: false, message: "Drone profile not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a drone profile
const updateDroneProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const updatedDroneProfile = await DroneProfile.findByIdAndUpdate(id, updatedData, { new: true });
    if (updatedDroneProfile) {
      res.status(200).json({ success: true, data: updatedDroneProfile });
    } else {
      res.status(404).json({ success: false, message: "Drone profile not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a drone profile
const deleteDroneProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProfile = await DroneProfile.findByIdAndDelete(id);
    if (deletedProfile) {
      res.status(200).json({ success: true, message: "Drone profile deleted" });
    } else {
      res.status(404).json({ success: false, message: "Drone profile not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  createDroneProfile,
  getAllDrones,
  getDroneById,
  updateDroneProfile,
  deleteDroneProfile,
};
