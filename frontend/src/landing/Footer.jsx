import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./landing.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-row footer-links">
        {/* First Column: Description + Icons */}
        <div className="footer-column">
          <p className="footer-description">
            Job portal with user profiles, skill updates, certifications, work
            experience, and admin job posting.
          </p>
          <div className="footer-icons">
            <i className="bi bi-telegram"></i>
            <i className="bi bi-twitter-x"></i>
            <i className="bi bi-instagram"></i>
          </div>
        </div>

        {/* Other Footer Columns */}
        <div className="footer-column">
          <Link to="/product">Product</Link>
          <Link to="/findjob">Find Job</Link>
          <Link to="/findcompany">Find Company</Link>
          <Link to="/findEmployee">Find Employees</Link>
        </div>
        <div className="footer-column">
          <Link to="/">Product</Link>
          <Link to="/">Find Job</Link>
          <Link to="/">Find Company</Link>
          <Link to="/">Find Employees</Link>
        </div>
        <div className="footer-column">
          <Link to="/">Product</Link>
          <Link to="/">Find Job</Link>
          <Link to="/">Find Company</Link>
          <Link to="/">Find Employees</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
