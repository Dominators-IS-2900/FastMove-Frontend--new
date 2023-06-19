import React from 'react'
import "./dashboard.css"
import { Route, Routes, Link } from "react-router-dom"



export default function DashBoardConductor() {
  return (

    <div id="content" style={{ width: "1125px" }}>
    <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <Link to="/">
            <h2 class="black">Dashboard </h2>
    </Link>
    </div>

    <h1 class="fontcolor">Welcome  Nimal De Silva</h1>
    <br/>
    <div class="md-6 mb-4">
    <div class="card-group">
    <div class="card">
    <img src={process.env.PUBLIC_URL + '/images/scan.jpg'} alt="scan" />
            <div class="card-body">
                <h4 class="card-title">Scan QR code</h4>
                <h5>You can scan passengers' QR code using Scan facility of this system</h5>
            </div>
            <div class="card-footer">
                <small class="text-muted">Leran More</small>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>

            </div>
        </div>
        <br/><br/><br/><br/>
        <div class="card">
        <img src={process.env.PUBLIC_URL + '/images/update.avif'} alt="update" width="500px" height="500px" />
            <div class="card-body">
                <h4 class="card-title">Update Profile</h4>
                <h5>You can update your information to the system.</h5>
            </div>
            <div class="card-footer">
                <small class="text-muted">Leran More</small>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>

            </div>
        </div>
        <br/><br/><br/><br/>
        <div class="card">
        <img src={process.env.PUBLIC_URL + '/images/emergency01.png'} alt="emergency" width="225px" height="540px" />
        <br/>
            <div class="card-body">
                <h4 class="card-title">Inform Emergency</h4>
                <h5>You can inform emergency cases like accidents,delays,breakdown etc through this system</h5>
            </div>
            <div class="card-footer">
                <small class="text-muted">Leran More</small>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>

            </div>
        </div>
        <div class="card">
            <img src={process.env.PUBLIC_URL + '/images/timetable.jpg'} alt="timetable" width="225px" height="225px" />         
            <div class="card-body">
                <h4 class="card-title">View Time Schedule</h4>
                <h5>You can scan passengers' QR code using Scan facility of this system</h5>
            </div>
            <div class="card-footer">
                <small class="text-muted">Leran More</small>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>

            </div>
        </div>
    </div>
</div>
    </div>
    </div>
      
            
  )
}
