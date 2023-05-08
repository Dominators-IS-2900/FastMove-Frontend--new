import React from "react";
import SideBar from "../../../components/conductor/sidebar/SideBar";
import TopBar from "../../../components/conductor/ConducortopBar/TopBar";
import MySchedule from "./components/MySchedule";
import "./index.css"


export default function ConductorSchedulePage(){
    return(
        <div className="MySchedule">
         <div className="body">
              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
              <div className="Dash"> <MySchedule/></div>            
                   
                </div>
         </div>
         </div>
    )
}