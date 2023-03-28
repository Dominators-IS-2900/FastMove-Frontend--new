import React from 'react'
import "./dashboard.css"
import { Route, Routes, Link } from "react-router-dom"
import TopBar from '../../components/topBar/TopBar'
import SideBar from '../../components/sidebar/SideBar'

export default function DashBoardConductor() {
  return (

    <><div id="content" style={{ width: "1125px" }}>




          <div class="container-fluid">


              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <Link to="/">
                      <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                  </Link>
                    
                  <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                      class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
              </div>


              <div class="row">


                  <div class="col-xl-3 col-md-6 mb-4">
                      <div class="card border-left-primary shadow h-100 py-2">
                          <div class="card-body">
                              <div class="row no-gutters align-items-center">
                                  <div class="col mr-2">
                                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                          Earnings (Monthly)</div>
                                      <div class="h5 mb-0 font-weight-bold text-gray-800">View Earnings</div>
                                  </div>
                                  <div class="col-auto">
                                      <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>

          </div>



      </div></>
            
  )
}
