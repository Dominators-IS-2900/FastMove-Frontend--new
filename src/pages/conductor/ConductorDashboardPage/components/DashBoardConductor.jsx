import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../Images/Logo1.png';
import './dashboard.css';

export default function DashBoardConductor() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="img">
             <h3 style={{ fontWeight: 'bold', fontFamily: 'Arial, sans-serif', margin: '0' , color:' darkgreen' }}>
            <img src={Logo} alt="FastMove Logo" style={{ height: '80px', marginRight: '10px' }} />
              CONDUCTOR DASHBOARD</h3>
            </div>
           
          </div>
        </div>
     

      <div className="navbar-nav ms-auto">
        {/* conductor dropdown with logout, profile, and settings */}
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
             <div className="d-flex align-items-center">
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">Bus Conductor</span>
              <img className="img-profile rounded-circle" src="img/undraw_profile.svg" alt="Profile" style={{ width: '40px', height: '40px' }} />
            </div>
          </a>

          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <Link to="/ConductorProfile">
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
            </Link>

            <Link to="/Settings">
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
            </Link>

            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </a>
          </div>
        </li>
      </div>
      </nav>

      <br />
      <br />
      <br />

      <div className="md-6 mb-4">
        <div className="card-group">
          <div className="card" style={{ margin: '10px', backgroundColor: '#01281a', borderRadius: '1rem' }}>
            <img src={process.env.PUBLIC_URL + '/images/scan.png'} alt="scan" />
            <div className="card-body">
              <h4 className="card-title">Scan QR Code</h4>
              <h5>You can scan passengers' QR code using the Scan facility of this system</h5>
            </div>
            <div className="card-footer" style={{ borderRadius: '1rem' }}>
              <small className="text-muted">Learn More</small>
              <Link to="/Scan">
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="card" style={{ margin: '10px', backgroundColor: '#01281a', borderRadius: '1rem' }}>
            <img src={process.env.PUBLIC_URL + '/images/timetable.png'} alt="update" width="500px" height="500px" />
            <div className="card-body">
              <h4 className="card-title">Update Profile</h4>
              <h5>You can update your information in the system.</h5>
            </div>
            <div className="card-footer" style={{ borderRadius: '1rem' }}>
              <small className="text-muted">Learn More</small>
              <Link to="/ConductorProfile">
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="card" style={{ margin: '10px', backgroundColor: '#01281a', borderRadius: '1rem' }}>
            <img src={process.env.PUBLIC_URL + '/images/emergency02.png'} alt="emergency" width="225px" height="640px" />
            <br />
            <div className="card-body">
              <h4 className="card-title">Inform Emergency</h4>
              <h5>You can inform emergency cases like accidents, delays, breakdowns, etc., through this system</h5>
            </div>
            <div className="card-footer" style={{ borderRadius: '1rem' }}>
              <small className="text-muted">Learn More</small>
              <Link to="/Emergency">
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="card" style={{ margin: '10px', backgroundColor: '#01281a', borderRadius: '1rem' }}>
            <img src={process.env.PUBLIC_URL + '/images/timetable.png'} alt="timetable" width="225px" height="225px" />
            <div className="card-body">
              <h4 className="card-title">View Time Schedule</h4>
              <h5>You can view the time schedule of the passengers using the Schedule facility of this system</h5>
            </div>
            <div className="card-footer" style={{ borderRadius: '1rem' }}>
              <small className="text-muted">Learn More</small>
              <Link to="/MySchedule">
                <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
