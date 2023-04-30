import React from "react";
import BusownersideBar from "../../components/Busownersidebar/BusownersideBar";
import BusownerTopBar from "../../components/BusownertopBar/BusownerTopBar";
import DashOwner from "./ownerDashboardpage";
import Footer from "../../components/footer/Footer";


export default function OwnerdashboardPage(){
    return(
        <div className="BusRegPage">

              <div className="Topbar"> <BusownerTopBar/></div>
              <div className="flex">
              <div className="sidebar"> <BusownersideBar/></div>
                <div className="Dash"> <DashOwner/></div>            
                   
                </div>
                    
         </div>

    )
}