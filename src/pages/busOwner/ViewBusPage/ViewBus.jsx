import React from 'react'
import ViewBusescard from '../../../components/busOwner/ViewBusescard/ViewBusescard'
import Footer from '../../../components/common/footer/Footer'


export default function ViewBus() {
 
  return (
    <div id="content" style={{width: '1150px'}}>
        <div class="container-fluid mr-5" style={{width: '1100px'}}>
            <h1 class="h3 mb-2 text-gray-800">MY BUSES</h1>
            <ViewBusescard/>
        </div>
            <Footer/>
    </div>
  )
}
