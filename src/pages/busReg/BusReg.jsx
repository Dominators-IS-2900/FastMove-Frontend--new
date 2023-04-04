import React from 'react'
import BusRegcard from '../../components/BusRegcard/BusRegcard'
import Footer from '../../components/footer/Footer'


export default function BusReg(props) {
    console.log(props);
    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">ADD NEW BUS</h1>
        
        
        <BusRegcard/>
        <button type="button" class="btn btn-primary ml-1 mb-3">ADD BUS</button>
    </div>
    <Footer/>

</div>
    
  )
}
