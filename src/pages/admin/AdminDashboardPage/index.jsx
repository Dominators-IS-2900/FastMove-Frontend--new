import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdmintopBar";
import ADashBoard from "./AdminDashobard";
import "./AdminDashboard.css"

export default function AdminDashboardPage(){
    return(
        <div className="Dashboard-page">

              <div className="Topbar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <ADashBoard/></div>            
                   
                </div>
         </div>

    )
}