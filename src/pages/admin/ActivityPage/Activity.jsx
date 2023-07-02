import React from 'react'
import ActivityShedule from '../../../components/admin/ActivityShedule/ActivityShedule';
import Footer from '../../../components/common/footer/Footer';

export default function Activity(props) {
    console.log(props); 

 return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h3 class="h3 mb-2 text-gray-800">Activity Schedule</h3>

        <ActivityShedule/>
        
    </div>
    <Footer/>

</div>
    
  )
}