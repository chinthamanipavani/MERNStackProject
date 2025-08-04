import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { Link as ScrollLink } from "react-scroll";

const NavbarS = () => {
  const navigate = useNavigate();

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
          <span className="fw-bold">Job Portal</span>
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="category"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                Categories
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                to="faq"
                smooth={true}
                duration={500}
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                FAQs
              </ScrollLink>
            </li>
            <li className="nav-item">
              <Link to="/addjob" className="nav-link">
                Post Job
              </Link>
            </li>
          </ul>

          {/* Optional Search */}
          <form className="d-flex ms-lg-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search jobs..."
              aria-label="Search"
            />
          </form>
          <Link
            to="/profile"
            className="nav-link btn border border-success text-success px-4 py-2 ms-2"
          >
            Profile
          </Link>

          <Link
            to="/login"
            className="nav-link btn border border-success text-success px-4 py-2 ms-2"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarS;
