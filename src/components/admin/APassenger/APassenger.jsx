import React, { useState, useEffect } from "react";
import "./APaseenger.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PassengerVerification = () => {
  const [passengers, setPassengers] = useState({});

  useEffect(() => {
    fetchpassengerData();
  }, []);

  const  fetchpassengerData = () => {
    axios.get("http://localhost:5000/verification")
      .then(res => {
        setPassengers(res.data);
        console.log(res.data);
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

  const handleVerify = async (UserID) => {
    try {
      await axios.post(`http://localhost:5000/passengerverify/${UserID}`)
        .then(res => {
          showMessage('Passenger verified successfully');
          // Update the owners data
          fetchpassengerData();
        });
    } catch (error) {
      console.error('Error verifying Passenger:', error);
      showMessage('Error verifying Passenger', true);
      // Handle error
    }
  };
  
  const handleCancel = (UserID) => {
    axios
      .delete(`http://localhost:5000/deleteverifypa/${UserID}`)
      .then((res) => {
        showMessage("Passenger deleted successfully");
        setPassengers((prevPassengers) => {
          const updatedPassengers = { ...prevPassengers };
          delete updatedPassengers[UserID];
          return updatedPassengers;
        });
      })
      .catch((err) => {
        console.log(err);
        showMessage("Error deleting row", true);
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
                <th className="green-column">Passenger ID</th>
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
              {Object.values(passengers).map((passenger) => (
                <tr key={passenger.UserID}>
                  <td>{passenger.UserID}</td>
                  <td>{passenger.First_Name}</td>
                  <td>{passenger.Last_Name}</td>
                  <td>{passenger.Email}</td>
                  <td className="nic-cell">
                    <a
                      href={passenger.Nic_Image}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View NIC
                    </a>
                  </td>
                  <td>{passenger.Phone_Number}</td>
                  <td>{passenger.Address}</td>
                  <td>{passenger.Gender}</td>
                  <td>
                    <div className="Button">
                       <button className="btn btn-primary equal-width" onClick={() => handleVerify(passenger.UserID)}>
                        Verify
                      </button> 

                      
                    </div>
                    <span style={{ margin: "0 5px" }}> </span>
                    <div className="Button">
                      <button
                        className="btn btn-danger equal-width delete-button"
                        type="button"
                        onClick={() => handleCancel(passenger.UserID)}
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
