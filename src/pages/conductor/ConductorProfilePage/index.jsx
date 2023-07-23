import React from "react";
import SideBar from "../../../components/conductor/sidebar/SideBar";
import Profile from "./components/ConductorProfile"
import "./index.css"



export default function ConductorProfilePage(){
    return(
        <div className="ProfilePage">
         <div className="body">
              
              
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
                <div className="Dash"> <Profile/></div>            
                   
                </div>
         </div>
         </div>
    )
}