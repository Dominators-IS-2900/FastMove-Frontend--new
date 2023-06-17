import React, { useState, useEffect } from 'react';
import './APaseenger.css';
import axios from 'axios';

const PassengerVerification = () => {
  const [passengers, setPassengers] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/verification")
    .then(res=>{
      setPassengers(res.data) 
      console.log (passengers);
      
    }).catch(
    (err)=>{
      console.log(err)
    }
  )
  },[1])
 


  const handleVerify = async (UserID) => {
    try {

       await axios.get(`http://localhost:5000/verficated/${UserID}`).then(
        res=>{
          console.log(res.data)
        }
       )
      // const response = await axios.post('/passengerverify', (response.data)); // Updated API endpoint and payload
      // console.log(response.data);
      // alert('Passenger verified successfully');
    } catch (error) {
      console.error('Error verifying passenger:', error);
      // Handle error
    }
  };

  const handleCancel = async () => {
    try {
      const response = await axios.delete(`/deleteverifypa/${UserID}`); // Updated API endpoint
      console.log(response.data);
      alert('Passenger canceled successfully');
    } catch (error) {
      console.error('Error canceling passenger:', error);
      // Handle error
    }
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>NIC</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {passengers.map(passengers=> (
                <tr key={passengers.UserID}>
                  <td>{passengers.UserID}</td>
                  <td>{passengers.First_Name}</td>
                  <td>{passengers.Last_Name}</td>
                  <td>{passengers.Email}</td>
                  <td>{passengers.Nic_Image}</td>
                  <td>{passengers.Phone_Number}</td>
                  <td>{passengers.Address}</td>
                  <td>{passengers.Gender}</td>
                  <td>
                    <div className="Button">
                      <button className="btn btn-primary equal-width" onClick={() => handleVerify(passengers.UserID)}>
                        Verify
                      </button>
                    </div>
                    <span style={{ margin: '0 5px' }}></span>
                    <div className="Button">
                      <button className="btn btn-danger equal-width" onClick={() => handleCancel(passengers.UserID)}>
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
    </div>
  );
};

export default PassengerVerification;
