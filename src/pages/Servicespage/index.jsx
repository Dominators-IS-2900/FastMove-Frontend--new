import React from "react";
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../components/AdmintopBar/AdmintopBar";
import ServicesAdmin from "../../components/ServicesAdmin/ServicesAdmin";
import Servicespage from "./Servicespage";
import "./Servicespage.css"
export default function Servicespageinn(){
    return(
        <div className="Busfarepage">
              <div className="AdminTopBar"> <AdminTopBar/></div>        
              <div className="flex">
                <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <Servicespage/></div>            
              </div>
        </div>

    )
}