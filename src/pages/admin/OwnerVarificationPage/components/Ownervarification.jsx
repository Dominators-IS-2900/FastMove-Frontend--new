import React from 'react'
import Owner from '../../../../components/admin/AOwner/AOwner';
import Footer from '../../../../components/common/footer/Footer'
export default function Ownervarification(props) {
    console.log(props);
    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div className="container-fluid mr-5" style={{ width: '1100px' }}>
            <h3 className="h3 mb-2 text-gray-800 heading">Bus Owner Verification</h3>
        
        <Owner/>
        
    </div>
    <Footer/>

</div>
    
  )
}
