//side navigation bar of bus owner
import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import './Passengersidebar.css'
import Logo from '../../../Images/Logo.png'

export default function Passengersidebar() {

    const [route, setRoute] = useState("");
  return (

    <div className='BusownersideBar'>
         <img src={Logo}/>
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <div className='sidebarowner'>        
     

        <li class="nav-item active">
            
            <Link to='/ownerDashboardpage' class="nav-link">
                <span>Dashboard</span>
            </Link>
        </li>


       

        <Link to="/profileView">
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-question-circle"></i>
                <span>Profile</span>
            </a>
        </li></Link>

        </div>
  </ul>
        
      
    </div>
  )
}
