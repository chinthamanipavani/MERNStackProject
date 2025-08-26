import React, { useState } from "react";
import NavbarS from "../recruiterDashboard/NavbarS";
import BasicJobs from "../SeekerDashboard/BasicJobs";

const JobsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <NavbarS searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BasicJobs searchTerm={searchTerm} />
    </>
  );
};

export default JobsPage;