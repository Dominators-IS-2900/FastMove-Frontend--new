//view the buses registered by the owner
import React from 'react'

export default function ViewBusescard() {
   
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
                            <th>Id</th>
                            <th>Bus No</th>
                            <th>Bus Route</th>
                            <th>Bus Type</th>
                            <th>Number of seats</th>
                            <th>Lisence renewed date</th>
                            <th>Date to update lisence</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>NP:4682</td>
                            <td>Colombo-Kandy</td>
                            <td>Semi-Luxury</td>
                            <td>54</td>
                            <td>2022/10/25</td>
                            <td>2023/10/24</td>
                            <th>
                                <button type="button" class="btn btn-primary ml-1">Update</button>
                                <br/> <br/> 
                                <button type="button" class="btn btn-warning ml-1">Delete</button>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
