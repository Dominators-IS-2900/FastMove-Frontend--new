import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UpdatedC.css';

const UpdatedC = () => {
  const [conductorData, setConductorData] = useState([]);

  useEffect(() => {
    fetchConductorData();
  }, []);

  const fetchConductorData = () => {
    axios
      .get('http://localhost:5000/UpdatedConductor')
      .then(res => {
        setConductorData(res.data);
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
                <th className="green-column">Conductor ID</th>
                <th className="green-column">User Name</th>
                <th className="green-column">Password</th>
                <th className="green-column">Mobile Number</th>
                <th className="green-column">Email</th>
                <th className="green-column">NIC Scan Copy</th>
                <th className="green-column">Conductor License</th>
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
                  <td>{conductor.nicScanCopy}</td>
                  <td>{conductor.conductorLicense}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UpdatedC;
