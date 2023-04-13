import React  from 'react';
import ConductorProfilecard from '../../../components/ConductorProfileCard/ConductorProfileCard';
import "./Profile.css"
        
function Profile() {

    return (
    
            <>
                <div class="container-fluid">  
                <h2 class="black">Edit Profile </h2><div id="content" style={{ width: '1100px' }}>
    
                    <ConductorProfilecard />                
                </div>
                </div>
                </>
      
    )
}

export default Profile;