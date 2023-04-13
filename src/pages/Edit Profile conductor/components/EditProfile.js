import React  from 'react';
import ConductorProfilecard from '../../../components/ConductorProfileCard/ConductorProfileCard';
import "./EditProfile.css"

function Profile() {

    return (
        
    
        
        <><h2>Edit Profile </h2><div id="content" style={{ width: '1000px' }}>


<div class="m-4">
    <div class="row g-2">
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text">
                    <span class="bi-person"></span>
                </span>
                <input type="text" class="form-control" placeholder="Username"/>
            </div>
        </div>
        <div class="col-6">
            <div class="input-group">            
                <input type="text" class="form-control" placeholder="Amount"/>
                <span class="input-group-text">.00</span>
            </div>
        </div>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text">https://www.</span>
                <input type="text" class="form-control" placeholder="Domain name"/>
            </div>
        </div>
        <div class="col-6">
            <div class="input-group">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" placeholder="US Dollar"/>
                <span class="input-group-text">.00</span>
            </div>
        </div>
    </div>
</div>
            <button type="button" class="btn btn-primary ml-1 mb-3 float-right"> UPDATE</button>
        </div></>



    
       
        
        
           
    )
}

export default Profile;