import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Info.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Info = () => {
  const [busData, setBusData] = useState([]);

  useEffect(() => {
    fetchBusData();
  }, []);

  const fetchBusData = () => {
    axios
      .get('http://localhost:5000/busesreg')
      .then(res => {
        setBusData(res.data);
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
  const handleDelete = (busNo) => {
    axios
      .delete(`http://localhost:5000/busesreg/${busNo}`)
      .then(res => {
        // Display success message
        showMessage('Bus Details  deleted successfully');
        // Update the owners data
        fetchBusData();

        // Fetch updated bus data
        fetchBusData();
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
                <th  className="green-column">Bus No</th>
                <th   className="green-column">User ID</th>
                <th  className="green-column">No of Seats</th>
                <th  className="green-column">Bus Type</th>
                <th  className="green-column">License Start Date</th>
                <th  className="green-column">License Expire Date</th>
                <th  className="green-column">License Scan Copy</th>
                <th className="green-column">Action</th>
              </tr>
            </thead>
            <tbody>
              {busData.map((bus, index) => (
                <tr key={bus.Bus_No}>
                  <td>{bus.Bus_No}</td>
                  <td>{bus.UserID}</td>
                  <td>{bus.No_ofSeats}</td>
                  <td>{bus.Bus_type}</td>
                  <td>{bus.Bus_Lisence_startDate}</td>
                  <td>{bus.Bus_Lisence_expireDate}</td>
                  <td className="nic-cell a"><a href={bus.BusLisence_scancopy} target="_blank" rel="noopener noreferrer">
                      View NIC
                    </a></td>
                    <td className="d-flex align-items-center justify-content-center">
           <div className="Button">
    <br></br>
    <button className="btn btn-danger equal-width delete-button" onClick={() => handleDelete(bus.Bus_No)}>
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

export default Info;

