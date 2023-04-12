import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';

export default function SideBar() {

    const [route, setRoute] = useState("");
  return (

    <div>
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fa fa-bus"></i>
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
            Bus Conductor
        </div>

        {/* Nav Item - Pages Collapse Menu  */}

        <Link to="/Scan">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-qrcode"></i>
                <span>  Scan </span>
            </a>
        </li></Link>
        
        <Link to="/Profile">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-id-card"></i>
                <span>Profile</span>
            </a>
        </li></Link>
        
        <Link to="/Emergency">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-exclamation"></i>
                <span>Emergency</span>
            </a>
        </li></Link>
        
        <Link to="/MySchedule">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-calendar"></i>
                <span>Activity Schedule</span>
            </a>
        </li></Link>
        <Link to="/HelpPage">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-question-circle"></i>
                <span>Help</span>
            </a>
        </li></Link>
        <br/>  <br/>
        <Link to='/' class="nav-link">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#"  data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-chevron-circle-left"></i>
                <span>Back</span>
            </a>
        </li></Link>
        
  </ul>
        
      
    </div>
  )
}
