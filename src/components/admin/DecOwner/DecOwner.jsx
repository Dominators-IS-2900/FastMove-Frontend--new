// DecOwner.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DecOwner = () => {
  const [ownerData, setOwnerData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Infoowner")
      .then(res => {
        setOwnerData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleRemove = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:5000/Infoowner/delete/${userId}`);
      console.log(response.data);
      // Handle success or perform any necessary UI updates
      toast.success("Owner removed successfully");
      setOwnerData(prevData => prevData.filter(owner => owner.UserID !== userId));
    } catch (error) {
      console.error('Error removing owner:', error);
      // Handle error
      toast.error("Failed to remove owner");
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
              {ownerData.map((owner) => (
                <tr key={owner.UserID}>
                  <td>{owner.UserID}</td>
                  <td>{owner.Name}</td>
                  <td>{owner.Email}</td>
                  <td>{owner.Contact_No}</td>
                  <td>
                    <div className="Button">
                      <button className="btn btn-danger equal-width" onClick={() => handleRemove(owner.UserID)}>
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default DecOwner;