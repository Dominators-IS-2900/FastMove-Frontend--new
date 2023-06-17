import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PVerified.css';

const PVerified = () => {
  const [passengerData, setPassengerData] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5000/verifiedpassenger")
    .then(res=>{
      setPassengerData(res.data) 
      console.log (passengerData);
      
    }).catch(
    (err)=>{
      console.log(err)
    }
  )
  },)
  const handleDelete = async (UserID) => {
    try {
      const response = await axios.delete(`/deleteverifypa/ ${UserID}`); // Updated API endpoint
      console.log(response.data);
      alert('Passenger deleted successfully');
    } catch (error) {
      console.error('Error deleting passenger:', error);
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
              {passengerData.map((passengerData) => (
                <tr key={passengerData.UserID}>
                  <td>{passengerData.UserID}</td>
                  <td>{passengerData.First_Name}</td>
                  <td>{passengerData.Last_Name}</td>
                  <td>{passengerData.Email}</td>
                  <td>{passengerData.Nic}</td>
                  <td>{passengerData.Phone_Number}</td>
                  <td>{passengerData.Address}</td>
                  <td>{passengerData.Gender}</td>
                  <td>
                    <div className="Button">
                      <button className="btn btn-danger equal-width" onClick={() => handleDelete(passengerData.UserID)}>
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
    </div>
  );
};

export default PVerified;
