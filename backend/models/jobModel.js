// models/jobModel.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    // PostJob fields
    jobTitle: { type: String, required: true },
    jobDescription: { type: String },
    experience: { type: String },
    skills: { type: String },

    // ContactInfo fields
    companyName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
    emailAddress: { type: String, required: true },
    website: { type: String, required: true },

    // Categories and Tags
    category: { type: String },
    tags: [{ type: String }],

    // Job Information
    education: { type: String },
    jobNature: { type: String },
    jobLevel: { type: String },
    age: { type: String },
    gender: { type: String },
    vacancy: { type: String },
    deadline: { type: String },
    workplace: { type: String },
    salary: { type: String },
    benefits: { type: String },

    // Video (YouTube, Vimeo)
   imageurl: { type: String },
    joblink: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
