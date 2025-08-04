import React, { useEffect, useRef, useState } from "react";

const RecruiterLanding = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setIsVisible(false), 1500); // reset to re-animate on scroll
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div style={styles.container}>
        <style>
          {`
          @keyframes slideFromTop {
            0% {
              opacity: 0;
              transform: translateY(-100vh);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .overlay-text.animate {
            animation: slideFromTop 1s ease-out forwards;
          }
        `}
        </style>

        <div ref={sectionRef} style={styles.overlay}>
          <h1
            className={`overlay-text ${isVisible ? "animate" : ""}`}
            style={styles.heading}
          >
            Welcome, Recruiter!
          </h1>
          <p
            className={`overlay-text ${isVisible ? "animate" : ""}`}
            style={styles.subheading}
          >
            Discover top talent, post job listings, and manage applicants with
            ease.
          </p>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  overlay: {
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "40px",
    borderRadius: "12px",
    color: "#fff",
    textAlign: "center",
    maxWidth: "600px",
  },
  heading: {
    fontSize: "40px",
    marginBottom: "20px",
    opacity: 1,
  },
  subheading: {
    fontSize: "18px",
    lineHeight: "1.6",
    opacity: 1,
  },
};

export default RecruiterLanding;
