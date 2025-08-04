const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const DefaultJob = require("./models/defaultJobModel");

dotenv.config();

async function insertJobs() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ MongoDB connected");

    const filePath = path.join(__dirname, "jobs.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const jobs = JSON.parse(data);

    await DefaultJob.deleteMany(); // optional
    const result = await DefaultJob.insertMany(jobs);

    console.log(`✅ ${result.length} jobs inserted`);
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

insertJobs();
