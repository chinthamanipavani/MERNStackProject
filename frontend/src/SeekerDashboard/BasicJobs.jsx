import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BasicJobs = ({ id, searchTerm = "" }) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

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
  // Filter jobs based on search term
  const filteredJobs = jobs.filter((job) => {
    if (!searchTerm) return true;
    
    const term = searchTerm.toLowerCase();
    return (
      job.jobTitle?.toLowerCase().includes(term) ||
      job.companyName?.toLowerCase().includes(term) ||
      job.city?.toLowerCase().includes(term) ||
      job.state?.toLowerCase().includes(term) ||
      (Array.isArray(job.skills) ? job.skills.join(', ').toLowerCase().includes(term) : false)
    );
  });

  console.log(filteredJobs);

  return (
    <div className="job-page-container" id={id}>
      <h2>Available Jobs</h2>
      {error && <p className="error">{error}</p>}

      <div className="job-list">
        {filteredJobs.slice(0, 4).map((job) => (
          <div
            key={job._id}
            className="card mb-3"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="job-card" id={job.jobTitle?.toLowerCase()}>
              <img src={job.imageurl || job.longitude} alt="Company" />
              <br />
              {job.website && (
                <button
                  className="official-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(job.website, '_blank', 'noopener,noreferrer');
                  }}
                  style={{ border: "none" }}
                >
                  Official Website
                </button>
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
                <button
                  className="apply-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(job.joblink, '_blank', 'noopener,noreferrer');
                  }}
                  style={{ marginRight: "10px" }}
                >
                  Apply Now
                </button>
              )}
              <Link
                to="/moredetails"
                state={{ job }}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {jobs.length > 4 && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <button
            style={{
              padding: "9px",
              color: "white",
              background: "blue",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
            className="see-more-button"
            onClick={() => navigate("/findjob")}
          >
            See More Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default BasicJobs;
