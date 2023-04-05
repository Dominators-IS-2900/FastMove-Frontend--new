import React from "react";
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../components/AdmintopBar/AdmintopBar";
import Profile from "../../components/Profile/Profile";
import ProfilePage from "./ProfilePage";
import "./ProfilePage.css"

export default function ProfilePP(){
    return(
        <div className="PassengerVerification">

            <div className="AdminTopBar"> <AdminTopBar/></div>
            <div className="flex">
                <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <ProfilePage/></div>                   
            </div>
         </div>
    )
}