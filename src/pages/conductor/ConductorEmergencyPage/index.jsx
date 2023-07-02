import React from "react";
import SideBar from "../../../components/conductor/sidebar/SideBar";
import Emergency from "./components/Emergency";
import "./components/Emergency.css"


export default function ConductorEmergencyPage(){
    return(
        <div className="BusRegPage">
            <div className="body">
              
              
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
                <div className="Dash"> <Emergency/></div>            
                   
                </div>
         </div>
        </div>

    )
}