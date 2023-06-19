import React from "react";
import SideBar from "../../../components/conductor/sidebar/SideBar";
import TopBar from "../../../components/conductor/ConducortopBar/TopBar";
import Profile from "./components/ConductorProfile"
import "./index.css"



export default function ConductorProfilePage(){
    return(
        <div className="ProfilePage">
         <div className="body">
              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
                <div className="Dash"> <Profile/></div>            
                   
                </div>
         </div>
         </div>
    )
}