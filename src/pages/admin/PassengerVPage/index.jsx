import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import PassengerV from "./PassengerV";
import "./PassengerV.css"
export default function PassengerVPage(){
    return(
        <div className="PassengerVPage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <PassengerV/></div>            
                   
                </div>
         </div>

    )
}