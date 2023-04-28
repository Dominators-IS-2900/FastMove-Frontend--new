import React from "react";
import Adminsidebar from "../../components/Adminsidebar/Adminsidebar";
import AdminTopBar from "../../components/AdmintopBar/AdmintopBar";
import Detailsowner from "../../components/Detailsowner/Detailsowner";
import DetailsownerPage from "./DetailsownerPage";
import "./DetailsownerPage.css"

export default function detailsowner(){
    return(
        <div className="DetailsownerPage">

              <div className="AdminTopBar"> <AdminTopBar/></div>
              <div className="flex">
              <div className="Adminsidebar"> <Adminsidebar/></div>
                <div className="Dash"> <DetailsownerPage/></div>            
                   
                </div>
         </div>

    )
}