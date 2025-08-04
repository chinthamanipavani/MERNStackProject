import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./landing/Navbar";
import Footer from "./landing/Footer";
import Banner from "./landing/Banner";
import FindJobPage from "./landing/FindJobPage";
import FindEmployeePage from "./landing/FindEmployeePage";
import FindCompany from "./landing/FindCompany";
import Login from "./login/Login";
import Register from "./login/Register";
import Profile from "./landing/Profile";
import PostJob from "./addJob/PostJob";
import Seeker from "./SeekerDashboard/Seeker";
import Recruiter from "./recruiterDashboard/Recruiter";
import Applications from "./recruiterDashboard/Applications";
import MoreDetails from "./SeekerDashboard/MoreDetails";

function App() {
  const location = useLocation();

  return (
    <>
      {/* <Navbar /> Optional: Only show on certain pages if needed */}

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/home" element={<Banner />} />
        <Route path="/product" element={<Banner />} />
        <Route path="/findjob" element={<FindJobPage />} />
        <Route path="/addjob" element={<PostJob />} />
        <Route path="/findEmployee" element={<FindEmployeePage />} />
        <Route path="/findCompany" element={<FindCompany />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/seeker" element={<Seeker />} />
        <Route path="/recruiter" element={<Recruiter />} />
        <Route path="/application" element={<Applications />} />{" "}
        {/* ✅ Fixed */}
        <Route path="/moredetails" element={<MoreDetails/>} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>

      {location.pathname === "/" && <Footer />}
    </>
  );
}

export default App;
