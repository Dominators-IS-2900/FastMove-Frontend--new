import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import 'react-toastify/dist/ReactToastify.css';
import DecCard from "./DecCard";
import "./DecCard.css"
export default function DecOwnerPage(){
    return(
        <div className="DecOwnerPage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <DecCard/></div>            
                   
                </div>
         </div>

    )
}