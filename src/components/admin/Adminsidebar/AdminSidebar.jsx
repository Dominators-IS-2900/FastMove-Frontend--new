// import React from 'react'
// import {Link} from 'react-router-dom'
// import { useState } from 'react';
// import './AdminSidebar.css'
// import Logo from '../../../Images/Logo.png'

// export default function AdminSidebar() {

//     const [route, setRoute] = useState("");
//   return (

//     <div>
//         <img src={Logo}/>
//       <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        
       

        
//         <hr class="sidebar-divider my-0"/>

        
//         <li class="nav-item active">
            
//                 <Link to='/' class="nav-link">
//                     <span>Dashboard</span>
//                 </Link>
            
                
//         </li>
        
//         <hr class="sidebar-divider"/>
//         <div class="sidebar-heading">
//             Admin
//         </div>
//         <Link to="/ProfilePage">
//         <li class="nav-item">
//             <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
//                 aria-expanded="true" aria-controls="collapseUtilities">
//                 <i class="fa fa-address-book"></i>
//                 <span>Conductor Registration</span>
//             </a>
//         </li></Link>
//         <li class="nav-item">
//             <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
//                 aria-expanded="true" aria-controls="collapseTwo">
//                 <i class="fa fa-user-circle"></i>
//                 <span>Inquiry </span>
//             </a>
//             <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
//                 <div class="bg-white py-2 collapse-inner rounded">
             
//               <Link to="/Inquiryowner"> <a class="collapse-item" href="/route"><i class="fa fa-user-circle"></i> Bus Owner</a></Link>
//               <Link to="/InquiryPassengerP"> <a class="collapse-item" href="/route_1"><i class="fa fa-user-circle"></i> Passenger</a></Link>
//                     </div>
//             </div>
//         </li>
 
      
//         <Link to="/Busfarepage">
//         <li class="nav-item">
//             <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
//                 aria-expanded="true" aria-controls="collapseUtilities">
//                 <i class="fa fa-bus" ></i>
//                 <span>Bus Fare </span>
//             </a>
//         </li></Link>

//         <li class="nav-item">
//             <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
//                 aria-expanded="true" aria-controls="collapseTwo">
//                 <i class="fa fa-user-circle"></i>
//                 <span> Verification</span>
//             </a>
//             <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
//                 <div class="bg-white py-2 collapse-inner rounded">
             
//               <Link to="/Ownervarification"> <a class="collapse-item" href="/route"><i class="fa fa-user-circle"></i> Bus Owner</a></Link>
//               <Link to="/PassengerVerification"> <a class="collapse-item" href="/route_1"><i class="fa fa-user-circle"></i> Passenger</a></Link>
//                     </div>
//             </div>
//         </li>
 
//         <Link to="/Activity">
//         <li class="nav-item">
//             <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
//                 aria-expanded="true" aria-controls="collapseUtilities">
//                 <i class="fa fa-bell"></i>
//                 <span>Activity Schedule</span>
//             </a>
//         </li></Link>
//         <li class="nav-item">
//             <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
//                 aria-expanded="true" aria-controls="collapseTwo">
//                 <i class="fa fa-user-circle"></i>
//                 <span>Users Informations</span>
//             </a>
//             <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
//                 <div class="bg-white py-2 collapse-inner rounded">
             
//               <Link to="/DetailsownerPage"> <a class="collapse-item" href="/route"><i class="fa fa-user-circle"></i> Bus Owner</a></Link>
//               <Link to="/DetailsconductorPage"> <a class="collapse-item" href="/route_1"><i class="fa fa-user-circle"></i> Passenger</a></Link>
//               <Link to="/DetailsPassengerPage"> <a class="collapse-item" href="/route_1"><i class="fa fa-user-circle"></i> Conductor </a></Link>
//                     </div>
//             </div>
//         </li>
//   </ul>
        
      
//     </div>
//   )
// }
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './AdminSidebar.css';
import Logo from '../../../Images/Logo.png';

export default function AdminSidebar() {
  const [route, setRoute] = useState("");

  return (
    <div>
      <img src={Logo} alt="Logo" />
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link to="/" className="nav-link">
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />
        <div className="sidebar-heading">
          Admin
        </div>

        <Link to="/ProfilePage">
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilitiesConductor"
              aria-expanded="true" aria-controls="collapseUtilitiesConductor">
              <i className="fa fa-address-book"></i>
              <span>Conductor Registration</span>
            </a>
          </li>
        </Link>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseInquiry"
            aria-expanded="true" aria-controls="collapseInquiry">
            <i className="fa fa-user-circle"></i>
            <span>Inquiry</span>
          </a>
          <div id="collapseInquiry" className="collapse" aria-labelledby="headingInquiry" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/Inquiryowner">
                <a className="collapse-item" href="/route"><i className="fa fa-user-circle"></i> Bus Owner</a>
              </Link>
              <Link to="/InquiryPassengerP">
                <a className="collapse-item" href="/route_1"><i className="fa fa-user-circle"></i> Passenger</a>
              </Link>
            </div>
          </div>
        </li>

        <Link to="/Busfarepage">
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBusFare"
              aria-expanded="true" aria-controls="collapseBusFare">
              <i className="fa fa-bus"></i>
              <span>Bus Fare</span>
            </a>
          </li>
        </Link>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseVerification"
            aria-expanded="true" aria-controls="collapseVerification">
            <i className="fa fa-user-circle"></i>
            <span>Verification</span>
          </a>
          <div id="collapseVerification" className="collapse" aria-labelledby="headingVerification" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/Ownervarification">
                <a className="collapse-item" href="/route"><i className="fa fa-user-circle"></i> Bus Owner</a>
              </Link>
              <Link to="/PassengerVerification">
                <a className="collapse-item" href="/route_1"><i className="fa fa-user-circle"></i> Passenger</a>
              </Link>
            </div>
          </div>
        </li>

        <Link to="/Activity">
          <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseActivity"
              aria-expanded="true" aria-controls="collapseActivity">
              <i className="fa fa-bell"></i>
              <span>Activity Schedule</span>
            </a>
          </li>
        </Link>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUsersInfo"
            aria-expanded="true" aria-controls="collapseUsersInfo">
            <i className="fa fa-user-circle"></i>
            <span>Users Information</span>
          </a>
          <div id="collapseUsersInfo" className="collapse" aria-labelledby="headingUsersInfo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <Link to="/DetailsownerPage">
                <a className="collapse-item" href="/route"><i className="fa fa-user-circle"></i> Bus Owner</a>
              </Link>
              <Link to="/DetailsconductorPage">
                <a className="collapse-item" href="/route_1"><i className="fa fa-user-circle"></i> Conductor</a>
              </Link>
              <Link to="/DetailsPassengerPage">
                <a className="collapse-item" href="/route_2"><i className="fa fa-user-circle"></i> Passenger</a>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
