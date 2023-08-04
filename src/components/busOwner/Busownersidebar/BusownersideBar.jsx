//side navigation bar of bus owner
import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import './Busownersidebar.css'
import Logo from '../../../Images/Logo.png'

export default function BusownersideBar() {

    const [route, setRoute] = useState("");
  return (

    <div className='BusownersideBar'>
         <img src={Logo}/>
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <div className='sidebarowner'>        
     

        <li class="nav-item active">
            
            <Link to='/ownerdashboard' class="nav-link">
                <span>Dashboard</span>
            </Link>
        </li>
{/*     
        <hr class="sidebar-divider my-0"/>
            <Link to='/ownerDashboardpage' class="nav-link">
                <li class="nav-item active">
                    <span>Dashboard</span>
                </li>
            </Link>    
        
        <hr class="sidebar-divider"/> */}
        
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
                    <Link to="/busregister"> <a class="collapse-item" href="/route"><i class="fa fa-edit"></i> Add new Bus</a></Link>
                    <Link to="/viewbus"> <a class="collapse-item" href="/route_1"><i class="fa fa-bars"></i> My Buses</a></Link>
                </div>
            </div>
        </li>

        <Link to="/bankdetails">
        <li class="nav-item" style={{marginTop:"10px"}}>
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-bank"></i>
                <span>Bank Details</span>
            </a>
        </li></Link>
 
        <Link to="/ownerhelp">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-question-circle"></i>
                <span>Help</span>
            </a>
        </li></Link>

        <Link to="/profileView">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
               <i class='fas fa-user-alt'></i>
                <span>Profile</span>
            </a>
        </li></Link>

        </div>
  </ul>
        
      
    </div>
  )
}
