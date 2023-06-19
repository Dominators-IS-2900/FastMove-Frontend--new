import React from 'react';
import './ConductorUpdate.css';




 function ConductorUpdate() {
    return (
      <div className="tablestyle">
  
          {/* table crad*/}
      <div class="card shadow mb-4">
            <div class="card-header py-3">
            
                <h6 class="m-0 font-weight-bold text-primary">   Update Conductor Information </h6>
  
             </div>
        {/* update profile form */}  
        <form>   
                  <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td> Conductor Name</td>
                                    <td> <input type="text" class="inputfield" name="cname" id="cname"  required /></td>
  
                                </tr>
                               
                                <tr>
                                    <td>2</td>
                                    <td>NIC Copy</td>
                                    
  
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td> Contact Number</td>
                                    <td> <input type="number" class="inputfield" name="pnumber" id="pnumber" required /></td>
  
                                </tr>
                               
                                <tr>
                                    <td>4</td>
                                    <td> Email</td>
                                    <td> <input type="text" class="inputfield" name="email" id="email" required /></td>
  
                                </tr>
                                
                                
  
                            </tbody>
                        </table>
                        {/*button*/}
                                 <div class="btn-group">
                                 <button type="button" class="btn edit" id="myButton">SAVE</button>
                                
                                 </div>
                     </div>
                </div>
           </form>   
          </div>       
      </div>
    )
  }

  export default ConductorUpdate;