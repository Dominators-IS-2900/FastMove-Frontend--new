import React from "react";
import Footer from "../../components/footer/Footer";
import DashBoard from "../dashboard/DashBoard";

export default function MainPage() {
  return (
    <div className="content">
      <div id="content-wrapper" className="d-flex flex-column">
        <DashBoard />
        <div style={{ marginTop: "300px" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
