import React from "react";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/ConducortopBar/TopBar";
import Profile from "./components/Profile"
import "./index.css"



export default function ProfilePage(){
    return(
        <div className="ProfilePage">
         <div className="body">
              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
                <div className="Dash"> <Profile/></div>            
                   
                </div>
         </div>
         </div>
    )
}