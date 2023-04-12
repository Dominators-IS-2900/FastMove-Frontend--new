import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/ConducortopBar/TopBar";

import DashBoardConductor from "./DashBoardConductor";
import "./index.css"

export default function DashBoardPageConductor(){
    return(
        
            
            <div className="body">
            <div className="Topbar"> <TopBar /></div><div className="flex">
            <div className="sidebar"> <SideBar /></div>
            <div className="Dash"> <DashBoardConductor /></div>
            </div>
            </div>
        
    )
}