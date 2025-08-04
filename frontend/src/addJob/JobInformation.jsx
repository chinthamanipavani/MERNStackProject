import React from "react";

const JobInformation = ({ form, handleChange }) => {
  return (
    <div>
      <h2>Job Information</h2>
      <hr />

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
        {/* Left Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <label htmlFor="education">Educational Requirements</label>
          <br />
          <input
            type="text"
            id="education"
            name="education"
            placeholder="e.g. Bachelor Degree"
            value={form.education}
            onChange={handleChange}
          />
          <br />
          <br />

          <label htmlFor="jobNature">Job Nature</label>
          <br />
          <select
            id="jobNature"
            name="jobNature"
            value={form.jobNature}
            onChange={handleChange}
          >
            <option value="fulltime">Full Time</option>
            <option value="parttime">Part Time</option>
            <option value="contract">Contract</option>
          </select>
          <br />
          <br />

          <label htmlFor="jobLevel">Job Level</label>
          <br />
          <select
            id="jobLevel"
            name="jobLevel"
            value={form.jobLevel}
            onChange={handleChange}
          >
            <option value="any">Any</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
          </select>
          <br />
          <br />

          <label htmlFor="experience">Experience Range</label>
          <br />
          <input
            type="text"
            id="experience"
            name="experience"
            placeholder="e.g. 2-5 years or Any"
            value={form.experience}
            onChange={handleChange}
          />
          <br />
          <br />

          <label htmlFor="age">Age Range</label>
          <br />
          <input
            type="text"
            id="age"
            name="age"
            placeholder="e.g. 25-35 or Any"
            value={form.age}
            onChange={handleChange}
          />
          <br />
          <br />

          <label htmlFor="gender">Gender</label>
          <br />
          <select
            id="gender"
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            {" "}
            <option value="any">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Right Column */}
        <div style={{ flex: 1, minWidth: "300px" }}>
          <label htmlFor="vacancy">Vacancy</label>
          <br />
          <input
            type="number"
            id="vacancy"
            name="vacancy"
            placeholder="Enter number of vacancies, e.g. 2"
            value={form.vacancy}
            onChange={handleChange}
          />
          <br />
          <br />

          <label htmlFor="deadline">Application Deadline</label>
          <br />
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
          />
          <br />
          <br />

          <label htmlFor="workplace">Workplace</label>
          <br />
          <select
            id="workplace"
            name="workplace"
            value={form.workplace}
            onChange={handleChange}
          >
            <option value="office">Office</option>
            <option value="remote">Work from Home</option>
            <option value="hybrid">Hybrid</option>
          </select>
          <br />
          <br />

          <label htmlFor="salary">Offered Salary</label>
          <br />
          <input
            type="text"
            id="salary"
            name="salary"
            placeholder="e.g. ₹30,000/month or Negotiable"
            value={form.salary}
            onChange={handleChange}
          />
          <br />
          <br />

          <label htmlFor="benefits">Compensation & Other Benefits</label>
          <br />
          <textarea
            id="benefits"
            name="benefits"
            rows="4"
            cols="50"
            placeholder="e.g. Provident Fund, Performance Bonus, Weekly 2 holidays"
            value={form.benefits}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default JobInformation;
