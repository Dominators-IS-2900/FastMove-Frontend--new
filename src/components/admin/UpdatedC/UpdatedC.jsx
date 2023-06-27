import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdatedC.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdatedC = () => {
  const [conductorData, setConductorData] = useState([]);

  useEffect(() => {
    fetchConductorData();
  }, []);

  const fetchConductorData = () => {
    axios
      .get('http://localhost:5000/verifiedconductor')
      .then(res => {
        setConductorData(res.data);
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
  const handleDelete = (conductorId) => {
    axios
      .delete(`http://localhost:5000/deleteconductor/${conductorId}`)
      .then(res => {
        // Display success message
        showMessage('Conductor deleted successfully');

        // Fetch updated passenger data
        fetchConductorData();
      })
      .catch(err => {
        console.log(err);
        showMessage('Error deleting row', true);
      });
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3"></div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th className="green-column">Conductor ID</th>
                <th className="green-column">User Name</th>
                <th className="green-column">Password</th>
                <th className="green-column">Mobile Number</th>
                <th className="green-column">Email</th>
                <th className="green-column">NIC Scan Copy</th>
                <th className="green-column">Conductor License</th>
                <th className="green-column">Action</th> 
              </tr>
            </thead>
            <tbody>
              {conductorData.map(conductor => (
                <tr key={conductor.conductorId}>
                  <td>{conductor.conductorId}</td>
                  <td>{conductor.username}</td>
                  <td>{conductor.password}</td>
                  <td>{conductor.mobileNumber}</td>
                  <td>{conductor.email}</td>
                  <td className="nic-cell">
                    <a href={conductor.nicScanCopy} target="_blank" rel="noopener noreferrer">
                      View NIC
                    </a>
                  </td>
                  <td className="nic-cell">
  <a href={conductor.conductorLicen} target="_blank" rel="noopener noreferrer">
    View Licen
  </a>
</td>
                  <td>
                    <div className="Button">
                      <button className="btn btn-danger equal-width delete-button" onClick={() => handleDelete(conductor.conductorId)}>
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

export default UpdatedC;
