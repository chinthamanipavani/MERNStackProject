import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FindJobPage = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8;

  useEffect(() => {
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
  }, []);

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const nextPage = () => {
    if (currentPage < Math.ceil(jobs.length / jobsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  console.log(currentJobs);

  return (
    <div className="job-page-container">
      <h2>Available Jobs</h2>
      {error && <p className="error">{error}</p>}

      <div className="job-list">
        {currentJobs.map((job) => (
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
              >
                Apply Now
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          ⬅ Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(jobs.length / jobsPerPage)}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default FindJobPage;
