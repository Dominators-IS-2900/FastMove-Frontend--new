import React from 'react'
import UpdatedC from '../../../components/admin/UpdatedC/UpdatedC';
import Footer from '../../../components/common/footer/Footer'

export default function UpdatedCPage(props) {
    console.log(props);    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h3 class="h3 mb-2 text-gray-800">Conductor Details</h3>
        
      
        <UpdatedC/>
        
    </div>
    <Footer/>

</div>
    
  )
}