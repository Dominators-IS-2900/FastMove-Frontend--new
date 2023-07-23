import React from 'react'
import Dashboardcard from '../../../components/passenger/Dashboard/Dashboardcard';
import Footer from '../../../components/common/footer/Footer'

export default function PassengerDashboard(props) {
    console.log(props);    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h3 class="h3 mb-2 text-gray-800">Bus Fare</h3>
        
      
        <Dashboardcard/>
        
    </div>
    <Footer/>

</div>
    
  )
}
