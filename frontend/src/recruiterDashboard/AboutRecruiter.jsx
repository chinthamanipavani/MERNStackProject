import React from "react";
import { useNavigate } from "react-router-dom";
import landing2 from '../images/landing2.jpg'

const AboutRecruiter = () => {
  const navigate = useNavigate();
  const handlePost = () => {
    navigate("/addjob");
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          .fade-in {
            animation: fadeInUp 0.8s ease-out;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .post-btn:hover {
            background-color: #0056b3;
            transform: scale(1.05);
          }
        `}
      </style>

      <div style={styles.content} className="fade-in">
        <div style={styles.left}>
          <h1 style={styles.heading}> Hire Smarter, Faster</h1>
          <p style={styles.subheading}>
            Unlock top talent with our smart hiring tools designed for
            recruiters.
          </p>
          <ul style={styles.list}>
            <li>🔍 Filter candidates with precision</li>
            <li>📈 Gain insights through real-time analytics</li>
            <li>👥 Collaborate seamlessly with your team</li>
            <li>📅 Track applications effortlessly</li>
          </ul>
          <button
            className="post-btn"
            style={styles.button}
            onClick={handlePost}
          >
            Post a Job
          </button>
        </div>

        <div style={styles.right}>
          <img src={landing2} alt="Recruiter" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    backgroundColor: "#f0f4ff",
    padding: "60px 20px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  content: {
    maxWidth: "1400px", // ⬅ increased width
    margin: "0 auto",
    display: "flex",
    gap: "60px",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
    padding: "50px",
    flexWrap: "wrap",
  },
  left: {
    flex: "1 1 600px",
  },
  right: {
    flex: "1 1 500px",
    textAlign: "center",
  },
  heading: {
    fontSize: "40px",
    color: "#007bff",
    marginBottom: "18px",
  },
  subheading: {
    fontSize: "22px",
    color: "#444",
    marginBottom: "24px",
  },
  list: {
    listStyle: "none",
    padding: "0",
    marginBottom: "30px",
    fontSize: "18px",
    color: "#333",
    lineHeight: "1.8",
  },
  button: {
    padding: "14px 36px",
    fontSize: "17px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 6px 12px rgba(0, 123, 255, 0.2)",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
  },
};

export default AboutRecruiter;
