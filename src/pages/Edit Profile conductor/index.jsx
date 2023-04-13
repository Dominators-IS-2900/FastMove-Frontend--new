import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/ConducoronductortopBar/TopBar";
import EditProfile from "./EditProfile.js";



export default function EditProfile(){
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