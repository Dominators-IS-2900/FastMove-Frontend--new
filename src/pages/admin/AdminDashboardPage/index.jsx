import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import AdminDashobard from "./AdminDashobard";
import "./AdminDashboard.css"

export default function AdminDashboardPage(){
    return(
        <div className="Dashboard-page">

              <div className="Topbar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <AdminDashobard/></div>            
                   
                </div>
         </div>

    )
}