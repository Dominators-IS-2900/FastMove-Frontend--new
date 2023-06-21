import React from 'react'
import PassengerInq from '../../../components/admin/PassengerInq/PassengerInq'
import Footer from '../../../components/common/footer/Footer'

export default function PassengerInquiry(props) {
    console.log(props);    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h3 class="h3 mb-2 text-gray-800">Passenger Inquiry Details</h3>
        
      
        <PassengerInq/>
        
    </div>
    <Footer/>

</div>
    
  )
}