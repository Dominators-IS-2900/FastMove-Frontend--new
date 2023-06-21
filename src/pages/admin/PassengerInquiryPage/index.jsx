import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import PassengerInquiry from "./PassengerInquiry";
import "./PassengerInquiry.css";
export default function PassengerInquiryPage(){
    return(
        <div className="PassengerInquiryPage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <PassengerInquiry/></div>            
                   
                </div>
         </div>

    )
}