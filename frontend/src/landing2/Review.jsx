import React, { useRef, useEffect, useState } from "react";

const reviews = [
  {
    name: "Anjali Rao",
    role: "Frontend Developer",
    feedback:
      "Find Your Job helped me land my dream job in just a week! The interface is clean and easy to use.",
  },
  {
    name: "Ravi Kumar",
    role: "Software Engineer",
    feedback:
      "Excellent platform for job seekers! The filters and categories are very helpful. Highly recommend.",
  },
  {
    name: "Sneha Patel",
    role: "UI/UX Designer",
    feedback:
      "A beautifully designed platform with powerful features. Loved the smooth navigation and user experience.",
  },
  {
    name: "Mohit Verma",
    role: "Full Stack Developer",
    feedback:
      "This site made my job search much faster. The ability to filter jobs by technology saved a lot of time.",
  },
  {
    name: "Neha Shah",
    role: "Product Manager",
    feedback:
      "The job alerts and personalized recommendations are fantastic. I found exactly what I was looking for!",
  },
  {
    name: "Aman Yadav",
    role: "Backend Developer",
    feedback:
      "Impressive experience. The platform is quick, reliable, and the job descriptions are well structured.",
  },
];

const Review = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const styles = {
    container: {
      padding: "50px 20px",
      backgroundColor: "#f4f4f4",
      textAlign: "center",
      minHeight: "100vh",
    },
    heading: {
      fontSize: "32px",
      marginBottom: "40px",
      color: "#333",
      fontWeight: "bold",
    },
    reviewsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "20px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#fff",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 0 15px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.6s ease, opacity 0.6s ease",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(50px)",
    },
    name: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "6px",
      color: "#007bff",
    },
    role: {
      fontSize: "14px",
      fontStyle: "italic",
      color: "#777",
      marginBottom: "12px",
    },
    feedback: {
      fontSize: "16px",
      color: "#444",
    },
  };

  return (
    <div id="review" style={styles.container} ref={sectionRef}>
      <h2 style={styles.heading}>What People Say About Find Your Job</h2>
      <div style={styles.reviewsGrid}>
        {reviews.map((review, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.name}>{review.name}</div>
            <div style={styles.role}>{review.role}</div>
            <div style={styles.feedback}>{review.feedback}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
