import "./App.css";
import "./components/Style/dark-style.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Nabar-Sidebar/Navbar/Navbar";
import Sidebar from "./components/Nabar-Sidebar/Sidebar/Sidebar";
import Apartments from "./components/ApartmentsPage/Apartments";
import Residents from "./components/ApartmentInfo/ResidentsPage/ResidentsPage";
import CreateReport from "./components/ReportPage/CreateReport";
import ResidentInfoPage from "./components/ResidentInfoPage/ResidentInfoPage/ResidentInfoPage";
import Home from "./components/Home/Home";
import ServerError from "./components/ServerError/ServerError";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import ApiManager from "./apiManager/apiManager";
import GoogleButton from "./components/GoogleLogin/GoogleButton";
import SignIn from "./components/SignIn/SignIn";
import CoordinatorHome from "./components/Coordinator_Dashboard/Coordinator_Home/CoordinatorHome";
import NewResident from "./components/ApartmentInfo/NewResident/NewResident";

const App = () => {
  const navigate = useNavigate();
  const [isCollapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(
    localStorage.getItem("instructorId") || null
  );

  const handleSidebarCollapse = function () {
    setCollapsed(!isCollapsed);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (!isLoggedin) {
      navigate("/login");
    }
  }, [isLoggedin]);

  return (
    <div>
      <div>
        <Home
          handleSidebarCollapse={handleSidebarCollapse}
          handleDarkMode={handleDarkMode}
          isCollapsed={isCollapsed}
          isLoggedin={isLoggedin}
        />
        <Routes>
        <Route path="/apartments" element={<Apartments />} />
        <Route
            path="/apartments/apartment-info/:apartmentName"
            element={<Residents />}
          />
          <Route path="/apartments/apartment-info/resident/:residentId" element={<ResidentInfoPage />} />
          <Route path="/apartments/apartment-info/resident/new-resident" element={<NewResident />} />
          <Route path="/server-error" element={<ServerError />} />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route
            path="/login"
            element={
              <SignIn setIsLoggedin={setIsLoggedin} isLoggedin={isLoggedin} />
            }
          />
          <Route path="/apartments/:instructorId" element={<Apartments />} />
          <Route path="/create-shift-report" element={<CreateReport />} />
          <Route
            path="/Coordinator/dashboard/:id"
            element={<CoordinatorHome />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
