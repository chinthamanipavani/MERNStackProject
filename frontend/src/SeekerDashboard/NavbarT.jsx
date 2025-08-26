import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { Link as ScrollLink } from "react-scroll";

const NavbarT = ({ setSearchTerm }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(localSearchTerm);

    navigate("/findjob", { state: { searchTerm: localSearchTerm } });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src={logo}
            alt="Logo"
            height="40"
            className="me-2 rounded-circle"
          />
        </a>

        {/* Hamburger Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/seeker" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <button
                onClick={() => {
                  const element = document.getElementById("category");
                  if (element) {
                    window.scrollTo({
                      top: element.offsetTop,
                      behavior: "smooth",
                      top: element.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
                className="nav-link btn btn-link"
                style={{ border: "none", background: "none" }}
              >
                Categories
              </button>
            </li>
            <li className="nav-item">
              <Link to="/findjob" className="nav-link">
                find job
              </Link>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="career"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Career
              </ScrollLink>
            </li>
          </ul>

          <div className="d-flex align-items-center ms-auto">
            {/* Search Form */}
            <form className="d-flex me-3" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search jobs, companies, locations..."
                aria-label="Search"
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value)}
              />
            </form>
            <Link
              to="/profile"
              className="btn border border-success text-success px-4 py-2 me-2"
            >
              Profile
            </Link>
            <Link
              to="/"
              className="btn border border-success text-success px-4 py-2"
              onClick={async (e) => {
                e.preventDefault();
                try {
                  const token = localStorage.getItem("token");
                  const email = localStorage.getItem("userEmail");
                  await fetch("http://localhost:3000/logout", {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ email }),
                  });

                  localStorage.clear();
                  navigate("/");
                } catch (err) {
                  console.error("Logout error:", err);
                }
              }}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarT;
