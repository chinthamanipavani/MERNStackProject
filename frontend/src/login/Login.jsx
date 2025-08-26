import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import landing2 from "../images/landing2.jpg";
import Navbar from "../landing/Navbar";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const imageRef = useRef(null);
  const stepsRef = useRef(null);
  const [imageVisible, setImageVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const options = { threshold: 0.3 };
    const imageObserver = new IntersectionObserver(([entry]) => {
      setImageVisible(entry.isIntersecting);
    }, options);
    const stepsObserver = new IntersectionObserver(([entry]) => {
      setStepsVisible(entry.isIntersecting);
    }, options);

    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (stepsRef.current) stepsObserver.observe(stepsRef.current);

    return () => {
      if (imageRef.current) imageObserver.unobserve(imageRef.current);
      if (stepsRef.current) stepsObserver.unobserve(stepsRef.current);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorText = await res.text();
        alert("Login failed: " + errorText);
        return;
      }

      const result = await res.json();
      const role = result?.matchedObj?.role;
      const token = result?.token;

      // Clear old user info
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("profile_")) localStorage.removeItem(key);
      });

      localStorage.setItem("userEmail", data.email);
      localStorage.setItem("currentUserRole", role);
      localStorage.setItem("token", token);

      alert("Login successful");
      if (role === "jobseeker") {
        navigate("/seeker");
      } else if (role === "recruiter") {
        navigate("/recruiter");
      } else {
        alert("Unknown role: " + role);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("An error occurred during login");
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          padding: "50px",
          background: "linear-gradient(to bottom right, #e0f7fa, #e1bee7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
            maxWidth: "1200px",
          }}
        >
          {/* Form Section */}
          <div
            ref={stepsRef}
            style={{
              transform: stepsVisible ? "translateX(0)" : "translateX(-100px)",
              opacity: stepsVisible ? 1 : 0,
              transition: "all 0.8s ease-out",
              width: "500px",
              minHeight: "520px",
              padding: "30px",
              border: "1px solid #ccc",
              borderRadius: "12px",
              background: "#ffffff",
              boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Login</h2>
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  value={data.email}
                  onChange={handleChange}
                  style={{
                    padding: "12px",
                    width: "100%",
                    borderRadius: "6px",
                    border: "1px solid #aaa",
                    marginTop: "5px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "20px", textAlign: "left" }}>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  required
                  value={data.password}
                  onChange={handleChange}
                  style={{
                    padding: "12px",
                    width: "100%",
                    borderRadius: "6px",
                    border: "1px solid #aaa",
                    marginTop: "5px",
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  padding: "14px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  width: "100%",
                  fontSize: "16px",
                }}
              >
                Login
              </button>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <p>
                  Don't have an account?{" "}
                  <a
                    href="/register"
                    style={{ color: "#007bff", textDecoration: "underline" }}
                  >
                    Register here
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Image Section */}
          <div>
            <img
              ref={imageRef}
              src={landing2}
              alt="landing"
              style={{
                transform: imageVisible ? "translateX(0)" : "translateX(100px)",
                opacity: imageVisible ? 1 : 0,
                transition: "all 0.8s ease-out",
                height: "500px",
                width: "600px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
