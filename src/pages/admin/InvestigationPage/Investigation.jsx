import React from 'react'
import InvestigationCard from '../../../components/admin/InvestigationCard/InvestigationCard';
import Footer from '../../../components/common/footer/Footer'

export default function Investigation(props) {
    console.log(props);    

  return (
    <div id="content" style={{width: '1150px'}}>

    <div className="container-fluid mr-5" style={{ width: '1100px' }}>
            <h3 className="h3 mb-2 text-gray-800 heading">Owner Inquiry</h3>
        
      
        <InvestigationCard/>
        
    </div>
    <Footer/>

</div>
    
  )
}
