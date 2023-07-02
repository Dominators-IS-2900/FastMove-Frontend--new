import React, { useEffect, useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConductorVerification = () => {
  const [conductors, setConductors] = useState([]);

  useEffect(() => {
    fetchConductors();
  }, []);

  const fetchConductors = () => {
    axios
      .get('http://localhost:5000/conductorverification')
      .then(res => {
        setConductors(res.data);
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

  const handleVerify = (email) => {
    axios
      .post(`http://localhost:5000/conductorverify/${email}`)
      .then(res => {
        showMessage('Conductor verified successfully');
        fetchConductors();
      })
      .catch(err => {
        console.log(err);
        showMessage('Error verifying bus owner', true);
      });
  };

  const handleCancel = (email) => {
    axios
      .delete(`http://localhost:5000/deleteverifyconductor/${email}`)
      .then(res => {
        showMessage('Conductor deleted successfully');
        fetchConductors();
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
              {conductors.map((conductor) => (
                <tr key={conductor.Email}>
                  <td>{conductor.Email}</td>
                  <td>{conductor.FName}</td>
                  <td>{conductor.LName}</td>
                  <td>{conductor.Contact_No}</td>
                  <td>{conductor.address}</td>
                  <td className="nic-cell">
                    <a href={conductor.ID_scancopy} target="_blank" rel="noopener noreferrer">
                      View NIC
                    </a>
                  </td>
                  <td>
                    <div className="Button">
                      <button className="btn btn-primary equal-width" onClick={() => handleVerify(conductor.Email)}>
                        Verify
                      </button>
                      <br /><br />
                      <button className="btn btn-danger equal-width delete-button" onClick={() => handleCancel(conductor.Email)}>
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

export default ConductorVerification;
