import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PVerified.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  const PVerified = () => {
    const [passengerData,setPassengerData] = useState([]);
  
    useEffect(() => {
      fetchpassengerData();
    }, []);
  
    const fetchpassengerData = () => {
      axios
        .get('http://localhost:5000/passengertoget')
        .then(res => {
          setPassengerData(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    const showMessage = (message, isError = false) => {
      if (isError) {
        toast.error(message, {
          className: 'toast-error',
        });
      } else {
        toast.success(message);
      }
    };
  
    const handleDelete = (Email) => {
      axios
        .delete(`http://localhost:5000/deletetopassenger/${Email}`)
        .then(res => {
          // Display success message
          showMessage('Passenger deleted successfully');
  
          // Fetch updated passenger data
          fetchpassengerData();
        })
        .catch(err => {
          console.log(err);
          showMessage('Error deleting row', true);
        });
    };
  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
              <th className="green-column">Email</th>
                <th className="green-column">First Name</th>
                <th className="green-column">Last Name</th>
                <th className="green-column">Contact No</th>
                <th className="green-column">Address</th>
                <th className="green-column">NIC Scan Copy</th>
                <th className="green-column">Action</th>
              </tr>
            </thead>
            <tbody>
              {passengerData.map((passengerData) => (
                <tr key={passengerData.Email}>
                  <td>{passengerData.Email}</td>
                  <td>{passengerData.FName}</td>
                  <td>{passengerData.LName}</td>
                  <td>{passengerData.Contact_No}</td>
                  <td>{passengerData.address}</td>
                  <td className="nic-cell">
                    <a href={passengerData.ID_scancopy} target="_blank" rel="noopener noreferrer">
                      View NIC
                    </a>
                  </td>
                  
                  <td>
                    <div className="Button">
                      <button className="btn btn-danger equal-width delete-button" onClick={() => handleDelete(passengerData.Email)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default PVerified;
