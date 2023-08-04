import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UpdatedC.css';

const  UpdatedC = () => {
  const [conductorData, setconductorData] = useState([]);

  useEffect(() => {
    fetchconductorData();
  }, []);

  const fetchconductorData = () => {
    axios
      .get('http://localhost:5000/Infoconductor')
      .then(res => {
        setconductorData(res.data);
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

  const handleDelete = (Email) => {
    axios
      .delete(`http://localhost:5000/deleteconductor/${Email}`)
      .then(res => {
        // Display success message
        showMessage('Conductor deleted successfully');

        // Fetch updated passenger data
        fetchconductorData();
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
              {conductorData.map((conductor) => (
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
                      <button className="btn btn-danger equal-width delete-button" onClick={() => handleDelete(conductor.Email)}>
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
