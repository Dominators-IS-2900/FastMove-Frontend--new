// import React from 'react'

// export default function BusFare() {
//   return (
  
//         <div class="card shadow mb-4">
            
//             <div class="card-body">
//                 <div class="table-responsive" >
//                     <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
      
                        
//                     <thead>
//                             <tr>
//                                 <th>Route ID</th>
//                                 <th>Start Point</th>
//                                 <th>End Point</th>
//                                 <th>Distance</th>
                                
//                             </tr>
//                         </thead>
    
                        
//                         <tbody>
//                             <tr>
//                                 <td></td>
//                                 <td> </td>
//                                 <td> </td>
//                                 <td> </td>  
                                    
                    
//                             </tr>
                           
//                             <tr>
                                
//                                 <td></td>
//                                 <td> </td>
//                                 <td> </td>
//                                 <td> </td>  
                                
                                
                              
                              
                                
//                             </tr>
//                             <tr>
//                                 <td></td>
//                                 <td> </td>
//                                 <td> </td>
//                                 <td> </td>
//                             </tr>
//                             <tr>
                          
//                                 <td> </td>
//                                 <td> </td>
//                                 <td></td>
//                                 <td> </td>
//                             </tr>
                            
                            
//                         </tbody>
//                     </table>
//                     <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
      
                        
//                     <thead>
//                             <tr>
//                                 <th>Route ID</th>
//                                 <th>Distance</th>
//                                 <th>Price</th>
                               
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td></td>
//                                 <td> </td>
//                                 <td> </td>
                                
                                    
                    
//                             </tr>
                           
//                             <tr>
                                
//                                 <td></td>
//                                 <td> </td>
//                                 <td> </td>
//                             </tr>
//                             <tr>
//                                 <td></td>
//                                 <td> </td>
//                                 <td> </td>
                             
//                             </tr>
//                             <tr>
                          
//                                 <td> </td>
//                                 <td> </td>
//                                 <td> </td>
                               
//                             </tr>
                            
                            
//                         </tbody>

//     </table>
//     <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0" >
      
                        
//       <thead>
//               <tr>
//                   <th>Route ID</th>
//                   <th>Start Point</th>
//                   <th>End Point</th>
//                   <th>Bus Fare</th>
                 
//               </tr>
//           </thead>
//           <tbody>
//               <tr>
//                   <td></td>
//                   <td> </td>
//                   <td></td>
//                   <td> </td>
//               </tr>
             
//               <tr>
                  
//                   <td></td>
//                   <td> </td>
//                   <td></td>
//                   <td> </td>
//               </tr>
//               <tr>
//                   <td></td>
//                   <td> </td>
//                  <td></td>
//                  <td> </td>
//               </tr>
//               <tr>
            
//                   <td> </td>
//                   <td> </td>
//                   <td></td>
//                   <td> </td>
//               </tr>
              
              
//           </tbody>

// </table>

//                 </div>
//             </div>
//         </div>
//       )
//     }
import React from 'react';

export default function BusFare() {
  // Define the fare rate per kilometer
  const fareRate = 0.5;

  // Define the route data
  const routes = [
    { id: 1, startPoint: 'Kandy', endPoint: 'Pilimathalawa', distance: 10 },
    { id: 2, startPoint: 'Kandy', endPoint: 'Kadugannawa', distance: 15 },
    // Add more routes here
  ];

  // Calculate the fare for each route
  const routeFares = routes.map((route) => ({
    id: route.id,
    distance: route.distance,
    fare: route.distance * fareRate,
  }));

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>Route ID</th>
                <th>Start Point</th>
                <th>End Point</th>
                <th>Distance</th>
                <th>Bus Fare</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route) => (
                <tr key={route.id}>
                  <td>{route.id}</td>
                  <td>{route.startPoint}</td>
                  <td>{route.endPoint}</td>
                  <td>{route.distance}</td>
                  <td>{route.distance * fareRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
