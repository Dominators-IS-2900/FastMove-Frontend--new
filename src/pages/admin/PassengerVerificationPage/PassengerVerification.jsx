import React from 'react'
import APassenger from '../../../components/admin/APassenger/APassenger';
import Footer from '../../../components/common/footer/Footer'
export default function PassengerVerification(props) {
    console.log(props);
    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h3 class="h3 mb-2 text-gray-800">Passenger Verification</h3>
        <APassenger/>
       
    </div>
    <Footer/>

</div>
    
  )
}
