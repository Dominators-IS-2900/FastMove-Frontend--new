import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import './Emergency.css';

const Emergency=()=> {
  const [emergencyId, setEmergencyId] = useState('');
  const [emergencyType, setEmergencyType] = useState('');
  const [busNo, setBusNo] = useState('');
  const [jurneyId, setJourneyId] = useState('');
  const [routeNo, setRouteNo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

  const handleEmergencyIdChange = (e) => {
    setEmergencyId(e.target.value);
  };

  const handleEmergencyTypeChange = (e) => {
    setEmergencyType(e.target.value);
  };

  const handleJourneyIdChange = (e) => {
    setJourneyId(e.target.value);
  };

  const handleBusNoChange = (e) => {
    setBusNo(e.target.value);
  };

  const handleRouteNoChange = (e) => {
    setRouteNo(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate emergency id
    if (!emergencyId || !/^\d+$/.test(emergencyId)) {
      alert('Please enter a valid emergency ID.');
      return;
    }

    // Validate emergency type
    if (!emergencyType) {
      alert('Please enter an emergency type.');
      return;
    }

    // Validate bus no
    if (!busNo || !/^\d+$/.test(busNo)) {
      alert('Please enter a valid bus number.');
      return;
    }

    // Validate route no
    if (!routeNo || !/^\d+$/.test(routeNo)) {
      alert('Please enter a valid route number.');
      return;
    }

    // Validate date
    if (!date) {
      alert('Please enter a date.');
      return;
    }

    // Validate time
    if (!time) {
      alert('Please enter a time.');
      return;
    }

        // Prepare the data to be sent in the POST request
        const data = {
          emergencyId,
          emergencyType,
          jurneyId,
          busNo,
          routeNo,
          date,
          time,
          location,
        };

  
    // Make the HTTP POST request to the backend API endpoint
    axios
      .post('http://localhost:5000/submit-emergency-form', data)
      .then((response) => {
        console.log(response.data); // Success message from the backend
        // TODO: Handle success response from the backend
      })
      .catch((error) => {
        console.error(error); // Error message from the backend
        // TODO: Handle error response from the backend
      });
  };

  return (

    <form onSubmit={handleSubmit}>
      <div className="container-fluid">
        <h2 className="black">Inform Emergency</h2>

        <div className="m-4">
          <div className="row g-2">
            <br />
            <br />
            <div className="col-6">
              <div className="input-group">
                <span className="input-group-text">Emergency ID:</span>
                <select
                  className="form-control"
                  value={emergencyId}
                  onChange={handleEmergencyIdChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Emergency Id
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="col-6">
              <div className="input-group">
                <span className="input-group-text">Emergency Type:</span>
                <select
                  className="form-control"
                  value={emergencyType}
                  onChange={handleEmergencyTypeChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Emergency Type
                  </option>
                  <option value="1">Accident</option>
                  <option value="2">Breakdown</option>
                  <option value="3">Heavy Traffic</option>
                </select>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="col-6">
              <div className="input-group">
                <span className="input-group-text"> Bus No:</span>
                <select
                  className="form-control"
                  value={busNo}
                  onChange={handleBusNoChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Bus No
                  </option>
                  <option value="1">NK 6548</option>
                  <option value="2">NP 7852</option>
                  <option value="3">N 4578</option>
                </select>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="col-6">
              <div className="input-group">
                <span className="input-group-text">Route No:</span>
                <select
                  className="form-control"
                  value={routeNo}
                  onChange={handleRouteNoChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Route No
                  </option>
                  <option value="1">152</option>
                  <option value="2">190</option>
                  <option value="3">255</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="input-group">
                <span className="input-group-text">Journey ID:</span>
                <select
                  className="form-control"
                  value={jurneyId}
                  onChange={handleJourneyIdChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Journey ID 
                  </option>
                  <option value="1">001</option>
                  <option value="2">002</option>
                  <option value="3">003</option>
                </select>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="col-6">
              <div className="input-group">
                <span className="input-group-text">Date:</span>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={handleDateChange}
                  required
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="col-6">
              <div className="input-group">
                <span className="input-group-text">Time:</span>
                <input
                  type="time"
                  className="form-control"
                  value={time}
                  onChange={handleTimeChange}
                  required
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="col-12">
              <div className="input-group">
                <span className="input-group-text">Location:</span>
                <input type="text" className="form-control" value={location} onChange={handleLocationChange} required />

              </div>
            </div>
            <br />
            <br />
            <div className="btn-group">
              <button type="submit" className="btn send">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Emergency;
