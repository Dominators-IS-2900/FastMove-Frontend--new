import React from 'react'
import './AdminTopBar.css';
import { useNavigate } from 'react-router-dom';

export default function AdminTopBar() {
    const navigate = useNavigate();
    function handleLogout() {
        const confirmLogout = window.confirm('Are you sure you want to logout?');
        if (confirmLogout) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
  return (
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">   
        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                            <i class="fa fa-bars"></i>
        </button>       
        
        <ul class="navbar-nav ml-auto">
             
          
            <div class="topbar-divider d-none d-sm-block"></div>

            
            <li class="nav-item dropdown no-arrow">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">Admin</span>
                    <img class="img-profile rounded-circle"
                        src="img/undraw_profile.svg"/>
                </a>
                
                <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown">
                    <a class="dropdown-item" href="#">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </a>
                    <a class="dropdown-item" href="#">
                        <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                    </a>
                   
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" onClick={handleLogout} href="#" data-toggle="modal" data-target="#logoutModal">
                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                    </a>
                </div>
            </li>

        </ul>

    </nav>
  )
}
