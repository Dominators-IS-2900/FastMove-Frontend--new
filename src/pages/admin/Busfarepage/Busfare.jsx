import React from 'react'
import BusFare from '../../../components/admin/BusFare/BusFare';
import Footer from '../../../components/common/footer/Footer'

export default function Busfare(props) {
    console.log(props);    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h3 class="h3 mb-2 text-gray-800">Bus Fare</h3>
        
      
        <BusFare/>
        
    </div>
    <Footer/>

</div>
    
  )
}
