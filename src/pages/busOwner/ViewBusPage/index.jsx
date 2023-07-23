import React from "react";
import BusownersideBar from "../../../components/busOwner/Busownersidebar/BusownersideBar";
import BusownerTopBar from "../../../components/busOwner/BusownertopBar/BusownerTopBar";
import ViewBus from "./ViewBus"
import './ViewBus.css'

export default function ViewBusPage(){
    return(
        <div className="Dashboard-page">

            <div className="Topbar"> <BusownerTopBar/></div>
            <div className="flex">
                <div className="sidebar" style={{marginTop:"0px"}}> <BusownersideBar/></div>
                <div className="Dash"> <ViewBus/></div>            
                   
            </div>
        </div>

    )
}