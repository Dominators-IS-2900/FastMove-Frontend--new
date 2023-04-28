import React from 'react'
import Detailsowner from '../../components/Detailsowner/Detailsowner'
import Footer from '../../components/footer/Footer'
export default function detailsOwner(props) {
    console.log(props);
    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h3 class="h3 mb-2 text-gray-800">Owner Details </h3>
        
      
        <Detailsowner/>
        
    </div>
    <Footer/>

</div>
    
  )
}
