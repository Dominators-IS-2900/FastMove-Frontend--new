import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ConductorEmergencyHandle=() =>{

        const [conductordata, setConductorData] = useState([]);
        const [formData, setFormData] = useState({
          selectedFile: null,
          selectedFileURL: null,
       
        });
      
        useEffect(() => {
          axios
            .get('http://localhost:5000/emergency')
            .then((res) => {
              setConductorData(res.data);
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }, []);
      
  return (
    <div className='tablestyle'>
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Veiw Conductor Emergency </h6>
            
        </div>
        <br/>
     

            <div class="card-body">
            <div class="table-responsive" >
            <table class="table table-bordered" id="dataTable" width="0%" cellspacing="0" >
            
        
    
            <br/>
                    <tbody>
                        <tr>
                            <th class="header">Emergency ID</th>
                            <th class="header">Emergency Type</th>
                            <th class="header">Bus Number</th>
                            <th class="header">Route No</th>
                            <th class="header">Ride ID</th>
                            <th class="header">Date </th>
                            <th class="header">Time</th>
                            <th class="header">Location</th>

                           
                        </tr>
                     
                    
                  {conductordata.map((conductor) => (
                  <tr key={conductor.date}>
                   <td>{conductor.emergency_id}</td>
                  <td>{conductor.emergency_type}</td>
                  <td>{conductor.bus_number}</td>
                  <td>{conductor.route_no}</td>
                  <td>{conductor.journey_id}</td>
                  <td>{conductor.date.split("T")[0]}</td>
                  <td>{conductor.time.split("T")[0]}</td>
                  <td>{conductor.location}</td>
                        </tr>
                   ))}            
                    </tbody>
                </table>
            </div>
        </div>
       
    </div>
    </div>
  )
}
export default ConductorEmergencyHandle;