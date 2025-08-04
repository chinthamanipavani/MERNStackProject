import React from "react";

const Category = () => {
  const categories = [
    {
      icon: "bi-code-slash",
      title: "Web Developer",
      description: "Design, build and maintain modern web apps.",
      jobsPosted: "350+ jobs available",
      bgColor: "#e3f2fd",
    },
    {
      icon: "bi-currency-dollar",
      title: "Finance",
      description: "Analyze budgets, investments, and reports.",
      jobsPosted: "200+ openings today",
      bgColor: "#f1f8e9",
    },
    {
      icon: "bi-people-fill",
      title: "Human Resources",
      description: "Hire, train, and manage organization talent.",
      jobsPosted: "150+ HR roles open",
      bgColor: "#fff3e0",
    },
    {
      icon: "bi-megaphone-fill",
      title: "Digital Marketing",
      description: "Drive brand growth through digital strategy.",
      jobsPosted: "300+ digital jobs listed",
      bgColor: "#ffe0f0",
    },
    {
      icon: "bi-cpu",
      title: "AI & Machine Learning",
      description: "Build models, train neural networks.",
      jobsPosted: "180+ AI jobs open",
      bgColor: "#e0ffe8",
    },
    {
      icon: "bi-globe",
      title: "IT Support",
      description: "Help maintain systems & assist users.",
      jobsPosted: "220+ IT jobs available",
      bgColor: "#ede7f6",
    },
  ];

  const grouped = [];
  for (let i = 0; i < categories.length; i += 3) {
    grouped.push(categories.slice(i, i + 3));
  }

  return (
    <div className="container py-5">
      {/* Inline styles to override carousel arrow color */}
      <style>{`
  .carousel-control-prev,
.carousel-control-next {
  width: auto;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: #0d6efd; /* Bootstrap primary blue */
  z-index: 10;
}


  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    background-color: #0d6efd; /* Bootstrap primary blue */
    background-size: 70% 70%;
    border-radius: 50%;
    padding: 10px;
  }

  .carousel-control-prev {
  left: -60px; /* Push left arrow outside the cards */
}

.carousel-control-next {
  right: -60px; /* Push right arrow outside the cards */
}

  /* Make sure arrows appear above content */
  .carousel-control-prev,
  .carousel-control-next {
    top: 40%;
    bottom: auto;
    z-index: 5;
  }

 @media (max-width: 768px) {
  .carousel-control-prev {
    left: -30px;
  }
  .carousel-control-next {
    right: -30px;
  }
}

  }
`}</style>

      <h2 className="text-center mb-4">Browse Job Categories</h2>
      <p className="text-center text-muted mb-5">
        Explore job categories tailored to your skills and interests.
      </p>

      <div
        id="categoryCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {grouped.map((group, idx) => (
            <div
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
              key={idx}
            >
              <div className="row justify-content-center">
                {group.map((cat, index) => (
                  <div className="col-md-4 mb-3" key={index}>
                    <div
                      className="card h-100 text-center shadow"
                      style={{ backgroundColor: cat.bgColor }}
                    >
                      <div className="card-body">
                        <i
                          className={`bi ${cat.icon} mb-3`}
                          style={{ fontSize: "2rem", color: "#007bff" }}
                        ></i>
                        <h5 className="card-title">{cat.title}</h5>
                        <p className="card-text">{cat.description}</p>
                        <p className="fw-bold text-primary">{cat.jobsPosted}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Category;
