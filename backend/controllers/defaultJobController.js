const DefaultJob = require("../models/defaultJobModel");

// @desc    Create a new default job
// @route   POST /api/default-jobs/create
// @access  Public
const createDefaultJob = async (req, res) => {
  try {
    const newJob = new DefaultJob(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(500).json({ message: "Failed to create default job", error });
  }
};

// @desc    Get all default jobs
// @route   GET /api/default-jobs
// @access  Public
const getAllDefaultJobs = async (req, res) => {
  try {
    const jobs = await DefaultJob.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch default jobs", error });
  }
};

module.exports = {
  createDefaultJob,
  getAllDefaultJobs,
};
