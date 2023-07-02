import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './sidebar.css'

export default function SideBar() {
  const [route, setRoute] = useState("");
  const [isResponsive, setIsResponsive] = useState(false);

  const handleButtonClick = () => {
    setIsResponsive(prevIsResponsive => !prevIsResponsive);
  };


  return (
    
    <div className="fixed-sidebar">
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* Sidebar Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fa fa-bus"></i>
          </div>
          <Link to='/' className="nav-link" style={{ color: "white" }}>
            <div className="mx-3">FastMove</div>
          </Link>
        </a>

        {/* Divider */}
        <hr className="sidebar-divider my-0" />

        {/* Dashboard */}
        <li className="nav-item active">
          <Link to='/' className="nav-link">
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />

        {/* Bus Conductor */}
        <div className="sidebar-heading">Bus Conductor</div>

        {/* Scan */}
        <Link to="/Scan">
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fa fa-qrcode"></i>
              <span>Scan</span>
            </a>
          </li>
        </Link>

        {/* Profile */}
        <Link to="/ConductorProfile">
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fa fa-id-card"></i>
              <span>Profile</span>
            </a>
          </li>
        </Link>

        {/* Emergency */}
        <Link to="/Emergency">
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fa fa-exclamation"></i>
              <span>Emergency</span>
            </a>
          </li>
        </Link>

        {/* Activity Schedule */}
        <Link to="/MySchedule">
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fa fa-calendar"></i>
              <span>Activity Schedule</span>
            </a>
          </li>
        </Link>

        <br /> <br /> <br /> <br />

        {/* Back */}
        <Link to='/' className="nav-link">
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fa fa-chevron-circle-left"></i>
              <span>Back</span>
            </a>
          </li>
        </Link>

      </ul>
    </div>
  )
}
