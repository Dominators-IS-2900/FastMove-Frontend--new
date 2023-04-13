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

    <h1 class="fontcolor">Welcome Nimal De Silva</h1>
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

    {/*
    <div class="row">
    <div class="col-xl-3 col-md-6 mb-4">
    <div class="card border-left-primary shadow h-100 py-2">
    <div class="card-body">
    <div class="row no-gutters align-items-center">
    <div class="col mr-2">
    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
        Earnings (Monthly)</div>
    <div class="h5 mb-0 font-weight-bold text-gray-800">View Earnings</div>
    </div>
    <div class="col-auto">
    <i class="fas fa-calendar fa-2x text-gray-300"></i>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>*/}
    </div>
     </div>
      
            
  )
}
