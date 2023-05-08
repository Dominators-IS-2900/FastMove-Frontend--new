import React from "react";
import BusownersideBar from "../../components/Busownersidebar/BusownersideBar";
import BusownerTopBar from "../../components/BusownertopBar/BusownerTopBar";
import BusReg from "./BusReg.jsx";
import "./BusReg.css"
import Footer from "../../components/footer/Footer";


export default function BusRegPage(){
    return(
        <div className="BusRegPage">

              <div className="Topbar"> <BusownerTopBar/></div>
              <div className="flex">
              <div className="sidebar"> <BusownersideBar/></div>
                <div className="Dash"> <BusReg/></div>            
                   
                </div>
                    
         </div>

    )
}