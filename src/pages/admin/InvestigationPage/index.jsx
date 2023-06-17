import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import Investigation from "./Investigation";
import "./Investigation.css"
export default function InvestigationPage(){
    return(
        <div className="InvestigationPage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <Investigation/></div>            
                   
                </div>
         </div>

    )
}