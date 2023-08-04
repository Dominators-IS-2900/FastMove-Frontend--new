import React from "react";
import SideBar from "../../../components/conductor/sidebar/SideBar";
import Ticket from "./TicketGenerationPage"



export default function QRGenerator(){
    return(
        <div className="BusRegPage">
            <div className="body">
              
              
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
              <h2 style={{ color: "black", marginTop: "10px", marginLeft: "50px" }}>QR Generate</h2><br/><br/>
                <div className="Dash"> <Ticket/></div>            
                   
                </div>
         </div>
        </div>

    )
}