import React from 'react'
import ActivityShedule from '../../components/ActivityShedule/ActivityShedule';
import Footer from '../../components/footer/Footer'
export default function Activity(props) {
    console.log(props);
    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h1 class="h3 mb-2 text-gray-800">Activity Scedule</h1>
        <button type="button" class="btn btn-primary ml-1 mb-3">ADD RECORD</button>
      
  

        <ActivityShedule/>
        
    </div>
    <Footer/>

</div>
    
  )
}

