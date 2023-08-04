import React, { useState } from "react";
import axios from "axios";
import QRCode from "qrcode.react";

const TicketForm = () => {
  const [passengerName, setPassengerName] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [busNumber, setBusNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [Route, setRoute] = useState("");
  const [ticketCode, setTicketCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/tickets/", {
        passengerName,
        source,
        destination,
        busNumber,
        amount,
        Route, 

      });

      setTicketCode(response.data.ticketCode);
    } catch (error) {
      console.error("Error generating ticket:", error);
    }
  };

  const handleDownload = () => {
    const canvas = document.getElementById("qrcode");
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 style={{ color: "black" }}>QR Generate</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Passenger Name:</label>
            <input
              type="text"
              className="form-control"
              value={passengerName}
              onChange={(e) => setPassengerName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Start-End:</label>
            <input
              type="text"
              className="form-control"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Seat Number:</label>
            <input
              type="text"
              className="form-control"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Bus Number:</label>
            <input
              type="text"
              className="form-control"
              value={busNumber}
              onChange={(e) => setBusNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Amount:</label>
            <input
              type="text"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Route:</label>
            <input
              type="text"
              className="form-control"
              value={Route}
              onChange={(e) => setRoute(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Generate Ticket
          </button>
        </form>

        {ticketCode && (
          <div className="mt-3">
            <h2>Ticket Code: {ticketCode}</h2>
            <QRCode id="qrcode" value={ticketCode} />
            <button className="btn btn-primary mt-2" onClick={handleDownload}>
              Download QR Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketForm;