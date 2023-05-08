import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function TopBar() {
    const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">   
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
        </button>       
        <form
            className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                    aria-label="Search" aria-describedby="basic-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                    </button>
                </div>
            </div>
        </form>
        <ul className="navbar-nav ml-auto">
             
            {/* <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-envelope fa-fw"></i>
                    
                    <span className="badge badge-danger badge-counter">7</span>
                </a>
                
                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="messagesDropdown">
                    <h6 className="dropdown-header">
                        Message Center
                    </h6>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                alt="..."/>
                            <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                            <div className="text-truncate">Hi there! I am Perera from Bus No-1A.Bus was breakdown in Mawanalla.Please Assign eny Bus</div>
                            <div className="small text-gray-500">Perera · 58m</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                alt="..."/>
                            <div className="status-indicator"></div>
                        </div>
                        <div>
                            <div className="text-truncate"> I am Jagath from Bus No-1B.Bus was breakdown in Kaluthara.Please Assign eny Bus</div>
                            <div className="small text-gray-500">Jagath · 1d</div>
                        </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center" href="#">
                        <div className="dropdown-list-image mr-3">
                            <img className="rounded-circle" src="img/undraw_profile_3.svg"
                                alt="..."/>
                            <div className="status-indicator bg-warning"></div>
                        </div>
                        <div>
                            <div className="text-truncate"> I am Wimal from Bus No-2A.Bus was breakdown in Kalaniya.Please Assign eny Bus</div>
                            <div className="small text-gray-500">Wimal · 2d</div>
                        </div>
                    </a>
                   
                    <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                </div>
            </li> */}

            <div className="topbar-divider d-none d-sm-block"></div>

            
            <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Time Keeper</span>
                    <img className="img-profile rounded-circle"
                        src="img/undraw_profile.svg"/>
                </a>
                
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown">
                    <a className="dropdown-item" 
                    onClick={()=>{navigate("/profile")}}
                    >
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </a>
                    <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                    </a>
                   
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal"
                    onClick={()=>{
                        localStorage.clear()
                        navigate("/login")
                    }}
                    >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                    </a>
                </div>
            </li>

        </ul>

    </nav>
  )
}
