import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/ConducortopBar/TopBar";
import Emergency from "./components/Emergency";
import "./components/Emergency.css"


export default function EmergencyPage(){
    return(
        <div className="BusRegPage">
              <div className="body">
              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
              <div className="Dash"> <Emergency/></div>            
                   
        </div>
        </div>
        </div>

    )
}