import React from "react";
import Category from "../landing2/Category";
import RecruiterLanding from "../recruiterDashboard/RecruiterLanding";
import Animated from "../landing/Animated";
import FindJobPage from "../landing/FindJobPage";
import Footer from "../landing/Footer";
import NavbarT from "./NavbarT";
import BasicJobs from './BasicJobs'

const Seeker = () => {
  return (
    <>
    <NavbarT/>
      <RecruiterLanding />
      <Category />

     <BasicJobs/>
      <Animated />
      <Footer />
    </>
  );
};

export default Seeker;
