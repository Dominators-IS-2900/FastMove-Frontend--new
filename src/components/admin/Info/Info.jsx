import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Info.css';

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

  const handleDelete = (busNo) => {
    axios
      .delete(`http://localhost:5000/busesreg/${busNo}`)
      .then(res => {
        // Display success message
        alert('Row deleted successfully');

        // Fetch updated bus data
        fetchBusData();
      })
      .catch(err => {
        console.log(err);
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
                <th>Bus No</th>
                <th>User ID</th>
                <th>No of Seats</th>
                <th>Bus Type</th>
                <th>License Start Date</th>
                <th>License Expire Date</th>
                <th>License Scan Copy</th>
                <th>Action</th>
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
                  <td>{bus.BusLisence_scancopy}</td>
                  <td>
                    <div className="Button">
                      <br></br>
                      <button className="btn btn-danger equal-width" onClick={() => handleDelete(bus.Bus_No)}>
                        DELETE
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

export default Info;

