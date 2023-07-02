import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./conductorSchedule.css"

const ConductorSchedule=() =>{

        const [conductordata, setConductorData] = useState([]);
        const [formData, setFormData] = useState({
          selectedFile: null,
          selectedFileURL: null,
       
        });
      
        useEffect(() => {
          axios
            .get('http://localhost:5000/ConductorActivity')
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
            <h6 class="m-0 font-weight-bold text-primary">Veiw Conductor Schedule </h6>
            
        </div>
        <br/>
     

            <div class="card-body">
            <div class="table-responsive" >
            <table class="table table-bordered" id="dataTable" width="0%" cellspacing="0" >
            
        
    
            <br/>
                    <tbody>
                        <tr>
                            <th class="header">Ride ID</th>
                            <th class="header">Bus Number</th>
                            <th class="header">Route</th>
                            <th class="header"> Start Date & Start Time</th>
                            <th class="header">End Date & End Time</th>

                           
                        </tr>
                     
                    
                  {conductordata.map((conductor) => (
                  <tr key={conductor.busId}>
                  <td>{conductor.id}</td>
                  <td>{conductor.busId}</td>
                  <td>{conductor.routeId}</td>
                  <td>{conductor.startDateTime}</td>
                  <td>{conductor.endDateTime}</td>
            
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
export default ConductorSchedule; 
