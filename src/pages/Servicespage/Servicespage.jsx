import React from 'react'
import ServicesAdmin from '../../components/ServicesAdmin/ServicesAdmin';
import Footer from '../../components/footer/Footer'
export default function Servicespage(props) {
    console.log(props);
    

  return (
  <div id="content" style={{width: '1150px'}}>

      <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">Services</h1> 
        <ServicesAdmin/>
        <button type="button" class="btn btn-primary ml-1 mb-3">Back</button>
        <button type="button" class="btn btn-primary ml-1 mb-3">Add</button>
      </div>
    <Footer/>

  </div>
    
  )
}
