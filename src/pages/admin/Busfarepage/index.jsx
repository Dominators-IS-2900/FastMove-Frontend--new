import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import Busfare from "./Busfare";
import "./Busfare.css"
export default function Busfarepage(){
    return(
        <div className="Busfarepage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <Busfare/></div>            
                   
                </div>
         </div>

    )
}