import React from 'react'
import Info from '../../../components/admin/Info/Info';
import Footer from '../../../components/common/footer/Footer'

export default function InfoBuses(props) {
    console.log(props);    

  return (
    <div id="content" style={{width: '1150px'}}>

<div className="container-fluid mr-5" style={{ width: '1100px' }}>
        <h3 className="h3 mb-2 text-gray-800 heading">Registered Bus Details </h3>
        
      
        <Info/>
        
    </div>
    <Footer/>

</div>
    
  )
}