import React, { useEffect, useRef, useState } from "react";

const servicesList = [
  {
    icon: "💼",
    title: "Job Posting",
    description:
      "Post and manage job listings with detailed descriptions and requirements.",
  },
  {
    icon: "🧑‍💼",
    title: "Recruiter Dashboard",
    description:
      "Monitor applications, manage openings, and contact job seekers directly.",
  },
  {
    icon: "📄",
    title: "Resume Upload",
    description:
      "Allow candidates to upload resumes and apply easily with one click.",
  },
  {
    icon: "🔍",
    title: "Advanced Search",
    description:
      "Search by skills, location, experience, and more using our smart filters.",
  },
  {
    icon: "🔔",
    title: "Notifications",
    description:
      "Receive real-time alerts for job updates, new applicants, and messages.",
  },
  {
    icon: "📊",
    title: "Analytics",
    description:
      "Track job post performance, user interactions, and hiring trends.",
  },
];

const Services = () => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState(
    Array(servicesList.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          } else {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[index] = false;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => {
      cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <div id="services" style={{ backgroundColor: "#f5f7fa" /* full-width background */ }}>
      <div className="services-container">
        <style>{`
.services-container {
  text-align: center;
  padding: 3rem 1rem;
  background-color: #f5f7fa;
  font-family: 'Segoe UI', sans-serif;
  max-width: 1200px;      /* ✅ Set a max-width */
  margin: 0 auto;         /* ✅ Center the container */
}

        .services-header {
          font-size: 2.5rem;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }

        .services-subheader {
          font-size: 1.1rem;
          color: #4a5568;
          margin-bottom: 2.5rem;
        }

      .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 items per row */
    gap: 2rem;
    padding: 0 1rem;
  }

        .service-card {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          padding: 2rem 1.5rem;
          opacity: 0;
          transform: translateY(20px);
        }

        .fade-in {
          animation: fadeInUp 0.6s ease forwards;
        }

        .service-card .icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .service-card h2 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          color: #2b6cb0;
        }

        .service-card p {
          font-size: 0.95rem;
          color: #4a5568;
        }
          .testimonials-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; /* space between cards */
  padding: 2rem;
}

.testimonial-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  width: 300px; /* ✅ fixed width for all cards */
  text-align: center;
}


        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
          @media (max-width: 992px) {
  .testimonial-card {
    width: 90%;
  }
}
      `}</style>

        <h1 className="services-header">Our Services</h1>
        <p className="services-subheader">
          Empowering your hiring journey with powerful tools and features.
        </p>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`service-card ${visibleCards[index] ? "fade-in" : ""}`}
              style={{
                animationDelay: visibleCards[index] ? `${index * 0.3}s` : "0s",
              }}
            >
              <div className="icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
