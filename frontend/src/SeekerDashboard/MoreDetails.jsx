import React from "react";
import { useLocation } from "react-router-dom";
import NavbarT from "./NavbarT";
import { Link } from "react-router-dom";

const MoreDetails = () => {
  const location = useLocation();
  const job = location.state?.job;

  if (!job)
    return (
      <p style={{ textAlign: "center", marginTop: "100px", color: "red" }}>
        No job details found.
      </p>
    );

  return (
    <div>
      <NavbarT />
      {/* Internal CSS */}
      <style>{`
        .more-details-container {
          display: flex;
          justify-content: center;
          padding: 40px 20px;
          background-color: #f8f9fa;
          min-height: 100vh;
        }

        .details-card {
          background-color: white;
          max-width: 80%;
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          padding: 30px;
          animation: fadeIn 0.6s ease-in-out;
        }

        .job-title {
          font-size: 28px;
          color: #333;
          margin-bottom: 20px;
        }

        .company-name {
          color: #007bff;
        }

        .company-image {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .details-content p {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .visit-btn {
          display: inline-block;
          margin-top: 15px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .visit-btn:hover {
          background-color: #0056b3;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Component content */}
      <div className="more-details-container">
        <div className="details-card">
          <h2 className="job-title">
            {job.jobTitle} at{" "}
            <span className="company-name">{job.companyName}</span>
          </h2>
          <img
            src={job.imageurl || job.longitude}
            alt="Company"
            className="company-image"
          />
          {job.website && (
            <a
              href={job.website}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-btn"
            >
              Visit Official Website
            </a>
          )}
          <div className="details-content">
            <p>
              <strong>Category:</strong> {job.category}
            </p>
            <p>
              <strong>Skills:</strong> {job.skills}
            </p>
            <p>
              <strong>Location:</strong> {job.city || job.location || job.state}
            </p>
            <p>
              <strong>Address:</strong> {job.address}, {job.zipcode}
            </p>
            <p>
              <strong>Job Type:</strong> {job.jobNature || "Not specified"}
            </p>
            <p>
              <strong>Job Level:</strong> {job.jobLevel || "Not specified"}
            </p>
            <p>
              <strong>Salary:</strong> ₹{job.salary}
            </p>
            <p>
              <strong>Vacancy:</strong> {job.vacancy}
            </p>
            <p>
              <strong>Experience:</strong> {job.experience}
            </p>
            <p>
              <strong>Education:</strong> {job.education}
            </p>
            <p>
              <strong>Benefits:</strong>
              <br />{" "}
              {job.benefits?.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p>
              <strong>Deadline:</strong> {job.deadline}
            </p>
            <p>
              <strong>Email:</strong> {job.emailAddress}
            </p>
            <p>
              <strong>Phone:</strong> {job.phone}
            </p>
            <p>
              <strong>Description:</strong> {job.jobDescription}
            </p>
            {job.tags && job.tags.length > 0 && (
              <p>
                <strong>Tags:</strong> {job.tags.join(", ")}
              </p>
            )}
          </div>

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
      </div>
    </div>
  );
};

export default MoreDetails;
