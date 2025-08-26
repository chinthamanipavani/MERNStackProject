import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import { Link as ScrollLink } from "react-scroll";

const NavbarS = ({ searchTerm, setSearchTerm }) => {
  const [jobs, setJobs] = React.useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:3000/defaultJobs");
        if (!res.ok) throw new Error("Error fetching data");

        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };
    fetchJobs();
  }, []);

  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/recruiter">
          <img src={logo} alt="Logo" height="40" className="me-2 rounded-circle" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <div className="mx-auto">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <ScrollLink to="about" smooth={true} duration={500} className="nav-link" style={{ cursor: "pointer" }}>
                  About
                </ScrollLink>
              </li>
              <li className="nav-item">
                <ScrollLink to="category" smooth={true} duration={500} className="nav-link" style={{ cursor: "pointer" }}>
                  Categories
                </ScrollLink>
              </li>
              <li className="nav-item">
                <Link to="/addjob" className="nav-link">Post Job</Link>
              </li>
            </ul>
          </div>

          {/* <form className="d-flex ms-lg-3" role="search" onSubmit={e => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form> */}

          <Link to="/profile" className="nav-link btn border border-success text-success px-4 py-2 ms-2">Profile</Link>

          <Link to="/" className="nav-link btn border border-success text-success px-4 py-2 ms-2" onClick={async (e) => {
            e.preventDefault();
            try {
              const email = localStorage.getItem("userEmail");
              await fetch("http://localhost:3000/logout", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
              });

              localStorage.clear();
              navigate("/");
            } catch (err) {
              console.error("Logout error:", err);
            }
          }}>
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarS;
