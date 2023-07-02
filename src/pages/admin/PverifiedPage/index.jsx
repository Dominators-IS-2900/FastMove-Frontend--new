import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import Passengerverified from "./Passengerverified";
import "./Passengerverified.css"
export default function FirstPage(){
    return(
        <div className="FirstPage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <Passengerverified/></div>            
                   
                </div>
         </div>

    )
}