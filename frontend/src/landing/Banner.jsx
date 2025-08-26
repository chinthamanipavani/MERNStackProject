import React from "react";
import langing1 from "../images/langing1.png";
import accenture from "../images/accenture.png";
import amazonlogo from "../images/amazonlogo.png";
import capgemini from "../images/capgemini.png";
import cognigent from "../images/cognigent.png";
import netflixlogo from "../images/netflixlogo.png";
import spotifylogo from "../images/spotifylogo.png";
import tcslogo from "../images/tcslogo.png";
import wiprologo from "../images/wiprologo.png";
import googlelogo from "../images/googlelogo.webp";

import "./landing.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import Animated from "./Animated";
import Footer from "./Footer";
import About from "../landing2/About";
import Services from "../landing2/Services";
import Contact from "../landing2/Contact";
import Review from "../landing2/Review";
import Category from "../landing2/Category";
import { Element } from "react-scroll";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <>
      <Navbar />
      <div style={styles.banner}>
        <div style={styles.bannerText}>
          <h1 style={styles.heading}>
            FIND YOUR <span style={styles.span}>DREAM JOB</span> WITH US
          </h1>
          <p style={styles.paragraph}>
            Good life begins with a good company — start exploring thousands of
            Jobs in one place.
          </p>
          <form>
            {/* <input
              type="search"
              name="search"
              placeholder="Search here"
              style={styles.input}
            /> */}
          </form>
        </div>
        <div style={styles.bannerImage}>
          <img src={langing1} alt="Banner" style={styles.image} />
        </div>
      </div>

      {/* Company section with full browser width background */}
      <div id="companies" style={styles.fullWidthBg}>
        <div className="company-section">
          <h2>Trusted by 5000+ Companies</h2>
          <br />
          <div className="company-logos-wrapper">
            <div className="company-logos">
              {[
                spotifylogo,
                amazonlogo,
                googlelogo,
                netflixlogo,
                spotifylogo,
                accenture,
                capgemini,
                cognigent,
                tcslogo,
                wiprologo,
              ].map((logo, idx) => (
                <div key={idx}>
                  <img src={logo} alt="Company Logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-animated sections */}
      <Element name="services">
        <Services />
      </Element>
      <Element name="about">
        <About />
      </Element>

      <Element name="review">
        <Review />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default Banner;

const styles = {
  banner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "40px",
    backgroundColor: "#f8f9fa",
    flexWrap: "wrap",
  },
  span: {
    color: "orange",
  },
  bannerText: {
    flex: 1,
    paddingRight: "20px",
  },
  heading: {
    fontSize: "2.5rem",
    color: "#343a40",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "100%",
    maxWidth: "300px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  bannerImage: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    borderRadius: "10px",
  },
  fullWidthBg: {
    width: "100vw",
    backgroundColor: "#f0f0f0", // ✅ Your desired background color
  },
};
