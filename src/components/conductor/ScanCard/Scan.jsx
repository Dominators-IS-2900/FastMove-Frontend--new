import React, { useState } from "react";
import QrReader from "react-qr-scanner";
import toast, { Toaster } from "react-hot-toast";

import './scan.css'


const QRScanner = () => {
  const [scannedData, setScannedData] = useState("");
  const [ticketData, setTicketData] = useState({
    id: null,
    ticket_code: "",
    passenger_name: "",
    source: "",
    destination: "",
    bus_number: "",
    amount: "",
  });

  const handleScan = (data) => {
    if (data) {
      setScannedData(data.text);
      fetchTicketData(data.text);
    }
  };

  const handleError = (error) => {
    console.error("QR code scan error:", error);
  };

 const fetchTicketData = async (ticketCode) => {
   try {
     const response = await fetch(
       `http://localhost:5000/api/tickets/${ticketCode}`,
       {
         headers: { "Content-Type": "application/json" },
       },
      
     );
     

     if (response.status === 404) {
       toast.error("Ticket not found.");
     } else if (response.status === 200) {
       const data = await response.json();
       
       const ticket = data[0];

       setTicketData(ticket);
       toast.success("Successfully retrieved ticket.");
     }
   } catch (error) {
     console.error("Error retrieving ticket:", error);
    toast.success("Failed to retrieve ticket.");
   }
 };


  return (
    
      <><Toaster position="top-center" reverseOrder={false}></Toaster><div className="ScanPage">
    

         

            <h2 class="black">Scan QR Code</h2>
            <p>Scan Passenger's Qr Code Here</p>
            
              <QrReader
                delay={300}
                onError={handleError}
                onScan={handleScan}
                style={{ width: "300px" }} />
              {scannedData && (
                <div>
                  <h2>Scanned Data:</h2>
                  <p>{scannedData}</p>
                </div>
              )}
              {ticketData.id && (
               <div>
               <h2>Ticket Data:</h2>
               <p>ID: {ticketData.id}</p>
               <p>Ticket Code: {ticketData.ticket_code}</p>
               <p>passenger Name: {ticketData.passenger_name}</p>
               <p>Start-End: {ticketData.source}</p>
               <p>Seat Number: {ticketData.destination}</p>
               <p>Bus Number: {ticketData.bus_number}</p>
               <p>Amount: {ticketData.amount}</p>
             </div>
              )}
           
          </div>
        
    </>  
  );
};

export default QRScanner;
