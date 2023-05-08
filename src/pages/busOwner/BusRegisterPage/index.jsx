import React from "react";
import BusownersideBar from "../../../components/busOwner/Busownersidebar/BusownersideBar";
import BusownerTopBar from "../../../components/busOwner/BusownertopBar/BusownerTopBar";
import BusRegister from "./BusRegister.jsx";
import "./BusRegister.css"
// import Footer from "../../components/footer/Footer";


export default function BusRegisterPage(){
    return(
        <div className="BusRegPage">

              <div className="Topbar"> <BusownerTopBar/></div>
              <div className="flex">
              <div className="sidebar"> <BusownersideBar/></div>
                <div className="Dash"> <BusRegister/></div>            
                   
                </div>
                    
         </div>

    )
}