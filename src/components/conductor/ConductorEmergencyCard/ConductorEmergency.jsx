import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './ConductorEmergency.css';

const Emergency=()=> {
  const [emergencyId, setEmergencyId] = useState('');
  const [emergency_type, setEmergencyType] = useState('');
  const [bus_number, setBusNo] = useState('');
  const [journey_id, setJourneyId] = useState('');
  const [route_no, setRouteNo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');

 
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



    // Validate emergency type
    if (!emergency_type) {
      alert('Please enter an emergency type.');
      return;
    }

  

    // Validate route no
    if (!route_no || !/^\d+$/.test(route_no )) {
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

       
    // TODO: Submit the form
    console.log({
           
      emergency_type,
      bus_number,
      route_no,
      journey_id,
      date,
      time,
      location,

    });
    sendEmergencyData();
  };

  const sendEmergencyData = async () => {
    const emergencyData = {
      
     
      emergency_type,
      bus_number,
      route_no,
      journey_id,
      date,
      time,
      location,
    };
    // Make the HTTP POST request to the backend API endpoint
    try {
      const response = await fetch("http://localhost:5000/api/emergencies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emergencyData),
      });

      if (response.ok) {
        toast.success("Sent Successfully.");
      } else {
        toast.error("Sent Failed.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error.");
    }
  };

  return (
<div class="container-fluid">  
   
      <div className="tablestyle">
      {/* table card */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Send Emergency Information</h6>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" cellSpacing="0">
                <thead>
                  
                  <tr>
                    <th style={{ width: '10px' }}>1</th>
                    <th style={{ width: '10px' }}>Emergency Type</th>
                   <td>
                <div className="input-group">
                <select
                  className="form-control"
                  value={ emergency_type}
                  onChange={handleEmergencyTypeChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Emergency Type
                  </option>
                  <option >Accident</option>
                  <option >Breakdown</option>
                  <option >Heavy Traffic</option>
                </select>
              </div>
              </td>
                  </tr>
                  <tr>
                    <th style={{ width: '10px' }}>2</th>
                    <th style={{ width: '10px' }}>Bus Number</th>
                  <td>  
                  <div className="input-group">
                <select
                  className="form-control"
                  value={ bus_number}
                  onChange={handleBusNoChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Bus No
                  </option>
                  <option >NK 6548</option>
                  <option >NP 7852</option>
                  <option >N 4578</option>
                </select>
              </div>
              </td>
                  </tr>
                  <tr>
                    <th style={{ width: '10px' }}>3</th>
                    <th style={{ width: '10px' }}>Route Number</th>
                  <td><div className="input-group">
                   <select
                  className="form-control"
                  value={route_no}
                  onChange={handleRouteNoChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Route No
                  </option>
                  <option >152</option>
                  <option >190</option>
                  <option >255</option>
                </select>
              </div></td>
                  </tr>
                  <tr>
                    <th style={{ width: '10px' }}>4</th>
                    <th style={{ width: '10px' }}>Journey ID</th>
                  <td> <div className="input-group">
                
                <select
                  className="form-control"
                  value={journey_id}
                  onChange={handleJourneyIdChange}
                  required
                >
                  <option value="" disabled selected>
                    Select Journey ID 
                  </option>
                  <option >001</option>
                  <option >002</option>
                  <option >003</option>
                </select>
              </div></td>
                  </tr>
                  <tr>
                    <th style={{ width: '10px' }}>5</th>
                    <th style={{ width: '10px' }}>Date</th>
                    <td><div className="input-group">
              
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={handleDateChange}
                  required
                />
              </div>
              </td>
                  </tr>
                  <tr>
                    <th style={{ width: '10px' }}>6</th>
                    <th style={{ width: '10px' }}>Time</th>
                    <td>        
                 <div className="input-group">
                
                <input
                  type="time"
                  className="form-control"
                  value={time}
                  onChange={handleTimeChange}
                  required
                />
              </div>
              </td>
               </tr>
               <tr>
                    <th style={{ width: '10px' }}>7</th>
                    <th style={{ width: '10px' }}>Location</th>
                    <td>        
                    <div className="input-group">
                
                <input type="text" className="form-control" value={location} onChange={handleLocationChange} required />

              </div>
              </td>
               </tr>
              </thead>
              </table>
             
            <div className="btn-group">
              <button type="submit" className="btn send">
                SEND
              </button>
              <button type="cancel" className="btn cancel">
               CANCEL
              </button>
            </div>
            </div>
          </div>
        </form>
      </div>
      
    </div>

      <ToastContainer />
   
    </div>
  );
}

export default Emergency;
