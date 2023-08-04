import React from "react";
import BusownersideBar from "../../../components/busOwner/Busownersidebar/BusownersideBar";
import BusownerTopBar from "../../../components/busOwner/BusownertopBar/BusownerTopBar";
import DashOwner from "./OwnerDashboard";
import Footer from '../../../components/common/footer/Footer'
import './index.css'
//import Footer from "../../components/footer/Footer";


export default function OwnerDashboardPage(){
    return(
        <div className="OwnerDashboardPage" style={{ backgroundColor: 'white' }}>

              {/* <div className="Topbar"> <BusownerTopBar/></div> */}
              <div className="flex">
              <div className="sidebar" style={{marginTop:"0px"}}> <BusownersideBar/></div>
                <div className="Dash" style={{marginTop:"70px",marginLeft:"30px"}}> <DashOwner/></div>             
                </div>
         </div>

    )
}