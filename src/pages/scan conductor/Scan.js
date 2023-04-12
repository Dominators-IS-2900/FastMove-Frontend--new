import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/ConducortopBar/TopBar";
import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import jsQR from 'jsqr';

function QRScanner() {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const code = jsQR(imageSrc);

    if (code) {
      alert(`QR code detected: ${code.data}`);
    } else {
      alert('No QR code found');
    }
  };

  return (
    <div className="ScanPage">
    <div className="body">
    <div className="Topbar"> <TopBar/></div>
    <div className="flex">
    <div className="sidebar"> <SideBar/></div>  
    <div class="container-fluid">
              
              <h2 class="black">Scan QR Code</h2>
              <p>Scan Passenger's Qr Code Here</p>
    <div>
      {/* Render the webcam component */}
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      {/* Render the capture button */}
      <button onClick={capture}>Capture QR Code</button>
    </div>
    </div>
    </div>
    </div> 
    </div>  
  );
}

export default QRScanner;

