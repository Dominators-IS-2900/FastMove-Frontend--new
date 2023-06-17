// Ownervarification.jsx
import React, { useEffect, useState } from "react";
import axios from 'axios';


  const Ownervarification = () => {
    const [owners, setOwners] = useState([]);
    useEffect(()=>{
      axios.get("http://localhost:5000/Infoowner")
      .then(res=>{
        setOwners(res.data) 
        console.log (owners);
        
      }).catch(
      (err)=>{
        console.log(err)
      }
    )
    },)
  const handleVerify = async (userId) => {
    try {
      const response = await axios.post(`http://localhost:5000/Infoowner/verify/${userId}`);
      console.log(response.data);
      // Handle success or perform any necessary UI updates
      alert("Verified successfully");
    } catch (error) {
      console.error('Error verifying owner:', error);
      // Handle error
    }
  };

  const handleCancel = async (userId) => {
    try {
      const response = await axios.post(`http://localhost:5000/Infoowner/cancel/${userId}`);
      console.log(response.data);
      // Handle success or perform any necessary UI updates
      alert("Deleted successfully");
      setOwners(prevOwners => prevOwners.filter(owner => owner.UserID !== userId));
    } catch (error) {
      console.error('Error canceling owner:', error);
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
                <th>UserID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {owners.map((owners) => (
                <tr key={owners.UserID}>
                  <td>{owners.UserID}</td>
                  <td>{owners.Name}</td>
                  <td>{owners.Email}</td>
                  <td>{owners.Contact_No}</td>
                  <td>
                    <div className="Button">
                     
                      <button className="btn btn-primary equal-width" onClick={() => handleVerify(owners.UserID)}>
                        Verify
                      </button>
                      <br></br> <br></br> <br></br>
                      <button className="btn btn-danger equal-width" onClick={() => handleCancel(owners.UserID)}>
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

export default Ownervarification;

