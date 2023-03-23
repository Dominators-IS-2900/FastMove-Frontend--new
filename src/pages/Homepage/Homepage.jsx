import React from 'react'
import BusownerTopBar from '../../components/BusownertopBar/BusownerTopBar'
import Footer from '../../components/footer/Footer'
import './Homepage.css'
import { Link } from 'react-router-dom'

export default function Homepage(){
    return(
        <div>



            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">   
        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
        </button>       
        <form
            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
                <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                    aria-label="Search" aria-describedby="basic-addon2"/>
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                    </button>
                </div>
            </div>
        </form>
        <ul class="navbar-nav ml-auto">
             

            <div class="topbar-divider d-none d-sm-block"></div>

            
            <li class="nav-item dropdown no-arrow">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <Link to="/Dashboard"><span class="mr-2 d-none d-lg-inline text-gray-600 small">Login</span></Link> 
                    <img class="img-profile rounded-circle"
                        src="img/undraw_profile.svg"/>
                </a>
            </li>

        </ul>

    </nav>
        </div>
    )
}