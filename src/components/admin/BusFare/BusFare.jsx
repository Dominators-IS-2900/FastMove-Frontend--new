import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BusFare.css"; // Import custom CSS file for styling
// import { start } from "repl";
import Modal from "react-modal";
import bus from "../../../Images/Logo.png";
import { Link } from "react-router-dom";

const RoutePriceCalculator = () => {
  const [routeId, setRouteId] = useState("");
  const [startPoint, setStartPoint] = useState("");
  const [endPoint, setEndPoint] = useState("");
  const [numPassengers, setNumPassengers] = useState("");
  const [message, setMessage] = useState("");
  const [pricee, setPrice] = useState([]);
  const [cuurroute, setcuurroute] = useState([]);
  const [bustype, setBusType] = useState([]);
  const [incre, setincre] = useState([]);
  const [min, setmin] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [fare, setFare] = useState(0);

  const routeOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  ];

  const startPointOptions = {
    1: [
      "Colombo Fort",
      "Maligawatta",
      "Maradana",
      "Dematagoda",
      "Borella",
      "Rajagiriya",
      "Battaramulla",
      "Kaduwela",
      "Kiribathgoda",
      "Nittambuwa",
      "Warakapola",
      "Kegalle",
      "Mawanella",
      "Kadugannawa",
      "Peradeniya",
      "Kandy",
    ],
    2: [
      "Colombo Fort",
      "Pettah",
      "Bambalapitiya",
      "Wellawatte",
      "Mount Lavinia",
      "Dehiwala",
      "Moratuwa",
      "Panadura",
      "Kalutara",
      "Aluthgama",
      "Ambalangoda",
      "Hikkaduwa",
      "Galle",
    ],
  };

  const endPointOptions = {
    1: [
      "Colombo Fort",
      "Maligawatta",
      "Maradana",
      "Dematagoda",
      "Borella",
      "Rajagiriya",
      "Battaramulla",
      "Kaduwela",
      "Kiribathgoda",
      "Nittambuwa",
      "Warakapola",
      "Kegalle",
      "Mawanella",
      "Kadugannawa",
      "Peradeniya",
      "Kandy",
    ],
    2: [
      "Colombo Fort",
      "Pettah",
      "Bambalapitiya",
      "Wellawatte",
      "Mount Lavinia",
      "Dehiwala",
      "Moratuwa",
      "Panadura",
      "Kalutara",
      "Aluthgama",
      "Ambalangoda",
      "Hikkaduwa",
      "Galle",
    ],
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/Price")
      .then((res) => {
        setPrice(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  const calculateRoutePrice = () => {
    let haltcount;
    let increme;
    let mini;

    haltcount =
      startPointOptions[routeId].indexOf(endPoint) +
      1 -
      (startPointOptions[routeId].indexOf(startPoint) + 1);
    console.log(haltcount);

    let fare;

    for (const item of pricee) {
      if (item.Bus_type === bustype) {
        increme = item.increment;
        mini = item.minimum_prize;
        break;
      }
    }

    console.log(haltcount);
    console.log(increme);
    console.log(mini);

    if (haltcount === 0) {
      fare = 0.0;
    } else if (Math.abs(haltcount) === 1) {
      fare = mini * numPassengers;
    } else {
      fare = (mini + (Math.abs(haltcount) - 1) * increme) * numPassengers;
    }
    setFare(fare); // Set the calculated fare

    setShowModal(true); // Show the modal
    console.log(fare);

    // axios
    //   .post("http://localhost:5000/calculateRoutePrice", {
    //     route_id: routeId,
    //     start_point: startPoint,
    //     end_point: endPoint,
    //     num_passengers: numPassengers,
    //   })
    //   .then((res) => {
    //     setMessage(res.data.message);
    //   })
    //   .catch((err) => {
    //     setMessage(err.response.data.error);
    //   });
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="route-price-calculator">
        <h2>Route Price Calculator</h2>
        <div className="input-container">
          <label htmlFor="route-id">Route ID:</label>
          <select
            id="route-id"
            value={routeId}
            onChange={(e) => setRouteId(e.target.value)}
          >
            <option value=""></option>
            {routeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="start-point">Bus Type :</label>
          <select value={bustype} onChange={(e) => setBusType(e.target.value)}>
            <option value=""></option>

            <option value={"Normal"}>Normal</option>
            <option value={"Semi"}>Semi</option>
            <option value={"Luxery"}>Luxery</option>
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="start-point">Start Point:</label>
          <select
            id="start-point"
            value={startPoint}
            onChange={(e) => setStartPoint(e.target.value)}
          >
            <option value=""></option>
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
            <option value=""></option>
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
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          contentLabel="Calculated Fare"
          style={{
            overlay: {
              // Customize the overlay styles
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999999,
            },
            content: {
              // Customize the content styles
              width: "300px",
              height: "200px",
              margin: "auto",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              animation: "borderAnimation 1s infinite",
            },
          }}
        >
          <div
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              cursor: "pointer",
            }}
          >
            X
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <h3>Price</h3>
            <h3>:</h3>
            <h3>Rs.{fare}</h3>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              right: "15px",
              cursor: "pointer",
            }}
          >
            <img src={bus} />
          </div>
          {/* <button onClick={closeModal}>Close</button> */}
        </Modal>
        {message && <p className="message">{message}</p>}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <div className="routes" style={{ width: "400px" }}>
          <table>
            <tbody>
              <tr>
                <th style={{ width: "20px" }}>ID</th>
                <th>Route</th>
              </tr>
              {routeOptions.map((option) => (
                <tr>
                  {" "}
                  <td style={{ width: "20px" }}> {option.label} </td>
                  <td>
                    {startPointOptions[option.label][0]} -{" "}
                    {
                      startPointOptions[option.label][
                        startPointOptions[option.label].length - 1
                      ]
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {console.log(pricee)}
        <div className="pricetable" style={{ width: "400px" }}>
          <table>
            <tbody>
              <tr>
                <th>Bus type</th>
                <th>Minimum Price</th>
                <th>Increment</th>
                <th></th>
              </tr>

              {pricee.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.Bus_type}</td>
                    <td>{data.minimum_prize}</td>
                    <td>{data.increment}</td>
                    <td>
                    <Link to={`/EditBusfare/${data.id}/${data.Bus_type}`}>
                        <button
                          style={{
                            width: "30px",
                            height: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "12px",
                          }}
                        >
                          edit
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default RoutePriceCalculator;