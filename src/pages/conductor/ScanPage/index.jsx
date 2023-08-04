import React from "react";
import SideBar from "../../../components/conductor/sidebar/SideBar";
import Scan from "./components/Scan";
import "./index.css";

export default function ScanPage() {
  return (
    <div className="scan">
      <div className="body">
        <div className="flex">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="Dash">
            <Scan />
          </div>
        </div>
      </div>
    </div>
  );
}
