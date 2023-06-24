import React, { useState } from 'react';
import axios from 'axios';
import './BusFare.css'; // Import custom CSS file for styling

const RoutePriceCalculator = () => {
  const [routeId, setRouteId] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [numPassengers, setNumPassengers] = useState('');
  const [message, setMessage] = useState('');

  const routeOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' }
  ];

  const startPointOptions = {
    '1': [
      'Colombo Fort',
      'Maligawatta',
      'Maradana',
      'Dematagoda',
      'Borella',
      'Rajagiriya',
      'Battaramulla',
      'Kaduwela',
      'Kiribathgoda',
      'Nittambuwa',
      'Warakapola',
      'Kegalle',
      'Mawanella',
      'Kadugannawa',
      'Peradeniya',
      'Kandy'
    ],
    '2': [
      'Colombo Fort',
      'Pettah',
      'Bambalapitiya',
      'Wellawatte',
      'Mount Lavinia',
      'Dehiwala',
      'Moratuwa',
      'Panadura',
      'Kalutara',
      'Aluthgama',
      'Ambalangoda',
      'Hikkaduwa',
      'Galle'
    ]
  };

  const endPointOptions = {
    '1': [
      'Colombo Fort',
      'Maligawatta',
      'Maradana',
      'Dematagoda',
      'Borella',
      'Rajagiriya',
      'Battaramulla',
      'Kaduwela',
      'Kiribathgoda',
      'Nittambuwa',
      'Warakapola',
      'Kegalle',
      'Mawanella',
      'Kadugannawa',
      'Peradeniya',
      'Kandy'
    ],
    '2': [
      'Colombo Fort',
      'Pettah',
      'Bambalapitiya',
      'Wellawatte',
      'Mount Lavinia',
      'Dehiwala',
      'Moratuwa',
      'Panadura',
      'Kalutara',
      'Aluthgama',
      'Ambalangoda',
      'Hikkaduwa',
      'Galle'
    ]
  };

  const calculateRoutePrice = () => {
    axios
      .post('http://localhost:5000/calculateRoutePrice', {
        route_id: routeId,
        start_point: startPoint,
        end_point: endPoint,
        num_passengers: numPassengers
      })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.error);
      });
  };

  return (
    <div className="route-price-calculator">
      <h2>Route Price Calculator</h2>
      <div className="input-container">
        <label htmlFor="route-id">Route ID:</label>
        <select
          id="route-id"
          value={routeId}
          onChange={(e) => setRouteId(e.target.value)}
        >
          {routeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="start-point">Start Point:</label>
        <select
          id="start-point"
          value={startPoint}
          onChange={(e) => setStartPoint(e.target.value)}
        >
          {startPointOptions[routeId]?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="end-point">End Point:</label>
        <select
          id="end-point"
          value={endPoint}
          onChange={(e) => setEndPoint(e.target.value)}
        >
          {endPointOptions[routeId]?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="num-passengers">Number of Passengers:</label>
        <input
          type="text"
          id="num-passengers"
          placeholder="Enter the number of passengers"
          value={numPassengers}
          onChange={(e) => setNumPassengers(e.target.value)}
        />
      </div>
      <button onClick={calculateRoutePrice}>Calculate Route Price</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default RoutePriceCalculator;
