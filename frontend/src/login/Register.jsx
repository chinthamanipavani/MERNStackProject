import React, { useState } from "react";
import landing2 from "../images/landing2.jpg";
import { useNavigate } from "react-router-dom";
import Navbar from "../landing/Navbar";

const Register = () => {
  const navigate=useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "jobseeker", // default role
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const payload = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const res = await fetch("http://localhost:3000/register", payload);
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Registration failed:", errorText);
      return;
    }
    alert("Registration successful");
    navigate("/login")

    setData({
      name: "",
      email: "",
      password: "",
      role: "jobseeker",
      phone: "",
      location: "",
    });
  };

  return (
    <>
    <Navbar/>
    <div
      style={{
        backgroundImage: `url(${landing2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleRegister}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          width: "100%",
          maxWidth: "450px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={data.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={data.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={data.password}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="role">Role:</label>
        <select
          id="role"
          name="role"
          value={data.role}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="jobseeker">Job Seeker</option>
          <option value="recruiter">Recruiter</option>
        </select>

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          value={data.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter your location"
          value={data.location}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "10px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Register
        </button>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#007bff", textDecoration: "underline" }}>
            Login here
          </a>
        </p>
      </form>
    </div>
    </>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
};

export default Register;
