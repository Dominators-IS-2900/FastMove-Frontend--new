import React from 'react'
import UpdatedC from '../../../components/admin/UpdatedC/UpdatedC';
import Footer from '../../../components/common/footer/Footer'

export default function UpdatedCPage(props) {
    console.log(props);    

  return (
    <div id="content" style={{width: '1150px'}}>

<div className="container-fluid mr-5" style={{ width: '1100px' }}>
        <h3 className="h3 mb-2 text-gray-800 heading">Conductor Details</h3>
        
      
        <UpdatedC/>
        
    </div>
    <Footer/>

</div>
    
  )
}