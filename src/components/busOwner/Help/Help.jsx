import React, { useEffect,useState } from 'react';
import { getUsername } from '../../common/Helper/helper';
import axios from 'axios';
import './help.css'
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;


const Help=()=> {
    const [userID, setUserID]=useState('');
    const [formData, setFormData] = useState({ 
      // issueType:'',
      inquirybox: '' });
      // const [

      //     inquiryValue,
      //   //  setInquiryValue
      //   ] 
      //    = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // setInquiryValue(value); // update the inquiry value on every change
      };

      useEffect(() => {
        const fetchData = async () => {
          try {
            const { username, user_type } = await getUsername();
            setUserID(username);
            
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData(); 
      
      }, []); 
    
      function displayInfo() {
        // console.log(formData);
      }
    
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const {inquirybox}=formData;
    
        const formDataToSubmit=({
            // email:
            Email:userID,
            complain:inquirybox,
          });
          console.log(formDataToSubmit);
        try {
            // console.log(formDataToSubmit);
          // const response = await axios.post(`${API_BASE_URL}/submit-inquiry`, formData);
          // console.log(response.data);
          axios.post(`/api/busowner/inquiry`, formDataToSubmit).then((res) => {
            setFormData({ 
              // issueType:'',
              inquirybox: '' });
            console.log(res.data);
          });
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Raise your questions here </h6>
      </div>
      <div class="card-body">
        <form onSubmit={handleSubmit}>
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Contact us</th>
                  <th>Message</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    Approach us via:<br /><br />
                    <i class="fas fa-phone-square-alt"></i> +94 11 269 1136<br /><br />
                    <i class="fas fa-envelope"></i> No:45,Main Street, Bambalapitiya<br /><br />
                  </td>

                  <th>

                  {/* <select name='issueType' id='issueType' required onChange={handleChange}>
                    <option value=''>Select the type of inquiry</option>
                    <option value='Unregister the Bus'>Unregister the Bus</option>
                    <option value='Income issue'>Income issue</option>
                    <option value='Other'>Other</option>
                  </select> */}
                  <br/><br/>
                    <textarea style={{marginTop:"-40px"}}
                      placeholder='Describe your issue(Optional)'
                      id="inquirybox"
                      name="inquirybox"
                      className="inquirybox"
                      rows="10"
                      cols="50"
                      value={formData.inquirybox}
                      onChange={handleChange}
                    >
                        {/* <p>Your inquiry: {inquiryValue}</p> display the inquiry value */}
                    </textarea>
                    <br />
                    <button
                        type="submit"
                        className="btn btn-primary ml-1"
                        onClick={displayInfo}
                        style={{ borderRadius: '25px', fontSize:"16px",height:"50px",width:"120px" }}
                      >
                          Submit
                    </button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Help;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './help.css'
// import { useAuth0 } from '@auth0/auth0-react'; // add this import statement

// const API_BASE_URL = 'http://localhost:5000';

// const Help=()=> {
//     const [formData, setFormData] = useState({ 
//       issueType:'',
//       inquirybox: '' });
//     const { user } = useAuth0(); // get user object from Auth0
    
//     const handleChange = (e) => {
//       const { name, value } = e.target;
//       setFormData({ ...formData, [name]: value });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const {issueType,inquirybox}=formData;
  
//       const formDataToSubmit=({
//           email: user.email, // add user email to the form data
//           type_of_issue:issueType,
//           complain:inquirybox,
//         });
      
//       try {
//         axios.post(`${API_BASE_URL}/submit-inquiry`, formDataToSubmit).then((res) => {
//           setFormData({ 
//             issueType:'',
//             inquirybox: '' });
//           console.log(res.data);
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     return (
//       <div class="card shadow mb-4">
//         <div class="card-header py-3">
//           <h6 class="m-0 font-weight-bold text-primary">Raise your questions here </h6>
//         </div>
//         <div class="card-body">
//           <form onSubmit={handleSubmit}>
//             <div class="table-responsive">
//               <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
//                 <thead>
//                   <tr>
//                     <th>Contact us</th>
//                     <th>Message</th>
//                   </tr>
//                 </thead>
  
//                 <tbody>
//                   <tr>
//                     <td>
//                       Approach us via:<br /><br />
//                       <i class="fas fa-phone-square-alt"></i> +94 11 269 1136<br /><br />
//                       <i class="fas fa-envelope"></i> No:45,Main Street, Bambalapitiya<br /><br />
//                     </td>
  
//                     <th>
  
//                     <select name='issueType' id='issueType' required onChange={handleChange}>
//                       <option value=''>Select the type of inquiry</option>
//                       <option value='Unregister the Bus'>Unregister the Bus</option>
//                       <option value='Income issue'>Income issue</option>
//                       <option value='Other'>Other</option>
//                     </select>
//                     <br/><br/>
//                       <textarea
//                         placeholder='Describe your issue(Optional)'
//                         id="inquirybox"
//                         name="inquirybox"
//                         className="inquirybox"
//                         rows="6"
//                         cols="50"
//                         value={formData.inquirybox}
//                         onChange={handleChange}
//                       >
//                       </textarea>
//                       <br />
//                       <button type="submit" class="btn btn-primary ml-1">
//                         Submit
//                       </button>
//                     </th>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
  
//   export default Help;
