import React from 'react'

export default function Help() {
  return (
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Raise your questions here </h6>
            
        </div>
        <div class="card-body">
            <div class="table-responsive" >
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
                    <thead>
                        <tr>
                            <th>Contact us</th>
                            <th>Messages</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>
                            Approach us via:<br/><br/>
                            <i class='fas fa-phone-square-alt'></i> +94 11 269 1136<br/><br/>
                            <i class='fas fa-envelope'></i>  No:45,Main Street, Bambalapitiya<br/><br/>

                            </td>
                            
                            <th>
                            <textarea id="w3review" name="w3review" className="inquirybox" rows="6" cols="50"></textarea><br/>
                                <button type="button" class="btn btn-primary ml-1">Submit</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
