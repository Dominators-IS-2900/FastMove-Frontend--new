import React from 'react'
import Footer from '../../../components/footer/Footer'
import ADashBoard from '../Adashboard/ADashBoard'


export default function AdminMain() {
  return (
    <div>
          <div id="content-wrapper" class="d-flex flex-column">
            <ADashBoard/>
            <div style={{marginTop:"300px"}}>
              <Footer />
            </div>
          
        </div>
      
    </div>
  )
}
