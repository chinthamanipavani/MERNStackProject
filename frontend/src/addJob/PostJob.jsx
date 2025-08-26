// import React, { useState } from "react";
// import ContactInfo from "./ContactInfo";
// import Categories from "./Categories";
// import Tags from "./Tags";
// import JobInformation from "./JobInformation";
// import VideoAndMoreDetails from "./VideoAndMoreDetails";
// import NavbarS from "../recruiterDashboard/NavbarS";
// import "./PostJob.css";

// const PostJob = () => {
//   const [form, setForm] = useState({
//     jobTitle: "",
//     jobDescription: "",
//     experience: "",
//     skills: "",
//     companyName: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     latitude: "",
//     longitude: "",
//     emailAddress: "",
//     website: "",
//     category: "", // ← ✅ Add this
//     tags: [],
//     education: "",
//     jobNature: "",
//     jobLevel: "",
//     age: "",
//     gender: "",
//     vacancy: "",
//     deadline: "",
//     workplace: "",
//     salary: "",
//     benefits: "",
//     imageurl: "", // ✅ Add this
//     joblink: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     // Handle tags (checkbox group)
//     if (type === "checkbox") {
//       setForm((prev) => {
//         const tags = new Set(prev.tags);
//         if (checked) tags.add(value);
//         else tags.delete(value);
//         return { ...prev, tags: Array.from(tags) };
//       });
//     } else {
//       // Handle other input types (text, radio)
//       setForm((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const postJob = {
//       jobTitle: form.jobTitle,
//       jobDescription: form.jobDescription,
//       experience: form.experience,
//       skills: form.skills,
//     };

