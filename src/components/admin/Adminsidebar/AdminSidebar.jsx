import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './AdminSidebar.css';
import Logo from '../../../Images/Logo.png';

export default function AdminSidebar() {
  const [route, setRoute] = useState("");

  return (
    <div>
      <img src={Logo} alt="Logo" />
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link to="/AdminDashboardPage" className="nav-link">
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <div className="sidebar-heading">
          Admin
        </div>
       
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseVerification"
            aria-expanded="true" aria-controls="collapseVerification">
            <i className="fa fa-check-circle"></i>
            <span>Verification</span>
          </a>
          <div id="collapseVerification" className="collapse" aria-labelledby="headingVerification" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/Ownervarification">
                <a className="collapse-item" href="/route"><i className="fa fa-user-circle"></i> Bus Owner</a>
              </Link>
              <Link to="/PassengerVPage">
                <a className="collapse-item" href="/route_1"><i className="fa fa-user-circle"></i> Passenger</a>
              </Link>
              <Link to ="/ProfilePage">
                <a className="collapse-item" href="/route_1"><i className="fa fa-user-circle"></i>Conductor</a>
                </Link>                               
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUsersInfo"
            aria-expanded="true" aria-controls="collapseUsersInfo">
            <i className="fa fa-user-circle"></i>
            <span>Users Information</span>
          </a>
          <div id="collapseUsersInfo" className="collapse" aria-labelledby="headingUsersInfo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/DecOwnerPage">
                <a className="collapse-item" href="/route"><i className="fa fa-user-circle"></i> Bus Owner</a>
              </Link>
              <Link to="/PverifiedPage">
                <a className="collapse-item" href="/route_1"><i className="fa fa-user-circle"></i>Passenger</a>
              </Link>
            <Link to="/UpdatedCPage">
            <a className="collapse-item" href="/route_1"><i className="fa fa-user-circle"></i>Conductor</a>
            </Link>
            </div>
          </div>
        </li>
        <Link to="/InfoPage">
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseActivity"
            aria-expanded="true" aria-controls="collapseActivity">
            <i className="fa fa-bell"></i>
            <span> Registered Bus Details </span>
          </a>
        </li>
        </Link>
        <Link to="/Busfarepage">
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBusFare"
            aria-expanded="true" aria-controls="collapseBusFare">
            <i className="fa fa-bus"></i>
            <span>Bus Fare</span>
          </a>
        </li>
       </Link>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseInquiry"
            aria-expanded="true" aria-controls="collapseInquiry">
            <i className="fa fa-reply"></i>
            <span>Inquiry</span>
          </a>
          <div id="collapseInquiry" className="collapse" aria-labelledby="headingInquiry" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/InvestigationPage">
                <a className="collapse-item" href="/route"><i className="fa fa-user-circle"></i> Bus Owner</a>
              </Link>
              <Link to="/IssuesPPage">
                <a className="collapse-item" href="/route_1"><i className="fa fa-user-circle"></i> Passenger</a>
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseInquiryInfo"
            aria-expanded="true" aria-controls="collapseInquiryInfo">
            <i className="fa fa-reply-all"></i>
            <span>Inquiry Information</span>
          </a>
          <div id="collapseInquiryInfo" className="collapse" aria-labelledby="headingInquiryInfo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/IssuesOwnerPage">
                <a className="collapse-item" href="/route"><i className="fa fa-user-circle"></i> Bus Owner</a>
              </Link>
              <Link to="/PassengerInquiryPage">
  <a className="collapse-item" href="/route_1"><i className="fa fa-user-circle"></i> Passenger</a>
</Link>

            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
