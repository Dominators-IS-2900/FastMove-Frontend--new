import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import PassengerVerification from "./PassengerVerification";
import "./PassengerVerification.css"
export default function PassengerVerificationPage(){
    return(
        <div className="PassengerVerification">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <PassengerVerification/></div>            
                   
                </div>
         </div>

    )
}