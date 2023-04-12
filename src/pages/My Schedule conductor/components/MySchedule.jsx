import React from 'react'
import ConductorSchedule from "../../../components/ConductorSchedule/conductorSchedule" 
import TopBar from '../../../components/ConducortopBar/TopBar';
import SideBar from '../../../components/sidebar/SideBar';
import "./MySchedule.css"


function MySchedule() {
    
  return (
    <>        {/*This is Schedule page*/}

              <div className="ScanPage">
              <div className="body">
              <div className="Topbar"> <TopBar/></div>
              <div className="flex">
              <div className="sidebar"> <SideBar/></div>
               
              <div class="container-fluid">
              <h2 class="black">Schedule</h2><div id="content" style={{ width: '1300px'}}>
              <ConductorSchedule />

              </div>
              </div>
              </div>
              </div>
              </div>
      
     </>
  )
}
export default  MySchedule;
