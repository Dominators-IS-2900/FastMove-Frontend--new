//view the buses registered by the owner

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewBusescard = () => {
    const [busData, setBusData] = useState([]);

 

  useEffect(()=>{
    axios.get("http://localhost:5000/busDetails")
    .then(res=>{
      setBusData(res.data) 
      console.log (busData);
      
    }).catch(
    (err)=>{
      console.log(err)
    }
  )
  },[])

  return (
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Registered Buses </h6>
            
        </div>
        <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
                <thead>
                    <tr>
                        <th>Bus No</th>
                        <th>Bus Type</th>
                        <th>Num of Seats</th>
                        <th>Lisence Renew Date</th>
                     </tr>
                </thead>
                    
                    <tbody>
                        {busData.map(bus => (
                            <tr key={bus.Bus_No}>
                                <td>{bus.Bus_No}</td>
                                <td>{bus.Bus_type}</td>
                                <td>{bus.No_ofSeats}</td>
                                <td>{bus.Bus_Lisence_expireDate}</td>
                            </tr>
                    ))}
                    </tbody>        
                </table>
            </div>
        </div>
    </div>
  )
}

export default ViewBusescard;
