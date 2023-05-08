import React from "react";
import AdminSidebar from "../../../components/admin/Adminsidebar/AdminSidebar";
import AdminTopBar from "../../../components/admin/AdmintopBar/AdminTopBar";
import Profile from "./Profile"
import "./Profile.css"

export default function ProfilePage(){
    return(
        <div className="PassengerVerification">

            <div className="AdminTopBar"> <AdminTopBar/></div>
            <div className="flex">
                <div className="Adminsidebar"> <AdminSidebar/></div>
                <div className="Dash"> <Profile/></div>                   
            </div>
         </div>
    )
}