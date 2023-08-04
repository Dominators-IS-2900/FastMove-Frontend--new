import React from "react";
import BankDetails from "../../../components/busOwner/BankDetails/BankDetails";
import BusownersideBar from "../../../components/busOwner/Busownersidebar/BusownersideBar";
import BusownerTopBar from "../../../components/busOwner/BusownertopBar/BusownerTopBar";
import './index.css'


export default function BankDetailsPage(){
    return(
        <div className="Dashboard-page">

              {/* <div className="Topbar"> <BusownerTopBar/></div> */}
              <div className="flex">
              <div className="sidebar" style={{marginTop:"0px"}}> <BusownersideBar/></div>
                <div className="BankDetails"  style={{marginTop:"80px",marginLeft:"-120px"}}> <BankDetails/></div>            
                   
                </div>
         </div>

    )
}