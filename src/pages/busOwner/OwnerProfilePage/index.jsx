import React from "react";
import BusownersideBar from "../../../components/busOwner/Busownersidebar/BusownersideBar";
import BusownerTopBar from "../../../components/busOwner/BusownertopBar/BusownerTopBar";
import OwnerProfile from "./OwnerProfile"
import Footer from "../../../components/common/footer/Footer"


export default function OwnerProfilePage(){
    return(
        <div className="Dashboard-page">

              <div className="Topbar"> <BusownerTopBar/></div>
              <div className="flex">
              <div className="sidebar"> <BusownersideBar/></div>
                <div className="Dash"> <OwnerProfile/></div>            
                   {/* <Footer/> */}
                </div>
         </div>

    )
}