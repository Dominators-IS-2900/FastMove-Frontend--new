import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DecOwner.css';
const DecOwner = () => {
  const [ownerData, setOwnerData] = useState([]);

  useEffect(() => {
    fetchOwnerData();
  }, []);

  const fetchOwnerData = () => {
    axios
      .get('http://localhost:5000/Infoowner')
      .then(res => {
        setOwnerData(res.data);
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
      .delete(`http://localhost:5000/deleteowner/${UserID}`)
      .then(res => {
        // Display success message
        showMessage('Bus Owner deleted successfully');

        // Fetch updated passenger data
        fetchOwnerData();
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
                <th  className="green-column">UserID</th>
                <th  className="green-column">Name</th>
                <th  className="green-column">Email</th>
                <th  className="green-column">Contact No</th>
                <th  className="green-column">Account NO</th>
                <th  className="green-column">NIC Scan Copy</th>
                <th  className="green-column">Action</th>
              </tr>
            </thead>
            <tbody>
              {ownerData.map((owner) => (
                <tr key={owner.UserID}>
                  <td>{owner.UserID}</td>
                  <td>{owner.Name}</td>
                  <td>{owner.Email}</td>
                  <td>{owner.Contact_No}</td>
                  <td>{owner.Account_No}</td>
                  <td className="nic-cell">
                    <a href={owner.NIC_scancopy} target="_blank" rel="noopener noreferrer">
                      View NIC
                    </a>
                  </td>
                  <td>
                    <div className="Button">
                      <button className="btn btn-danger equal-width delete-button" onClick={() => handleDelete(owner.UserID)}>
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

export default DecOwner;
