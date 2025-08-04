import React, { useEffect, useState } from "react";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Simulated fetch: Replace this with your real backend API call
    const sampleApplications = [
      {
        id: 1,
        jobTitle: "Frontend Developer",
        company: "TechCorp Pvt Ltd",
        status: "Under Review",
        appliedDate: "2025-07-25",
      },
      {
        id: 2,
        jobTitle: "Backend Engineer",
        company: "InnovateX",
        status: "Shortlisted",
        appliedDate: "2025-07-20",
      },
      {
        id: 3,
        jobTitle: "UI/UX Designer",
        company: "DesignStudio",
        status: "Rejected",
        appliedDate: "2025-07-10",
      },
    ];

    setApplications(sampleApplications);
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">📋 Your Job Applications</h2>

      {applications.length === 0 ? (
        <p className="text-center text-muted">You haven’t applied to any jobs yet.</p>
      ) : (
        <div className="row">
          {applications.map((app) => (
            <div className="col-md-6 mb-4" key={app.id}>
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{app.jobTitle}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{app.company}</h6>
                  <p className="card-text">
                    <strong>Status:</strong>{" "}
                    <span
                      className={`badge ${
                        app.status === "Shortlisted"
                          ? "bg-success"
                          : app.status === "Rejected"
                          ? "bg-danger"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {app.status}
                    </span>
                  </p>
                  <p className="card-text">
                    <strong>Applied On:</strong> {app.appliedDate}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Applications;
