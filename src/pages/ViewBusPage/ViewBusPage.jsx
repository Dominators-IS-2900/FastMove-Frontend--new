import React from 'react'
import BusownerTopBar from '../../components/BusownertopBar/BusownerTopBar'
import ArrivalTable from '../../components/ViewBusescard/ViewBusescard'
import Footer from '../../components/footer/Footer'

export default function ViewBus() {
 
  return (
    <div id="content" style={{width: '1150px'}}>
        <div class="container-fluid mr-5" style={{width: '1100px'}}>
            <h1 class="h3 mb-2 text-gray-800">MY BUSES</h1>
            <ArrivalTable/>
        </div>
            <Footer/>
    </div>
  )
}
