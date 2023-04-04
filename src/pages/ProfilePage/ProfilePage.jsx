import React from 'react'
import Profile from '../../components/Profile/Profile';
import Footer from '../../components/footer/Footer'
export default function Profilef(props) {
    console.log(props);
    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">Conductor Registration</h1>
       
        <Profile/>
        
    </div>
    <Footer/>

</div>
    
  )
}
