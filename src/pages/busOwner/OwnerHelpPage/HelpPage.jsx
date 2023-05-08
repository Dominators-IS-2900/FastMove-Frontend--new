import React from 'react'
import Footer from '../../../components/common/footer/Footer'
import Help from '../../../components/busOwner/Help/Help'


export default function HelpPage() {
  return (
    <div>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">Help</h1>
        <Help/>
    </div>
    <Footer/>

</div>
  )
}