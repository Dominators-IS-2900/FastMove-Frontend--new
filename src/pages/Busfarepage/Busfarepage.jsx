import React from 'react'
import BusFare from '../../components/BusFare/BusFare'
import Footer from '../../components/footer/Footer'
export default function Busfarepage(props) {
    console.log(props);
    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">Bus Fare</h1>
        
       
        <BusFare/>
        
    </div>
    <Footer/>

</div>
    
  )
}
