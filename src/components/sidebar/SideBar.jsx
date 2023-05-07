import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SideBar() {
  const [busRoutes, setBusRoutes] = useState([]);

  useEffect(() => {
    fetchRoutes();
  }, []);

  const fetchRoutes = async () => {
    axios.get("http://localhost:3000/routes").then(function (response) {
      setBusRoutes(response?.data);
    });
  };

  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <Link to="/" className="nav-link" style={{ color: "white" }}>
            <div className="mx-3">FastMove</div>
          </Link>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link to="/" className="nav-link">
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Time Keeper</div>

        {/* Nav Item - Pages Collapse Menu  */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Time Tables</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">All Routes:</h6>
              {busRoutes.map((route) => {
                const { route_id, start_point, end_point } = route;
                return (
                  <a className="collapse-item" href={`timetable?routeId=${route_id}&routeName=${start_point}-${end_point}`}>
                    {start_point}-{end_point}
                  </a>
                );
              })}
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Time Keeping</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Actions:</h6>
              <a className="collapse-item" href="/arrival">
                Arrival
              </a>
              <a className="collapse-item" href="/departure">
                Departure
              </a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities1"
            aria-expanded="true"
            aria-controls="collapseUtilities1"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Emergencies</span>
          </a>
          <div
            id="collapseUtilities1"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Actions:</h6>
              <a className="collapse-item" href="#">
                View Location
              </a>
              <a className="collapse-item" href="#">
                Bus No
              </a>
              <a className="collapse-item" href="/depo">
                Depos
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
