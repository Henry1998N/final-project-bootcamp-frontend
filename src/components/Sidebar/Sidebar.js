import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, useNavigate } from "react-router-dom";
import { demouser } from "../../Assets/index";
import { useEffect, useState } from "react";
import ApiManager from "../../apiManager/apiManager";
import CoordinatorApiMan from "../../coordinatorApiManager/coordinatorApiMan";

const Sidebar = () => {
  const [userData, setUserData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    const apiManager = new ApiManager();
    const coordinatorApiMan = new CoordinatorApiMan();

    const fetchUser = async () => {
      let fetchedUser;
      if (user.userType === "Instructor") {
        fetchedUser = await apiManager.getInstructorById(user.userId);
      } else {
        fetchedUser = await coordinatorApiMan.getCoordinatorByCoordinatorID(
          user.userId
        );
      }
      try {
        setUserData(fetchedUser);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
    // navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="user-profile">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src={userData?.image}
            alt="User Profile"
            className="profile-image"
          />
        </Link>
        <div className="profile-details">
          <div className="profile-name">
            {userData?.name ? userData.name : userData.fullName}
          </div>
          <div className="profile-job">
            {user?.userType === "Instructor" ? "Instructor" : "Coordinator"}
          </div>
        </div>
      </div>
      <div className="center">
        <ul>
          <hr className="sidebar-divider" />
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <hr className="sidebar-divider" />

          {user.userType === "Instructor" ? (
            <Link to="/residents" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Residents</span>
              </li>
            </Link>
          ) : (
            <Link
              to="/coordinator/instructors"
              style={{ textDecoration: "none" }}
            >
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Instructors</span>
              </li>
            </Link>
          )}
          <Link to="/apartments" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Apartments</span>
            </li>
          </Link>

          <hr className="sidebar-divider" />
          {user.userType === "Instructor" ? (
            <Link to="/scheduler">
              <li>
                <InsertChartIcon className="icon" />
                <span>Scheduler</span>
              </li>
            </Link>
          ) : (
            <Link to="/coordinator/schedule">
              <li>
                <InsertChartIcon className="icon" />
                <span>Schedule</span>
              </li>
            </Link>
          )}
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <hr className="sidebar-divider" />
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Medications</span>
          </li>
          <Link to={"/reports"}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Report</span>
            </li>
          </Link>
          <hr className="sidebar-divider" />
          <Link
            to={`${
              user.userType === "Instructor"
                ? "/instructor/profile"
                : "/Coordinator/profile"
            }`}
          >
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li onClick={logout}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
