import React from 'react'
import IssueO from '../../../components/admin/IssueO/IssueO';
import Footer from '../../../components/common/footer/Footer'

export default function IssuesOwner(props) {
    console.log(props);    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div class="container-fluid mr-5" style={{width: '1100px'}}>
        <h3 class="h3 mb-2 text-gray-800">Owner Inquiry Details</h3>
        
      
        <IssueO/>
        
    </div>
    <Footer/>

</div>
    
  )
}