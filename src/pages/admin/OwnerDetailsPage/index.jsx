import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdmintopBar";
import DetailsownerPage from "./OwnerDetails";
import "./OwnerDetails.css"

export default function OwnerDetailsPage(){
    return(
        <div className="DetailsownerPage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <DetailsownerPage/></div>            
                   
                </div>
         </div>

    )
}