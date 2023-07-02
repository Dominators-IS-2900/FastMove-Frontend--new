import React  from 'react';
import ConductorProfilecard from '../../../../components/conductor/ConductorProfileCard/ConductorProfileCard';

        
function Profile() {

    return (
    
            <>
                <div class="container-fluid">  
                <h2 class="black">Your Profile </h2><div id="content" style={{ width: '1100px'  }}>
    
                <ConductorProfilecard />                
                </div>
                </div>
                </>
      
    )
}

export default Profile;