import React, { useState } from "react";
import Category from "../landing2/Category";
import Animated from "../landing/Animated";
import Footer from "../landing/Footer";
import NavbarT from "./NavbarT";
import BasicJobs from "./BasicJobs";
import SeekerLanding from "./SeekerLanding";

const Seeker = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <NavbarT setSearchTerm={setSearchTerm} />
      <SeekerLanding id="about" />
      <Category id="category" />
      <BasicJobs searchTerm={searchTerm} id="faq" />
      <Animated id="career" />
      <Footer />
    </>
  );
};

export default Seeker;
