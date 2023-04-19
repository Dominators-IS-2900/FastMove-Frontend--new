import React from 'react'
import Owner from '../../components/AOwner/AOwner';
import Footer from '../../components/footer/Footer'
export default function Ownervarification(props) {
    console.log(props);
    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">Owner Verification</h1>
        
        
        <Owner/>
        
    </div>
    <Footer/>

</div>
    
  )
}
