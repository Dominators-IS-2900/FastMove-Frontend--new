import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../../Images/Logo.png'
import './sidebar.css'

export default function SideBar() {
  const [route, setRoute] = useState("");
  const [isResponsive, setIsResponsive] = useState(false);

  const handleButtonClick = () => {
    setIsResponsive(prevIsResponsive => !prevIsResponsive);
  };


  return (

    <div className="fixed-sidebar">
      <img src={Logo} style={{ width: '80px', height: '80px' }} />
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">




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
        <Link to="/scan">
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fa fa-qrcode"></i>
              <span>Scan</span>
            </a>
          </li>
        </Link>

        {/* Profile */}
        <Link to="/profileView">
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fa fa-id-card"></i>
              <span>Profile</span>
            </a>
          </li>
        </Link>

        {/* Emergency */}
        <Link to="/conductoremergrncy ">
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fa fa-exclamation"></i>
              <span>Emergency</span>
            </a>
          </li>
        </Link>

        {/* Activity Schedule */}
        <Link to="/conductorschedule">
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fa fa-calendar"></i>
              <span>Activity Schedule</span>
            </a>
          </li>
        </Link>
        <Link to="/ticket">
          <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i class="fa fa-ticket" aria-hidden="true"></i>
              <span>Generateticket</span>
            </a>
          </li></Link>

          <Link to="/conductorEmergencyhandle">
          <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
              aria-expanded="true" aria-controls="collapseUtilities">
              <i class="fa fa-ticket" aria-hidden="true"></i>
              <span>Emergency Handle</span>
            </a>
          </li></Link>

        <br />


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
