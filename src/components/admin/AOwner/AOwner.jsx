
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Ownervarification = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    fetchOwners();
  }, []);

  const fetchOwners = () => {
    axios
      .get('http://localhost:5000/ownerverification')
      .then(res => {
        setOwners(res.data);
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
      .post(`http://localhost:5000/ownerverify/${Email}`)
      .then(res => {
        showMessage('Bus Owner verified successfully');
        fetchOwners();
      })
      .catch(err => {
        console.log(err);
        showMessage('Error verifying bus owner', true);
      });
  };

  const handleCancel = (Email) => {
    axios
      .delete(`http://localhost:5000/deleteverifyowner/${Email}`)
      .then(res => {
        showMessage('Bus Owner deleted successfully');
        fetchOwners();
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
              {owners.map((owner) => (
                <tr key={owner.Email}>
                  <td>{owner.Email}</td>
                  <td>{owner.FName}</td>
                  <td>{owner.LName}</td>
                  <td>{owner.Contact_No}</td>
                  <td>{owner.address}</td>
                  <td className="nic-cell">
                    <a href={owner.ID_scancopy} target="_blank" rel="noopener noreferrer">
                      View NIC
                    </a>
                  </td>
                  <td>
                    <div className="Button">
                      <button className="btn btn-primary equal-width" onClick={() => handleVerify(owner.Email)}>
                        Verify
                      </button>
                      <br></br><br></br>
                      <button className="btn btn-danger equal-width delete-button" onClick={() => handleCancel(owner.Email)}>
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


