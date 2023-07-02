import React from "react";
import SideBar from "../../../components/conductor/sidebar/SideBar";
import MySchedule from "./components/MySchedule";
import "./index.css"



export default function ConductorSchedulePage(){
    return(
        <div className="MySchedule">
         <div className="body">
              
               <div className="flex">
              <div className="sidebar"> <SideBar/></div>
              <div className="Dash"> <MySchedule/></div>            
                   
                </div>
         </div>
         </div>
    )
}