import React from "react";
import BusownersideBar from "../../../components/busOwner/Busownersidebar/BusownersideBar";
import BusownerTopBar from "../../../components/busOwner/BusownertopBar/BusownerTopBar";
import DashOwner from "./OwnerDashboard";
//import Footer from "../../components/footer/Footer";


export default function OwnerDashboardPage(){
    return(
        <div className="OwnerDashboardPage" style={{ backgroundColor: 'white' }}>

              <div className="Topbar"> <BusownerTopBar/></div>
              <div className="flex">
              <div className="sidebar"> <BusownersideBar/></div>
                <div className="Dash"> <DashOwner/></div>            
                   
                </div>
<<<<<<< HEAD
                    
=======
>>>>>>> a1349782079c7ed00fbb5d22a3450fa5f3cfd1d6
         </div>

    )
}