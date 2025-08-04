import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // 👈 import Link if you're using it

const BasicJobs = () => {
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
  console.log(jobs);
  return (
    <div className="job-page-container">
      <h2>Available Jobs</h2>
      {error && <p className="error">{error}</p>}

      <div className="job-list">
        {jobs.slice(0, 8).map((job) => (
          <Link
            to="/moredetails"
            state={{ job }}
            key={job._id}
            className="job-card-link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="job-card">
              <img src={job.imageurl || job.longitude} alt="Company" />
              <br />
              {job.website && (
                <a
                  className="official-button"
                  href={job.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevent navigation when clicking link inside card
                >
                  Official Website
                </a>
              )}
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
              {job.joblink && (
                <a
                  className="apply-button"
                  href={job.joblink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevent card click from overriding this link
                >
                  Apply Now
                </a>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BasicJobs;
