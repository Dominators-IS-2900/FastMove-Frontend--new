
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from '../../../config/firebase';
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const ViewBusescard = () => {
  const [busData, setBusData] = useState([]);
  const [internalFileUrl, setInternalFileUrl] = useState('');
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [RouteData,SetRouteData]=useState([]);

  const handleViewFile = () => {
    
    window.open(busData[0].BusLisence_scancopy
      , '_blank');
  };

  const handleUpdateFile = (busNo, file) => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(`${busNo}/${file.name}`);

    fileRef
      .put(file)
      .then(() => fileRef.getDownloadURL())
      .then((url) => {
        // Update the busData with the URL or send the URL to the server
        const updatedBusData = busData.map((bus) => {
          if (bus.Bus_No === busNo) {
            return { ...bus, Bus_License: url };
          }
          return bus;
        });
        setBusData(updatedBusData);
        setInternalFileUrl(url); // Set the internal file URL
        const confirmMessage = window.confirm('Confirm updating Bus License?');
        if (confirmMessage) {
          // Call the updatebuslisence endpoint
          axios
            .post('api/busowner/updateLicense', { busNo, url })
            .then((response) => {
              console.log('license sent to back end')
              // Handle the response or show success message
              console.log(response.data);
            })
            .catch((error) => {
              // Handle the error or show error message
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
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
    axios.get('/api/busowner/getbus')
      .then((res) => {
        setBusData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/BusRoutes')
  //     .then((res) => {
  //       SetRouteData(res.data);
  //       console.log(RouteData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleViewSchedule = () => {
    setShowScheduleModal(true);
  };

  const handleCloseModal = () => {
    setShowScheduleModal(false);
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Registered Buses</h6>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>Bus No</th>
                <th>Bus Type</th>
                <th>Number of Seats</th>
                <th>License Renew Date</th>
                <th>Bus License</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {busData.map((bus) => (
                <tr key={bus.Bus_No}>
                  <td>{bus.Bus_No}</td>
                  <td>{bus.Bus_type}</td>
                  <td>{bus.No_ofSeats}</td>
                  <td>{bus.Bus_Lisence_expireDate.split('T')[0]|| ""}</td>

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
                      onClick={() => handleViewFile()}
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
                        backgroundColor: '#f1f1f1',
                        color: 'black',
                        fontSize: '14px',
                        width: '120px',
                        padding: '7px',
                      }}
                      onClick={handleViewSchedule}
                    >
                      View Schedule
                    </button>

                    <button
                      className="btn btn-primary"
                      style={{
                        marginTop: '10px',
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

      {showScheduleModal && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Bus Schedule</h5>
                <button type="button" className="close" onClick={handleCloseModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Add your schedule content here */}
                <table>
                  <tr>
                  <th>Bus Number</th>
                  <th>Route</th>
                  <th>Start from</th>
                  <th>Start time</th>
                  <th>End at</th>
                  <th>End time</th>
                 
                  </tr>

                  {RouteData.map((route)=>(
                    <tr key={route.Bus_No}>
                    <td>{route.Bus_No}</td>
                    <td>{route.Route}</td>
                    <td>{route.Start}</td>
                    <td>{route.StartTime}</td>
                    <td>{route.End}</td>
                    <td>{route.EndTime}</td>
                    </tr>

                  ))}
                  
                                    
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleCloseModal}
                style={{
                  borderRadius: '25px',
                  fontSize: '14px',
                  width: '90px',
                  padding: '7px',
                }}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBusescard;
