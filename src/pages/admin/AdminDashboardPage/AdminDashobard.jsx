import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const [conductorCount, setConductorCount] = useState(0);
  const [busOwnerCount, setBusOwnerCount] = useState(0);
  const [passengerCount, setPassengerCount] = useState(0);
  const [busCount, setBusCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const conductorResponse = await fetch('http://localhost:5000/conductor/count');
        const conductorData = await conductorResponse.json();
        setConductorCount(conductorData[0].count);

        const busOwnerResponse = await fetch('http://localhost:5000/busOwner/count');
        const busOwnerData = await busOwnerResponse.json();
        setBusOwnerCount(busOwnerData[0].count);

        const passengerResponse = await fetch('http://localhost:5000/passenger/count');
        const passengerData = await passengerResponse.json();
        setPassengerCount(passengerData[0].count);

        const busResponse = await fetch('http://localhost:5000/bus/count');
        const busData = await busResponse.json();
        setBusCount(busData[0].count);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div id="content" style={{ width: '1125px' }}>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <Link to="/">
            <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          </Link>
        </div>

        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Conductors
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">Total Conductors: {conductorCount}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-user-tie fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Bus Owners
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">Total Bus Owners: {busOwnerCount}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-user-friends fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Passengers
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">Total Passengers: {passengerCount}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-users fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Buses
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">Total Buses: {busCount}</div>
                  </div>
                  <div className="col-auto">
                    <i className="fas fa-bus fa-2x text-gray-300"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
