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
        .get('http://localhost:5000/verifiedpassenger')
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
    const handleDelete = (UserID) => {
      axios
        .delete(`http://localhost:5000/deletepassenger/${UserID}`)
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
                <th  className="green-column" >Passenger ID</th>
                <th className="green-column">First Name</th>
                <th className="green-column">Last Name</th>
                <th className="green-column">Email</th>
                <th className="green-column">NIC</th>
                <th className="green-column">Phone Number</th>
                <th className="green-column">Address</th>
                <th className="green-column">Gender</th>
                <th className="green-column">Action</th>
              </tr>
            </thead>
            <tbody>
              {passengerData.map((passengerData) => (
                <tr key={passengerData.UserID}>
                  <td>{passengerData.UserID}</td>
                  <td>{passengerData.First_Name}</td>
                  <td>{passengerData.Last_Name}</td>
                  <td>{passengerData.Email}</td>
                  <td className="nic-cell">
                    <a href={passengerData.Nic_Image} target="_blank" rel="noopener noreferrer">
                      View NIC
                    </a>
                  </td>
                  <td>{passengerData.Phone_Number}</td>
                  <td>{passengerData.Address}</td>
                  <td>{passengerData.Gender}</td>
                  <td>
                    <div className="Button">
                      <button className="btn btn-danger equal-width delete-button" onClick={() => handleDelete(passengerData.UserID)}>
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
