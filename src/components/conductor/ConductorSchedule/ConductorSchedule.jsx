import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './conductorSchedule.css';

const ConductorSchedule = () => {
  const [conductordata, setConductorData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/conductorActivity')
      .then((res) => {
        if (Array.isArray(res.data)) {
          setConductorData(res.data);
        } else {
          console.log('The response data is not an array:', res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleParticipation = (index, status) => {
    const updatedData = [...conductordata];
    updatedData[index].participation = status;

    axios
      .put('http://localhost:5000/api/updateParticipation', {
        id: updatedData[index].id,
        participation: status,
      })
      .then(() => {
        setConductorData(updatedData);
        alert('Participation status updated successfully.');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Helper function to format date and time without additional characters
  const formatDateAndTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString();
  };

  return (
    <div className="tablestyle">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">View Conductor Schedule</h6>
        </div>
        <br />

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="0%" cellSpacing="0">
              <br />
              <tbody>
                <tr>
                  <th className="header">Journey ID</th>
                  <th className="header">Email</th>
                  <th className="header">Bus Number</th>
                  <th className="header">Route</th>
                  <th className="header">Start Date & Time</th>
                  <th className="header">End Date & Time</th>
                  <th className="header">Participation</th>
                </tr>

                {Array.isArray(conductordata) &&
                  conductordata.map((conductor, index) => (
                    <tr key={conductor.busId}>
                      <td>{conductor.id}</td>
                      <td>{conductor.email}</td>
                      <td>{conductor.busId}</td>
                      <td>{conductor.routeId}</td>
                      <td>{formatDateAndTime(conductor.startDateTime)}</td>
                      <td>{formatDateAndTime(conductor.endDateTime)}</td>
                      <td>
                        <button
                          className={`small-button ${conductor.participation ? 'active' : ''}`}
                          onClick={() => handleParticipation(index, !conductor.participation)}
                        >
                          Yes
                        </button>
                        <br />
                        <button
                          className={`small-button ${!conductor.participation ? 'active' : ''}`}
                          onClick={() => handleParticipation(index, !conductor.participation)}
                        >
                          No
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConductorSchedule;
