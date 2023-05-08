import React from "react";
import SideBar from "../../../components/conductor/sidebar/SideBar";
import TopBar from "../../../components/conductor/ConducortopBar/TopBar";

import DashBoardConductor from "./components/DashBoardConductor";
import "./index.css"

export default function ConductorDashboardPage(){
    return(
        
            
            <div className="body">
            <div className="Topbar"><TopBar/></div><div className="flex">
            <div className="sidebar"><SideBar/></div>
            <div className="Dash"> <DashBoardConductor /></div>
            </div>
            </div>
        
    )
}