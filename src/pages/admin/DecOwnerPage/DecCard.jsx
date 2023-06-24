import React from 'react'
import DecOwner from '../../../components/admin/DecOwner/DecOwner';
import Footer from '../../../components/common/footer/Footer'

export default function DecCard(props) {
    console.log(props);    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div className="container-fluid mr-5" style={{ width: '1100px' }}>
            <h3 className="h3 mb-2 text-gray-800 heading">Bus Owner Details</h3>
        
      
        <DecOwner/>
        
    </div>
    <Footer/>

</div>
    
  )
}
