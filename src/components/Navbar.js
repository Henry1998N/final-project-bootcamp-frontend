import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "cirrus-ui";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-brand">
        <div className="nav-item no-hover">
          <a>
            <h6 className="title">Logo</h6>
          </a>
        </div>
        <div className="nav-item nav-btn" id="header-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="header-nav" id="header-menu">
        <div className="nav-left">
          <div className="nav-item active">
            <Link to={"/"}>Home</Link>
          </div>
          <div className="nav-item">
            <Link to={"/reports"}>Reports</Link>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-item">
            <figure className="avatar avatar--sm" data-text="Jz"></figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;