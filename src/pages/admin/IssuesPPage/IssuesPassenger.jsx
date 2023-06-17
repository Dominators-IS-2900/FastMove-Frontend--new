import React from 'react'
import IssuesP from '../../../components/admin/IssuesP/IssuesP'
import Footer from '../../../components/common/footer/Footer'

export default function IssuesPassenger(props) {
    console.log(props);    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h3 class="h3 mb-2 text-gray-800">Passenger Inquiry</h3>
        
      
        <IssuesP/>
        
    </div>
    <Footer/>

</div>
    
  )
}