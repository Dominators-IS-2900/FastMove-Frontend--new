import React, { useEffect, useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ownervarification = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    fetchOwnersData();
  }, []);

  const fetchOwnersData = () => {
    axios.get("http://localhost:5000/ownerverification")
      .then(res => {
        setOwners(res.data);
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
      await axios.post(`http://localhost:5000/ownerverify/${UserID}`)
        .then(res => {
          showMessage('Bus Owner verified successfully');
          // Update the owners data
          fetchOwnersData();
        });
    } catch (error) {
      console.error('Error verifying bus owner:', error);
      showMessage('Error verifying bus owner', true);
      // Handle error
    }
  };

  const handleCancel = (UserID) => {
    axios.delete(`http://localhost:5000/deleteverifyOw/${UserID}`)
      .then(res => {
        showMessage('Bus Owner deleted successfully');
        // Update the owners data
        fetchOwnersData();
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
                <th>UserID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact No</th>
                <th>Account NO</th>
                <th>NIC Scan Copy</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {owners.map((owner) => (
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
                      <button className="btn btn-primary equal-width" onClick={() => handleVerify(owner.UserID)}>
                        Verify
                      </button>
                    </div>
                    <span style={{ margin: '0 5px' }}></span>
                    <div className="Button">
                      <button className="btn btn-danger equal-width delete-button" type="button" onClick={() => handleCancel(owner.UserID)}>
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

export default Ownervarification;

