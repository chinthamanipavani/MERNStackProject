import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./landing/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
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
import AllJobs from "./SeekerDashboard/AllJobs";
import JobsPage from "./SeekerDashboard/JobsPage";
import Category from "./landing2/Category";

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
        <Route path="/addjob" element={<ProtectedRoute><PostJob /></ProtectedRoute>} />
        <Route path="/findEmployee" element={<FindEmployeePage />} />
        <Route path="/findCompany" element={<FindCompany />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/seeker" element={<ProtectedRoute><Seeker /></ProtectedRoute>} />
        <Route path="/recruiter" element={<ProtectedRoute><Recruiter /></ProtectedRoute>} />
        <Route path="/application" element={<ProtectedRoute><Applications /></ProtectedRoute>} />
        <Route path="/moredetails" element={<ProtectedRoute><MoreDetails /></ProtectedRoute>} />
        <Route path="/categories" element={<Category />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        <Route path="/alljobs" element={<ProtectedRoute><AllJobs /></ProtectedRoute>} />
        <Route path="/jobs" element={<ProtectedRoute><JobsPage /></ProtectedRoute>} />
      </Routes>

      {location.pathname === "/" && <Footer />}
    </>
  );
}

export default App;
