import React from "react";
import passengerinquiry from "../../components/Passengerinquiry/Passengerinquiry";
import Footer from "../../components/footer/Footer";
export default function Passinquiry(props) {
    console.log(props);
    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
      <passengerinquiry/>
        <h1 class="h3 mb-2 text-gray-800">Passenger Inquiry</h1>
        <button type="button" class="btn btn-primary ml-1 mb-3">ADD RECORD</button>
        



    </div>
    <Footer/>

</div>
    
  )
}