import React from "react";
import Helpsheet from "./HelpPage";
import BusownersideBar from "../../../components/busOwner/Busownersidebar/BusownersideBar";
import BusownerTopBar from "../../../components/busOwner/BusownertopBar/BusownerTopBar";
import './HelpPage.css'
import HelpPage from "./HelpPage";

export default function OwnerHelpPage(){
    return(
        <div className="Dashboard-page">

              {/* <div className="Topbar"> <BusownerTopBar/></div> */}
              <div className="flex">
              <div className="sidebar" style={{marginTop:"0px"}}> <BusownersideBar/></div>
                <div className="Help" style={{marginTop:"10px"}}> <HelpPage/></div>            
                   
                </div>
         </div>

    )
}