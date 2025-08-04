const Job = require("../models/jobModel");

const createJob = async (req, res) => {
  try {
    const { postJob, contactInfo, jobInformation, videoAndMoreDetails } = req.body;

    const jobData = {
      ...postJob,
      ...contactInfo,
      ...jobInformation,
      ...(req.body.category && { category: req.body.category }),
      ...(req.body.tags && { tags: req.body.tags }),
      ...(videoAndMoreDetails && { ...videoAndMoreDetails }), // ✅ Correct way
    };

    const job = new Job(jobData);
    await job.save();

    res.status(201).json({ message: "Job created successfully", job });
  } catch (err) {
    res.status(500).json({ error: "Error creating job: " + err.message });
  }
};


const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
};

module.exports = { createJob,getAllJobs };
