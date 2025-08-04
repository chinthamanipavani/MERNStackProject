const mongoose = require("mongoose");

const defaultJobSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
  description: { type: String, required: true }, // fixed spelling
  skills: { type: [String], required: true },
  experience: { type: String, required: true },
  salary: { type: String, required: true },
  jobType: { type: String, required: true },
  companyName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: true },
  country: { type: String, required: true },
  latitude: { type: String, required: true },
  image: { type: String, required: true },
  emailAddress: { type: String, required: true },
  website: { type: String, required: true },
  category: { type: String, required: true },
  educationalQualification: { type: String, required: true }
});

const DefaultJob = mongoose.model("DefaultJob", defaultJobSchema);

module.exports = DefaultJob;
