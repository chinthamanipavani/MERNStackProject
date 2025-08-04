const express = require("express");
const router = express.Router();
const DefaultJob = require("../models/defaultJobModel"); // Adjust if needed

router.get("/", async (req, res) => {
  try {
    const jobs = await DefaultJob.find(); // Get from MongoDB
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch default jobs", error });
  }
});

module.exports = router;
