import React from 'react'
import Footer from '../../components/footer/Footer'
import Help from '../../components/Help/Help'


export default function Helpsheet() {
  return (
    <div>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">Help</h1>
        
        {/* <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
            For more information about DataTables, please visit the <a target="_blank"
                href="https://datatables.net">official DataTables documentation</a>.</p> */}
        <Help/>
  
    </div>
    <Footer/>

</div>
  )
}
