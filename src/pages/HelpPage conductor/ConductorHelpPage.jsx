import React from 'react'
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/ConducortopBar/TopBar";
import ConductorHelp from '../../components/HelpConductor/ConductorHelp'


export default function Helpsheet() {
  return (

    
<>
        {/*This is Schedule page*/}
        <div>
        <div className="ScanPage">
        <div className="body">
        <div className="Topbar"> <TopBar/></div>
        <div className="flex">
        <div className="sidebar"> <SideBar/></div>
        <div class="container-fluid mr-5" style={{ width: '1100px' }}>
        <h2 class="black">Help</h2>

        <ConductorHelp/>

        </div>
        </div>
        </div>
        </div>
        </div></>
  )
}
