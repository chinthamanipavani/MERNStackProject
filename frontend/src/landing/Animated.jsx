import React, { useEffect, useRef, useState } from "react";
import landing2 from "../images/landing2.jpg";

const Animated = () => {
  const imageRef = useRef(null);
  const stepsRef = useRef(null);

  const [imageVisible, setImageVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState(false);

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

  return (
    <div style={{ padding: "50px 20px", backgroundColor: "#f9f9f9" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "40px",
          fontWeight: "bold",
          color: "#333",
        }}
      >
        🚀 Navigate the Process & Land Your Dream Job
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <img
          ref={imageRef}
          src={landing2}
          alt="process"
          style={{
            height: "400px",
            width: "45%",
            borderRadius: "15px",
            boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
            transform: imageVisible
              ? "scale(1) rotate(0deg)"
              : "scale(0.8) rotate(-10deg)",
            opacity: imageVisible ? 1 : 0,
            transition: "all 1s ease",
          }}
        />

        <div
          ref={stepsRef}
          style={{
            width: "50%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            transform: stepsVisible ? "scale(1)" : "scale(0.8)",
            opacity: stepsVisible ? 1 : 0,
            transition: "all 1s ease-in-out",
          }}
        >
          {[
            {
              icon: "bi bi-file-earmark-person-fill",
              title: "Build Your Resume",
              desc: "Craft a standout resume to impress employers.",
            },
            {
              icon: "bi bi-search",
              title: "Search Jobs",
              desc: "Explore positions that fit your passion.",
            },
            {
              icon: "bi bi-check-circle-fill",
              title: "Get Hired",
              desc: "Ace your interviews with confidence.",
            },
            {
              icon: "bi bi-bar-chart-line-fill",
              title: "Grow Professionally",
              desc: "Develop skills to boost your career.",
            },
          ].map((step, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                transform: stepsVisible ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.6s ease ${i * 0.2}s`,
              }}
            >
              <i
                className={step.icon}
                style={{
                  fontSize: "2rem",
                  color: "#007bff",
                  flexShrink: 0,
                }}
              ></i>
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.1rem",
                    color: "#222",
                    fontWeight: "600",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.9rem",
                    color: "#666",
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Animated;
