import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" height="40" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className="nav-link"
                >
                  Home
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className="nav-link"
                >
                  About
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className="nav-link"
                >
                  Services
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="review"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className="nav-link"
                >
                  Review
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className="nav-link"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>

            <div>
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              &nbsp;
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
