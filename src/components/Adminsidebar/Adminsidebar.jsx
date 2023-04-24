import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';

export default function SideBarr() {

    const [route, setRoute] = useState("");
  return (

    <div>
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <Link to='/' class="nav-link" style={{color: "white"}}>
                <div class="mx-3">FastMove</div>
            </Link>
            
        </a>

        
        <hr class="sidebar-divider my-0"/>

        
        <li class="nav-item active">
            
                <Link to='/' class="nav-link">
                    <span>Dashboard</span>
                </Link>
            
                
        </li>
        
        <hr class="sidebar-divider"/>
        <div class="sidebar-heading">
            Admin
        </div>
        <Link to="/ProfilePage">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-address-book"></i>
                <span>Conductor Registration</span>
            </a>
        </li></Link>
        <Link to="/">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-search"></i>
                <span>Inquiry</span>
            </a>
        </li></Link>
      
        <Link to="/Busfarepage">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-bus" ></i>
                <span>Bus Fare </span>
            </a>
        </li></Link>




        {/* Nav Item - Pages Collapse Menu  */}
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fa fa-user-circle"></i>
                <span> Verification</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
             
              <Link to="/Ownervarification"> <a class="collapse-item" href="/route"><i class="fa fa-user-circle"></i> Bus Owner</a></Link>
              <Link to="/PassengerVerification"> <a class="collapse-item" href="/route_1"><i class="fa fa-user-circle"></i> Passenger</a></Link>
                    </div>
            </div>
        </li>
 
        <Link to="/Activity">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-bell"></i>
                <span>Activity Schedule</span>
            </a>
        </li></Link>

  </ul>
        
      
    </div>
  )
}
