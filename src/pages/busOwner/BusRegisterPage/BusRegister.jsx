import React from 'react'
import BusRegcard from '../../../components/busOwner/BusRegcard/BusRegcard';
import Footer from '../../../components/common/footer/Footer';

//popup notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BusRegister(props) {
    console.log(props);
    

  return (
    <div class='regcard'>
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">ADD NEW BUS</h1>
        
        {/* <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
            For more information about DataTables, please visit the <a target="_blank"
                href="https://datatables.net">official DataTables documentation</a>.</p> */}
        <BusRegcard/>
        <Footer/>
    </div>
    </div>

</div>
    
  )
}
