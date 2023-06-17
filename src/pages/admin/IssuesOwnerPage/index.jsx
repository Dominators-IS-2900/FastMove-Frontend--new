import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import IssuesOwner from "./IssuesOwner";
import "./IssuesOwner.css";
export default function IssuesOwnerPage(){
    return(
        <div className="IssuesOwnerPage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <IssuesOwner/></div>            
                   
                </div>
         </div>

    )
}