//     const contactInfo = {
//       companyName: form.companyName,
//       phone: form.phone,
//       address: form.address,
//       city: form.city,
//       state: form.state,
//       zipcode: form.zipcode,
//       country: form.country,
//       latitude: form.latitude,
//       longitude: form.longitude,
//       emailAddress: form.emailAddress,
//       website: form.website,
//     };
//     const categories = {
//       categories: form.category,
//     };
//     const tags = {
//       tags: form.tags,
//     };
//     const jobInformation = {
//       education: form.education,
//       jobNature: form.jobNature,
//       jobLevel: form.jobLevel,
//       experienceRange: form.experience, // optional: rename to avoid clash
//       age: form.age,
//       gender: form.gender,
//       vacancy: form.vacancy,
//       deadline: form.deadline,
//       workplace: form.workplace,
//       salary: form.salary,
//       benefits: form.benefits,
//     };

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch("http://localhost:3000/defaultJobs/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           postJob,
//           contactInfo,
//           jobInformation,
//           category: form.category,
//           tags: form.tags,
//           videoAndMoreDetails: {
//             imageurl: form.imageurl,
//             joblink: form.joblink,
//           }, // ✅ Correct way to include video and more details
//         }),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert("Job posted successfully!");

//         // Reset form after success
//         setForm({
//           jobTitle: "",
//           jobDescription: "",
//           experience: "",
//           skills: "",
//           companyName: "",
//           phone: "",
//           address: "",
//           city: "",
//           state: "",
//           zipcode: "",
//           country: "",
//           latitude: "",
//           longitude: "",
//           emailAddress: "",
//           website: "",
//           category: "",
//           tags: [],
//           education: "",
//           jobNature: "",
//           jobLevel: "",
//           age: "",
//           gender: "",
//           vacancy: "",
//           deadline: "",
//           workplace: "",
//           salary: "",
//           benefits: "",
//           imageurl: "",
//           joblink: "",
//         });
//       } else {
//         alert(data.error || "Failed to post job");
//       }
//     } catch (err) {
//       alert("Error posting job: " + err.message);
//     }
//   };

//   return (
//     <>
//       <NavbarS/>
//       <div className="post-job-container">
//         <h2>Post a Job</h2>
//         <hr />

//         <form className="post-job-form" onSubmit={handleSubmit}>
//           <label htmlFor="jobTitle">Job Title</label>
//           <input
//             type="text"
//             id="jobTitle"
//             name="jobTitle"
//             value={form.jobTitle}
//             onChange={handleChange}
//             required
//           />

//           <h3>Job Description</h3>
//           <div className="editor">
//             <textarea
//               name="jobDescription"
//               value={form.jobDescription}
//               onChange={handleChange}
//               placeholder="Start typing..."
//             ></textarea>
//           </div>

//           <h3>Education & Experience</h3>
//           <div className="editor">
//             <textarea
//               name="experience"
//               value={form.experience}
//               onChange={handleChange}
//               placeholder="Start typing..."
//             ></textarea>
//           </div>

//           <h3>Must Have</h3>
//           <div className="editor">
//             <textarea
//               name="skills"
//               value={form.skills}
//               onChange={handleChange}
//               placeholder="Start typing..."
//             ></textarea>
//           </div>

//           <ContactInfo form={form} handleChange={handleChange} />
//           <Categories form={form} handleChange={handleChange} />
//           <Tags form={form} handleChange={handleChange} />
//           <JobInformation form={form} handleChange={handleChange} />
//           <VideoAndMoreDetails form={form} handleChange={handleChange} />

//           <button type="submit">Save Post</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default PostJob;


import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import Categories from "./Categories";
import Tags from "./Tags";
import JobInformation from "./JobInformation";
import VideoAndMoreDetails from "./VideoAndMoreDetails";
import NavbarS from "../recruiterDashboard/NavbarS";
import "./PostJob.css";

const PostJob = () => {
  const [form, setForm] = useState({
    jobTitle: "",
    jobDescription: "",
    experience: "",
    skills: "",
    companyName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    latitude: "",
    longitude: "",
    emailAddress: "",
    website: "",
    category: "",
    tags: "", // Changed from array to string for radio buttons
    education: "",
    jobNature: "",
    jobLevel: "",
    age: "",
    gender: "",
    vacancy: "",
    deadline: "",
    workplace: "",
    salary: "",
    benefits: "",
    imageurl: "",
    joblink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postJob = {
      jobTitle: form.jobTitle,
      jobDescription: form.jobDescription,
      experience: form.experience,
      skills: form.skills,
    };

    const contactInfo = {
      companyName: form.companyName,
      phone: form.phone,
      address: form.address,
      city: form.city,
      state: form.state,
      zipcode: form.zipcode,
      country: form.country,
      latitude: form.latitude,
      longitude: form.longitude,
      emailAddress: form.emailAddress,
      website: form.website,
    };

    const jobInformation = {
      education: form.education,
      jobNature: form.jobNature,
      jobLevel: form.jobLevel,
      experienceRange: form.experience,
      age: form.age,
      gender: form.gender,
      vacancy: form.vacancy,
      deadline: form.deadline,
      workplace: form.workplace,
      salary: form.salary,
      benefits: form.benefits,
    };

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:3000/defaultJobs/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          postJob,
          contactInfo,
          jobInformation,
          category: form.category,
          tags: form.tags,
          videoAndMoreDetails: {
            imageurl: form.imageurl,
            joblink: form.joblink,
          },
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Job posted successfully!");
        setForm({
          jobTitle: "",
          jobDescription: "",
          experience: "",
          skills: "",
          companyName: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zipcode: "",
          country: "",
          latitude: "",
          longitude: "",
          emailAddress: "",
          website: "",
          category: "",
          tags: "",
          education: "",
          jobNature: "",
          jobLevel: "",
          age: "",
          gender: "",
          vacancy: "",
          deadline: "",
          workplace: "",
          salary: "",
          benefits: "",
          imageurl: "",
          joblink: "",
        });
      } else {
        alert(data.error || "Failed to post job");
      }
    } catch (err) {
      alert("Error posting job: " + err.message);
    }
  };

  return (
    <>
      <NavbarS />
      <div className="post-job-container">
        <h2>Post a Job</h2>
        <hr />

        <form className="post-job-form" onSubmit={handleSubmit}>
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            required
          />

          <h3>Job Description</h3>
          <div className="editor">
            <textarea
              name="jobDescription"
              value={form.jobDescription}
              onChange={handleChange}
              placeholder="Start typing..."
            ></textarea>
          </div>

          <h3>Education & Experience</h3>
          <div className="editor">
            <textarea
              name="experience"
              value={form.experience}
              onChange={handleChange}
              placeholder="Start typing..."
            ></textarea>
          </div>

          <h3>Must Have</h3>
          <div className="editor">
            <textarea
              name="skills"
              value={form.skills}
              onChange={handleChange}
              placeholder="Start typing..."
            ></textarea>
          </div>

          <ContactInfo form={form} handleChange={handleChange} />
          <Categories form={form} handleChange={handleChange} />
          <Tags form={form} handleChange={handleChange} />
          <JobInformation form={form} handleChange={handleChange} />
          <VideoAndMoreDetails form={form} handleChange={handleChange} />

          <button type="submit">Save Post</button>
        </form>
      </div>
    </>
  );
};

export default PostJob;
