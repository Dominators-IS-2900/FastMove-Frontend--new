//side navigation bar of bus owner
import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import './Busownersidebar.css'

export default function BusownersideBar() {

    const [route, setRoute] = useState("");
  return (

    <div className='BusownersideBar'>
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <div className='sidebarowner'>        
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className='Logobox'>
                FastMove
                {/* Logo */}
            </div>
        
        </a>
        
        <hr class="sidebar-divider my-0"/>

        <li class="nav-item active">
            
                <Link to='/' class="nav-link">
                    <span>Dashboard</span>
                </Link>      
        </li>
        
        <hr class="sidebar-divider"/>
        <div class="sidebar-heading">
            Bus Owner
        </div>

        {/* navigation tabs */}
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fa fa-bus"></i>
                <span>My Buses</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <Link to="/BusReg"> <a class="collapse-item" href="/route"><i class="fa fa-edit"></i> Add new Bus</a></Link>
                    <Link to="/ViewBuses"> <a class="collapse-item" href="/route_1"><i class="fa fa-bars"></i> My Buses</a></Link>
                </div>
            </div>
        </li>
 
        <Link to="/HelpPage">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-question-circle"></i>
                <span>Help</span>
            </a>
        </li></Link>
        </div>
  </ul>
        
      
    </div>
  )
}
