import React from 'react'
import "./conductorSchedule.css"

export default function ConductorSchedule() {
  return (
    <div className='tablestyle'>
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Veiw Conductor Schedule </h6>
            
        </div>
        <br/>
     
      <div>
      <label>Conductor Id:</label>
      <input type="number" class="input" />
      <label>Date:</label>
      <input type="Date" class="input" />
      </div>
      
            <div class="card-body">
            <div class="table-responsive" >
            <table class="table table-bordered" id="dataTable" width="0%" cellspacing="0" >
            
        
    
            <br/>
                    <tbody>
                        <tr>
                            <th class="header">Bus Number</th>
                            <th class="header">Route Number</th>
                            <th class="header">Route</th>
                            <th class="header" >Ride ID</th>
                            <th class="header">Date</th>
                            <th class="header">Time(Arrival time-Depature time)</th>

                           
                        </tr>
                        <tr>
                            <td>1000</td>
                            <td>255</td>
                            <td>Mount Lavinia to Kottawa </td>
                            <td>26</td>
                            <td>01/04/2023 </td>
                            <td>2.00pm-3.00pm </td>
                            

                        </tr>
                        <tr>

                            <td>1000</td>
                            <td>150</td>
                            <td>Ambalangoda to Galle</td>
                            <td>25</td>
                            <td>01/04/2023 </td>
                            <td>5.00pm-6.00pm </td>
                            
                        </tr>            
                    </tbody>
                </table>
            </div>
        </div>
       
    </div>
    </div>
  )
}
