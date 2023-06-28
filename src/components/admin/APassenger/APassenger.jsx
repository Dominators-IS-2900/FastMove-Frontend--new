
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PassengerVerification = () => {
  const [passengers, setPassengers] = useState([]);


  useEffect(() => {
    fetchpassengerData();
  }, []);

  const fetchpassengerData = () => {
    axios
      .get('http://localhost:5000/passengerverification')
      .then(res => {
        setPassengers(res.data);
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

  const handleVerify = (Email) => {
    axios
      .post(`http://localhost:5000/passengerify/${Email}`)
      .then(res => {
        showMessage('Bus Owner verified successfully');
        fetchpassengerData();
      })
      .catch(err => {
        console.log(err);
        showMessage('Error verifying bus owner', true);
      });
  };

  const handleCancel = (Email) => {
    axios
      .delete(`http://localhost:5000/deleteverifypassenger/${Email}`)
      .then(res => {
        showMessage('Bus Owner deleted successfully');
        fetchpassengerData();
      })
      .catch(err => {
        console.log(err);
        showMessage('Error deleting bus owner', true);
      });
  };
  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
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
            {passengers.map((passenger) => (
                <tr key={passenger.Email}>
                  <td>{passenger.Email}</td>
                  <td>{passenger.FName}</td>
                  <td>{passenger.LName}</td>
                  <td>{passenger.Contact_No}</td>
                  <td>{passenger.address}</td>
                  <td className="nic-cell">
                    <a
                      href={passenger.ID_scancopy}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View NIC
                    </a>
                  </td>
                 
                  <td>
                    <div className="Button">
                       <button className="btn btn-primary equal-width" onClick={() => handleVerify(passenger.Email)}>
                        Verify
                      </button> 

                      
                    </div>
                    <span style={{ margin: "0 5px" }}> </span>
                    <div className="Button">
                      <button
                        className="btn btn-danger equal-width delete-button"
                        type="button"
                        onClick={() => handleCancel(passenger.Email)}
                      >
                        Cancel
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

export default PassengerVerification;
