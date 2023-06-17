import React, { useState } from 'react';
import axios from 'axios';
 const RoutePriceCalculator = () => {
  const [routeId, setRouteId] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [endPoint, setEndPoint] = useState('');
  const [message, setMessage] = useState('');

  const calculateRoutePrice = () => {
    axios
      .post('http://localhost:5000/calculateRoutePrice', { route_id: routeId, start_point: startPoint, end_point: endPoint })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.error);
      });
  };

  return (
    <div>
      <input type="text" placeholder="Route ID" value={routeId} onChange={(e) => setRouteId(e.target.value)} />
      <input type="text" placeholder="Start Point" value={startPoint} onChange={(e) => setStartPoint(e.target.value)} />
      <input type="text" placeholder="End Point" value={endPoint} onChange={(e) => setEndPoint(e.target.value)} />
      <button onClick={calculateRoutePrice}>Calculate Route Price</button>
      {message && <p>{message}</p>}
    </div>
  );
};

 export default RoutePriceCalculator;
