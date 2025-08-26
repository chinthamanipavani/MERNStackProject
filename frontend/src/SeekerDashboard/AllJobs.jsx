import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:3000/defaultJobs");
        if (!res.ok) throw new Error("Error fetching data");

        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="job-page-container">
      <h2>All Jobs</h2>
      {error && <p className="error">{error}</p>}

      <div className="job-list">
        {jobs.map((job) => (
          <Link
            to="/moredetails"
            state={{ job }}
            key={job._id}
            className="job-card-link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="job-card">
              <img src={job.imageurl || job.longitude} alt="Company" />
              <h3>{job.companyName}</h3>
              <p>
                <strong>Title:</strong> {job.jobTitle}
              </p>
              <p>
                <strong>Skills:</strong> {job.skills}
              </p>
              <p>
                <strong>Location:</strong>{" "}
                {job.city || job.location || job.state}
              </p>
              <p>{job.jobDescription?.slice(0, 100)}...</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
