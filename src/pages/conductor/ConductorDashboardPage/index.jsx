import React from "react";
import Footer from '../../../components/common/footer/Footer';
import DashBoardConductor from "./components/DashBoardConductor";
import "./index.css";

export default function ConductorDashboardPage() {
  return (
    <>
      <div className="body" style={{ backgroundColor: '#01281a' }}>
        <DashBoardConductor />
        <Footer className="footer" />
     
      </div>
     

    </>
  );
}
