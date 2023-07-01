// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { storage } from './firebase';

// const ViewBusescard = () => {
//   const [busData, setBusData] = useState([]);
//   const [isDeleted, setIsDeleted] = useState(false);

//   const handleViewFile = (fileUrl) => {
//     window.open(fileUrl, '_blank');
//   };

//   const handleUpdateFile = (busNo) => {
//     // Code for updating the file
//   };

//   const handleDeleteBus = (busNo) => {
//     const confirmDelete = window.confirm('Are you sure you want to Unregister this bus?');

//     if (confirmDelete) {
//       setIsDeleted(true);
//       setTimeout(() => {
//         setIsDeleted(false);
//       }, 3000);
//     }
//   };

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/busDetails")
//       .then((res) => {
//         setBusData(res.data);
//         console.log(busData);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div className="card shadow mb-4">
//       <div className="card-header py-3">
//         <h6 className="m-0 font-weight-bold text-primary">Registered Buses</h6>
//       </div>
//       <div className="card-body">
//         <div className="table-responsive">
//           <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
//             <thead>
//               <tr>
//                 <th>Bus No</th>
//                 <th>Bus Type</th>
//                 <th>Num of Seats</th>
//                 <th>Lisence Renew Date</th>
//                 <th>Bus Lisence</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {busData.map((bus) => (
//                 <tr key={bus.Bus_No}>
//                   <td>{bus.Bus_No}</td>
//                   <td>{bus.Bus_type}</td>
//                   <td>{bus.No_ofSeats}</td>
//                   <td>{bus.Bus_Lisence_expireDate.split('T')[0]}</td>
//                   <td>
//                     <button
//                       className="btn btn-primary"
//                       style={{
//                         borderRadius: '25px',
//                         backgroundColor: '#f1f1f1',
//                         color: 'black',
//                         fontSize: '14px',
//                         width: '90px',
//                         padding: '7px',
//                       }}
//                       onClick={() => handleViewFile(bus.BusLisence_scancopy)}
//                     >
//                       View file
//                     </button>
//                     <button
//                       className="btn btn-primary"
//                       style={{
//                         borderRadius: '25px',
//                         marginTop: '10px',
//                         fontSize: '14px',
//                         width: '90px',
//                         padding: '7px',
//                       }}
//                       onClick={() => handleUpdateFile(bus.Bus_No)}
//                     >
//                       Update file
//                     </button>
//                   </td>
//                   <td>
//                     <button
//                       className="btn btn-primary"
//                       style={{
//                         borderRadius: '25px',
//                         backgroundColor: '#560d0d',
//                         fontSize: '14px',
//                         width: '120px',
//                         padding: '7px',
//                       }}
//                       onClick={() => handleDeleteBus(bus.Bus_No)}
//                     >
//                       Unregister Bus
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           {isDeleted && (
//             <div className="alert alert-warning text-center mt-3" role="alert">
//               Sent to admin
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewBusescard;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from './firebase';

const ViewBusescard = () => {
  const [busData, setBusData] = useState([]);

  const handleViewFile = (fileUrl) => {
    window.open(fileUrl, '_blank');
  };

  const handleUpdateFile = (busNo, file) => {
    const formData = new FormData();
    formData.append('file', file);

    // Send the formData to the server using axios or any other method
    // You can include the busNo in the formData if needed

    // Example using axios
    axios
      .post('http://localhost:5000/upload', formData)
      .then((res) => {
        // Handle success
        toast.success('File updated successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
        });
      })
      .catch((error) => {
        // Handle error
        console.log(error);
        toast.error('Failed to update file', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
        });
      });
  };

  const handleDeleteBus = (busNo) => {
    const confirmDelete = window.confirm('Are you sure you want to Unregister this bus?');

    if (confirmDelete) {
      // Perform delete operation...

      toast.success('Your request to delete the bus has been sent to admin.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/busDetails')
      .then((res) => {
        setBusData(res.data);
        console.log(busData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Registered Buses</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>Bus No</th>
                <th>Bus Type</th>
                <th>Num of Seats</th>
                <th>Lisence Renew Date</th>
                <th>Bus Lisence</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {busData.map((bus) => (
                <tr key={bus.Bus_No}>
                  <td>{bus.Bus_No}</td>
                  <td>{bus.Bus_type}</td>
                  <td>{bus.No_ofSeats}</td>
                  <td>{bus.Bus_Lisence_expireDate.split('T')[0]}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      style={{
                        borderRadius: '25px',
                        backgroundColor: '#f1f1f1',
                        color: 'black',
                        fontSize: '14px',
                        width: '90px',
                        padding: '7px',
                      }}
                      onClick={() => handleViewFile(bus.BusLisence_scancopy)}
                    >
                      View file
                    </button>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleUpdateFile(bus.Bus_No, e.target.files[0])}
                      style={{ display: 'none' }}
                      id={`file-upload-${bus.Bus_No}`}
                    />
                    <label
                      htmlFor={`file-upload-${bus.Bus_No}`}
                      className="btn btn-primary"
                      style={{
                        borderRadius: '25px',
                        marginTop: '10px',
                        fontSize: '14px',
                        width: '90px',
                        padding: '7px',
                      }}
                    >
                      Update file
                    </label>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      style={{
                        borderRadius: '25px',
                        backgroundColor: '#560d0d',
                        fontSize: '14px',
                        width: '120px',
                        padding: '7px',
                      }}
                      onClick={() => handleDeleteBus(bus.Bus_No)}
                    >
                      Unregister Bus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default ViewBusescard;
