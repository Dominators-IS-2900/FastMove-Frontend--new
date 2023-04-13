import React, { useState } from 'react';
import './Emergency.css';

function Emergency() {
  const [emergencyId, setEmergencyId] = useState('');
  const [emergencyType, setEmergencyType] = useState('');
  const [busNo, setBusNo] = useState('');
  const [routeNo, setRouteNo] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleEmergencyIdChange = (e) => {
    setEmergencyId(e.target.value);
  };

  const handleEmergencyTypeChange = (e) => {
    setEmergencyType(e.target.value);
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

    // TODO: Submit the form
    console.log({
      emergencyId,
      emergencyType,
      busNo,
      routeNo,
      date,
      time,
    });
  };

  return (
    <div class="container-fluid">
      <h2 class="black">Inform Emergency</h2>
      
      
      <form onSubmit={handleSubmit}>
        <div class="m-4">
          <div class="row g-2">
            <br />
            <br />
            <div class="col-6">
              <div class="input-group">
                <span class="input-group-text">Emergency ID:</span>
              <select class="form-control"  value={emergencyId} onChange={handleEmergencyIdChange} required>
              <option value="" disabled selected>Select Emergency Id</option>
              <option value="1"> 1</option>
              <option value="2"> 2</option>
              <option value="3">3</option>
            </select>
               
            </div>
            </div>
            <br />
            <br />
            <br />
            <div class="col-6">
              <div class="input-group">
                <span class="input-group-text">Emergency Type:</span>
                <select class="form-control"  value={emergencyType} onChange={handleEmergencyTypeChange} required>
              <option value="" disabled selected>Select Emergency Type</option>
              <option value="1"> Accident</option>
              <option value="2"> Breakdown</option>
              <option value="3"> Heavy Traffic</option>
            </select>

            </div>
            </div>
            <br />
            <br />
            <br />
            <div class="col-6">
              <div class="input-group">
                <span class="input-group-text"> Bus No:</span>
                <select class="form-control" value={busNo}  onChange={handleBusNoChange}required>
              <option value="" disabled selected>Select Bus No</option>
              <option value="1"> 9</option>
              <option value="2"> 8</option>
              <option value="3"> 7</option>
            </select>

              </div>

</div>
        <br/><br/><br/>
        <div class="col-6">
            <div class="input-group">
            <span class="input-group-text">Route No:</span>
            <select class="form-control" value={routeNo} onChange={handleRouteNoChange} required>
              <option value="" disabled selected>Select Route No</option>
              <option value="1">Route 1</option>
              <option value="2">Route 2</option>
              <option value="3">Route 3</option>
              
            </select>
                
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text">Route Name:</span>
                <select class="form-control"  required>
              <option value="" disabled selected>Select Route Name</option>
              <option value="1">Ambalangoda-Colombo</option>
              <option value="2">Ambalangoda-Galle</option>
              <option value="3">Ambalangoda-Matara</option>
              
            </select>
                              
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text">Date:</span>
                <input type="date" 
                class="form-control" 
                value={date}
                onChange={handleDateChange}  required/>
                
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text">Time:</span>
                <input type="time" 
                class="form-control" 
                value={time}
                onChange={handleTimeChange} required/>
                
            </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div class="col-12">
            <div class="input-group">
                <span class="input-group-text">Location:</span>
                <input type="text" 
                class="form-control" required/>
                
            </div>
        </div>
        <br/>
        <br/>
        <div class="btn-group">
        <button type="button" class="btn send">SEND</button>
        </div>
    </div>
</div>
</form>
</div>
     
           
           
    )
}

export default Emergency;



