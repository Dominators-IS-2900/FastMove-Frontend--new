import React from 'react'
import PassengerInq from '../../../components/admin/PassengerInq/PassengerInq'
import Footer from '../../../components/common/footer/Footer'

export default function PassengerInquiry(props) {
    console.log(props);    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div className="container-fluid mr-5" style={{ width: '1100px' }}>
            <h3 className="h3 mb-2 text-gray-800 heading">Passenger Inquiry Details</h3>
        
      
        <PassengerInq/>
        
    </div>
    <Footer/>

</div>
    
  )
}