import React from "react";
import NavbarS from "./NavbarS";
import Navbar from "../landing/Navbar";
import Category from "../landing2/Category";
import FrequencyAskedQuestions from "./FrequentlyAskedQuestions";
import RecruiterLanding from "./RecruiterLanding";
import Footer from "../landing/Footer";
import AboutRecruiter from "./AboutRecruiter";

const Recruiter = () => {
  return (
    <>
     <NavbarS/>
      <RecruiterLanding />
      {/* Target for ScrollLink to="about" */}
      <div name="about" id="about">
        <AboutRecruiter />
      </div>

      {/* Target for ScrollLink to="category" */}
      <div name="category" id="category">
        <Category />
      </div>

      {/* Target for ScrollLink to="faq" */}
      <div name="faq" id="faq">
        <FrequencyAskedQuestions />
      </div>

      <Footer />
    </>
  );
};

export default Recruiter;
