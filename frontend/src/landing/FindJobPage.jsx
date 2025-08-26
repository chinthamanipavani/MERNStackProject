import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const FindJobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(location.state?.searchTerm || "");

  const navigate = useNavigate();

  useEffect(() => {
    // Check for token
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
      return;
    }
    
    const fetchJobs = async () => {
      try {
        const res1 = await fetch("http://localhost:3000/defaultJobs");
        const res2 = await fetch("http://localhost:3000/api/defaultJobs");

        if (!res1.ok || !res2.ok) throw new Error("Error fetching data");

        const data1 = await res1.json();
        const data2 = await res2.json();

        setJobs([...data1, ...data2]);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to load jobs. Please try again later.");
      }
    };

    fetchJobs();
  }, [navigate]);

  // Filter jobs using searchTerm
  const filteredJobs = jobs.filter((job) => {
    const term = searchTerm.toLowerCase();
    return (
      job.companyName?.toLowerCase().includes(term) ||
      job.jobTitle?.toLowerCase().includes(term) ||
      (Array.isArray(job.skills) ? job.skills.join(', ').toLowerCase().includes(term) : false) ||
      job.city?.toLowerCase().includes(term) ||
      job.location?.toLowerCase().includes(term) ||
      job.state?.toLowerCase().includes(term)
    );
  });

  console.log(filteredJobs);

  return (
    <div className="job-page-container">
      <h2>Available Jobs</h2>
      {error && <p className="error">{error}</p>}


      <div className="job-list">
        {filteredJobs.map((job) => (
          <div key={job._id} className="job-card">
            <img src={job.imageurl || job.longitude} alt="Company" /> <br />
            {/* Official Website button */}
            {job.website && (
              <a
                className="official-button"
                href={job.website}
                target="_blank"
                rel="noopener noreferrer"
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
              <strong>Location:</strong> {job.city || job.location || job.state}
            </p>
            <p>{job.jobDescription?.slice(0, 100)}...</p>
            {/* Apply Now button */}
            {job.joblink && (
              <Link
                className="apply-button"
                to={job.joblink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "10px" }}
              >
                Apply Now
              </Link>
            )}
            
          </div>
        ))}
      </div>

      {/* Remove Pagination */}
    </div>
  );
};

export default FindJobPage;
