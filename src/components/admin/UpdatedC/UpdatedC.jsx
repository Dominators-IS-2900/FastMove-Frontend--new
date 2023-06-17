// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Updated.css';

// const UpdatedC = () => {
//   const [busData, setBusData] = useState([]);

//   useEffect(() => {
//     fetchBusData();
//   }, []);

//   const fetchBusData = () => {
//     axios
//       .get('http://localhost:5000/UpdatedConductor')
//       .then(res => {
//         setBusData(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="card shadow mb-4">
//       <div className="card-header py-3"></div>
//       <div className="card-body">
//         <div className="table-responsive">
//           <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
//             <thead>
//               <tr>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {busData.map((bus, index) => (
//                 <tr key={bus.Bus_No}>
//                   <td>{bus.}</td>
//                   <td>{bus.}</td>
//                   <td>{bus.}</td>
//                   <td>{bus.}</td>
//                   <td>{bus.}</td>
//                   <td>{bus.}</td>
//                   <td>{bus.}</td>
//                   <td>
                    
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdatedC;