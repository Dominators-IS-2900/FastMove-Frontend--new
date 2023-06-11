
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActivityShedule=()=>{
  const [BusIncome,SetBusIncome]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/Activityschedule")
    .then(res=>{
      SetBusIncome(res.data)
      console.log(BusIncome);
    }).catch(
      (err)=>{
        console.log(err)
      }
    )
  },)

  return(
    <div class="card shadow mb-4">
        <div class="card-header py-3">            
        </div>
        <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
                <thead>
                    <tr>
                        <th>Payment_ID</th>
                        <th>Bus No</th> 
                        <th>User_ID</th>
                        <th>Amount</th>
                        <th>Date and Time</th>
                     </tr>
                </thead>
                    
                    <tbody>
                        {BusIncome.map(BusIncome => (
                            <tr key={BusIncome.Bus_No}>
                                <td>{BusIncome.Payment_ID}</td>
                                <td>{BusIncome.Bus_No}</td>
                                <td>{BusIncome.User_ID}</td>
                                <td>{BusIncome.Amount}.00 Lkr</td>
                                <td>{BusIncome.Transferred_at}</td>                                
                            </tr>
                    ))}
                    </tbody>        
                </table>
            </div>
        </div>
    </div>
  )
}

export default ActivityShedule;