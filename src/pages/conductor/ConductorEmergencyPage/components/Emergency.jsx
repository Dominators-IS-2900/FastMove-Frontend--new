import React  from 'react';
import ConductorEmergencyCard from "../../../../components/conductor/ConductorEmergencyCard/ConductorEmergency"
import "./Emergency.css"
        
function Emergency() {

    return (
    
            <>
                <div class="container-fluid">  
                <h2 class="black">Inform Emergency </h2><div id="content" style={{ width: '1100px'  }}>
                 <ConductorEmergencyCard/>             
                </div>
                </div>
                </>
      
    )
}

export default Emergency;