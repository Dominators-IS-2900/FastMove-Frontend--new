import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import IssuesPassenger from "./IssuesPassenger";
import "./IssuesPassenger.css";
export default function IssuesPPage(){
    return(
        <div className="IssuesOwnerPage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <IssuesPassenger/></div>            
                   
                </div>
         </div>

    )
}