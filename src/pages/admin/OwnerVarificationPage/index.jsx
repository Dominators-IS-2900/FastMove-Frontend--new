import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import Ownervarification from "./components/Ownervarification";
import "./components/Ownervarification.css"
export default function OwnerVarificationPage(){
    return(
        <div className="Ownervarification">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <Ownervarification/></div>            
                   
                </div>
         </div>

    )
}