import React from "react";
import Editbusfare from "../../../components/admin/BusFare/Editbusfare";
import Footer from "../../../components/common/footer/Footer";

export default function EditBusfare(props) {
  console.log(props);

  return (
    <div id="content" style={{ width: "1150px" }}>
      <div class="container-fluid mr-5" style={{ width: "1100px" }}>
        <h3 class="h3 mb-2 text-gray-800">Edit Bus Fare</h3>
        <Editbusfare />
     
      </div>
     
      <Footer />
    </div>
  );
}
