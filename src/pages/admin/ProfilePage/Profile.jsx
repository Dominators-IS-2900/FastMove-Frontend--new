import React from 'react'
import ProfileCard from '../../../components/admin/Profile/ProfileCard';
import Footer from '../../../components/common/footer/Footer'

export default function Profile(props) {
    console.log(props);
    

  return (
  <div id="content" style={{width: '1150px'}}>

      <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h3 class="h3 mb-2 text-gray-800">Conductor Registration</h3>
        <ProfileCard/>
        
      </div>
    <Footer/>
  </div>
    
  )
}
