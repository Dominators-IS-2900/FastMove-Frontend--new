import React from 'react'
import "./BusownerProfile.scss"

export default function BusownerProfile() {
  return (
    <div class="card shadow mb-4">
        <div class="card-header py-3">
        <div className="editButton">Edit</div>
            <h3 className="title">Information</h3>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h4 className="itemTitle">Jane Doe</h4>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Account Number:</span>
                  <span className="itemValue">
                    1248 6697 5236
                  </span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}




            
   
   