import React from 'react'
import ViewBusescard from '../../../components/busOwner/ViewBusescard/ViewBusescard'
import Footer from '../../../components/common/footer/Footer'
import './ViewBus.css'


export default function ViewBus() {
 
  return (
    <div id="content" style={{width: '1150px'}}>
        <div class="container-fluid mr-5" style={{width: '1100px'}}>
          <div className='bustable'>
            <ViewBusescard/>
            </div>
        </div>
            <Footer/>
    </div>
  )
}
