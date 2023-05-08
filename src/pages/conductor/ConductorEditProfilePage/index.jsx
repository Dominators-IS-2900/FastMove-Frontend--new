import React from "react";
import SideBar from "../../../components/conductor/sidebar/SideBar";
import TopBar from "../../../components/conductor/ConducortopBar/TopBar";
import EditProfile from "./EditProfile.js";



export default function ConductorEditProfilePage(){
    return(
        <div className="BusRegPage">

              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
                <div className="Dash"> <EditProfile/></div>            
                   
                </div>
         </div>

    )
}