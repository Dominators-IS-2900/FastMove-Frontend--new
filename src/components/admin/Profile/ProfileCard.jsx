import React, { useState, useEffect } from "react";
import "./ProfileCard.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ConductorRegistration = () => {
  const [conductors, setcondctors] = useState({});

  useEffect(() => {
    fetchconductorData();
  }, []);

  const  fetchconductorData = () => {
    axios.get("http://localhost:5000/conductorverification")
      .then(res => {
        setcondctors(res.data);
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

  const handleVerify = async (conductorId) => {
    try {
      await axios.post(`http://localhost:5000/conductorverify/${conductorId}`)
        .then(res => {
          showMessage('Conductor verified successfully');
          // Update the owners data
          fetchconductorData();
        });
    } catch (error) {
      console.error('Error verifying Conductor:', error);
      showMessage('Error verifying Conductor', true);
      // Handle error
    }
  };
  
  const handleCancel = (conductorId) => {
    axios
      .delete(`http://localhost:5000/deleteverifyconductor/${conductorId}`)
      .then((res) => {
        showMessage("Conductor deleted successfully");
        setcondctors((prevconductors) => {
          const updatedconductors = { ...prevconductors };
          delete updatedconductors[conductorId];
          return updatedconductors;
        });
      })
      .catch((err) => {
        console.log(err);
        showMessage("Error deleting row", true);
      });
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
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
              {Object.values(conductors).map((conductors) => (
                <tr key={conductors.conductorId}>
                <td>{conductors.conductorId}</td>
                <td>{conductors.username}</td>
                <td>{conductors.password}</td>
                <td>{conductors.mobileNumber}</td>
                <td>{conductors.email}</td>
                <td className="nic-cell">
                  <a href={conductors.nicScanCopy} target="_blank" rel="noopener noreferrer">
                    View NIC
                  </a>
                </td>
                <td className="nic-cell">
  <a href={conductors.conductorLicen} target="_blank" rel="noopener noreferrer">
    View Licen
  </a>
</td>
               
                  <td>
                    <div className="Button">
                       <button className="btn btn-primary equal-width" onClick={() => handleVerify(conductors.conductorId)}>
                        Verify
                      </button> 

                      
                    </div>
                    <span style={{ margin: "0 5px" }}> </span>
                    <div className="Button">
                      <button
                        className="btn btn-danger equal-width delete-button"
                        type="button"
                        onClick={() => handleCancel(conductors.conductorId)}
                      >
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

export default ConductorRegistration;