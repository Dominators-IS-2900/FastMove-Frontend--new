import React from "react";
//import BusownersideBar from "../../components/Busownersidebar/BusownersideBar";
//import BusownerTopBar from "../../components/BusownertopBar/BusownerTopBar";
import DashBoard from "./DashBoard";
import "./dashboard.css"

export default function DashBoardPage(){
    return(
        <div className="Dashboard-page">

              {/* <div className="Topbar"> <BusownerTopBar/></div> */}
              <div className="flex">
              {/* <div className="sidebar"> <BusownersideBar/></div> */}
                <div className="Dash"> <DashBoard/></div>            
                   
                </div>
         </div>

    )
}