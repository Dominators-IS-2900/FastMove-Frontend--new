import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import InfoBuses from "./InfoBuses";
import "./InfoBuses.css";
export default function InfoPage(){
    return(
        <div className="InfoPage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <InfoBuses/></div>            
                   
                </div>
         </div>

    )
}