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

    <h1 class="fontcolor">Welcome </h1>
    <br/>
    <div class="row">

    <div class="col-xl-3 col-md-6 mb-4">
    <h4>Scan QR code</h4>
    <img src={process.env.PUBLIC_URL + '/images/scan.jpg'} alt="scan" />
    <p><h5>You can scan passengers' QR code using Scan facility of this system</h5></p>
    </div>
    
    <br/>
    <div class="col-xl-3 col-md-6 mb-4">
    <h4>Update Profile</h4>
    <img src={process.env.PUBLIC_URL + '/images/update.avif'} alt="update" width="225px" />
    <p><h5>You can update your information to the system.</h5></p>
    </div>
    
    <div class="col-xl-3 col-md-6 mb-4">
    <h4>Inform Emergency</h4>
    <img src={process.env.PUBLIC_URL + '/images/emergency01.png'} alt="emergency" width="225px" height="540px" />
    <p><h5>You can inform emergency cases like accidents,delays,breakdown etc through this system</h5></p>
    </div>

    <div class="col-xl-3 col-md-6 mb-4">
    <h4>View Time Schedule</h4>
    <img src={process.env.PUBLIC_URL + '/images/timetable.jpg'} alt="timetable" width="225px" height="225px" />
    
    <p><h5>You can scan passengers' QR code using Scan facility of this system</h5></p>
    </div>
    </div>
    </div>
    </div>
      
            
  )
}
