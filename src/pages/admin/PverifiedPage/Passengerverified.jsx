import React from 'react'
import PVerified from '../../../components/admin/PVerified/PVerified';
import Footer from '../../../components/common/footer/Footer';

export default function Passengerverified(props) {
    console.log(props);    

  return (
    <div id="content" style={{width: '1150px'}}>

<div className="container-fluid mr-5" style={{ width: '1100px' }}>
        <h3 className="h3 mb-2 text-gray-800 heading">Passenger Details</h3>
        <PVerified/>
        
    </div>
    <Footer/>

</div>
    
  )
}
