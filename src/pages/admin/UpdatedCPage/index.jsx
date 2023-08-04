import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import UpdatedConductor from "./UpdatedConductor";
import "./UpdatedConductor.css";
export default function UpdatedCPage(){
    return(
        <div className="UpdatedCPage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <UpdatedConductor/></div>            
                   
                </div>
         </div>

    )
}