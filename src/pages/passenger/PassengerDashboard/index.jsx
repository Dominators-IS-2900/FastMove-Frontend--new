import React from "react";
import Passengersidebar from "../../../components/passenger/Passengersidebar/PassengersideBar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import PassengerDashboard from "./PassengerDashboard";
import "./PassengerDashboard.css"
export default function PassengerDashboardPage(){
    return(
        <div className="Busfarepage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <Passengersidebar/></div>
                <div className="Dash"> <PassengerDashboard/></div>            
                   
                </div>
         </div>

    )
}