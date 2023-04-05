import React from "react";
import BusownersideBar from "../../components/Busownersidebar/BusownersideBar";
import BusownerTopBar from "../../components/BusownertopBar/BusownerTopBar";
import ViewBus from "./ViewBusPage";
import './ViewBus.css'

export default function ViewBusPage(){
    return(
        <div className="Dashboard-page">

            <div className="Topbar"> <BusownerTopBar/></div>
            <div className="flex">
                <div className="sidebar"> <BusownersideBar/></div>
                <div className="Dash"> <ViewBus/></div>            
                   
            </div>
        </div>

    )
}