import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpg";

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
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <button
                  onClick={() => navigate("/")}
                  className="nav-link btn btn-link"
                  style={{ border: "none", background: "none" }}
                >
                  Home
                </button>
              </li>
              <li className="nav-item me-3">
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById("services");
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop,
                          behavior: "smooth",
                        });
                      }
                    }, 100);
                  }}
                  className="nav-link btn btn-link"
                  style={{ border: "none", background: "none" }}
                >
                  Services
                </button>
              </li>
              <li className="nav-item me-3">
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById("about");
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop,
                          behavior: "smooth",
                        });
                      }
                    }, 100);
                  }}
                  className="nav-link btn btn-link"
                  style={{ border: "none", background: "none" }}
                >
                  About
                </button>
              </li>
              <li className="nav-item me-3">
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById("contact");
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop,
                          behavior: "smooth",
                        });
                      }
                    }, 100);
                  }}
                  className="nav-link btn btn-link"
                  style={{ border: "none", background: "none" }}
                >
                  Contact
                </button>
              </li>
            
         
              <li className="nav-item">
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById("companies");
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop,
                          behavior: "smooth",
                        });
                      }
                    }, 100);
                  }}
                  className="nav-link btn btn-link"
                  style={{ border: "none", background: "none" }}
                >
                  Companies
                </button>
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
