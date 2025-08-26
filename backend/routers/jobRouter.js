const express = require("express");
const router = express.Router();
const { createJob, getAllJobs } = require("../controllers/jobController");
const DefaultJob = require("../models/defaultJobModel"); // Assuming you have a model
const { verifyToken } = require("../middleware/authMiddleware");

// Normal job routes
router.post("/create", verifyToken, createJob);
router.get("/", getAllJobs);

// Add defaultJobs route here
router.get("/defaultJobs", async (req, res) => {
  try {
    const jobs = await DefaultJob.find(); // MongoDB data
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch default jobs", error });
  }
});

module.exports = router;
