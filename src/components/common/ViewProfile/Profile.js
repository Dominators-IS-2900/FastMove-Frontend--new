// import React, { useState } from 'react';
// import avatar from '../../../Images/profile.png';
// import toast, { Toaster } from 'react-hot-toast';
// import { useFormik } from 'formik';
// import { profileValidation } from '../Helper/registration_validation/validate';
// import convertToBase64 from '../Helper/convert';
// import useFetch from '../../../hooks/fetch.hook';
// import { updateUser } from '../Helper/helper';
// import { useNavigate } from 'react-router-dom';
// import styles from './Profile.css';
// import logo from '../../../Images/Logo.png';

// export default function Profile() {
//   const [file, setFile] = useState();
//   const [{ isLoading, apiData, serverError }] = useFetch();
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       firstName: apiData?.FName || '',
//       lastName: apiData?.LName || '',
//       email: apiData?.Email || '',
//       mobile: apiData?.Contact_No || '',
//       address: apiData?.address || '',
//     },
//     enableReinitialize: true,
//     validate: profileValidation,
//     validateOnBlur: false,
//     validateOnChange: false,
//     onSubmit: async (values) => {
//       values = await Object.assign(values, { profile: file || apiData?.ID_scancopy || '' });
//       let updatePromise = updateUser(values);

//       toast.promise(updatePromise, {
//         loading: 'Updating...',
//         success: <b>Update Successfully...!</b>,
//         error: <b>Could not Update!</b>,
//       });
//     },
//   });

//   /** formik doesn't support file upload so we need to create this handler */
//   const onUpload = async (e) => {
//     const base64 = await convertToBase64(e.target.files[0]);
//     setFile(base64);
//   };

//   // logout handler function
//   function handleLogout() {
//     const confirmLogout = window.confirm('Are you sure you want to logout?');
//     if (confirmLogout) {
//       localStorage.removeItem('token');
//       navigate('/login');
//     }
//   }

//   if (isLoading) return <h1 className={`${styles.text2xl} ${styles.fontBold}`}>isLoading</h1>;
//   if (serverError) return <h1 className={`${styles.textXl} ${styles.textRed500}`}>{serverError.message}</h1>;

//   return (
//     <div className={styles.pageContainer} style={{ backgroundColor: '#FFFFFF' , borderRadius:"20px", padding:"25px", marginLeft:"550px" }}>
//       <Toaster position='top-center' reverseOrder={false} />

//       <div className={styles.pageContent}>
//         <div className={styles.profileContainer}>
//         <div className="logo" style={{marginTop:"-30px"}} >
//             <img src={logo} alt="FastMove Logo" height="30" />
//           </div>
//           <div className={styles.title}>
//             <h2 className={styles.heading} style={{ color: '#004226',marginTop:"-10px" }}>Profile</h2>
//             <span className={styles.subheading}>Click 'Update' button to edit Information.</span>
//           </div>

//           <form className={styles.form} onSubmit={formik.handleSubmit}>
            

//             <div className={styles.textbox}>
//               <div className={styles.name} style={{marginTop:"20px"}}>
//               <label htmlFor="Branch">First Name:</label>
//                 <input
//                   {...formik.getFieldProps('firstName')}
//                   className={styles.input}
//                   type='text'
//                   placeholder='First Name'
//                 />
//                 <label htmlFor="Branch">Last Name:</label>
//                 <input
//                   {...formik.getFieldProps('lastName')}
//                   className={styles.input}
//                   type='text'
//                   placeholder='Last Name'
//                 />
//               </div>

//               <div className={styles.name} style={{marginTop:"20px"}}>
//               <label htmlFor="Branch" style={{marginTop:"15px"}}>Telephone Number:</label>
//                 <input
//                   {...formik.getFieldProps('mobile')}
//                   className={styles.input}
//                   type='text'
//                   placeholder='Mobile No.'
//                 />
//                 <label htmlFor="Branch" style={{marginTop:"15px"}}>Email Address:</label>
//                 <input
//                   {...formik.getFieldProps('email')}
//                   className={styles.input}
//                   type='text'
//                   placeholder='Email*'
//                 />
//               </div>

//               <label htmlFor="Branch" style={{marginTop:"15px"}}>Home Address:</label>
//               <input {...formik.getFieldProps('address')} className={styles.input} type="text" placeholder='Address'/>
              
//               <br/>
//               <button type='submit' style={{borderRadius:"25px",fontSize:"14px",height:"45px",width:"100px",padding:"5px",marginTop:"15px", marginRight:"20px",backgroundColor:"#f2f2f2",color:"#8a8c99"}}>
//                 Edit</button>
//               <button className={styles.button} type='submit' style={{borderRadius:"25px",fontSize:"14px",height:"45px",width:"100px",padding:"5px",marginTop:"15px"}}>
//                 Update</button>

//             </div>

//             <div className={styles.logoutContainer}>
//               <span className={styles.logoutText}>
//                 Come back later? <button onClick={handleLogout} className={styles.logoutButton} style={{borderRadius:"25px",fontSize:"14px",height:"45px",width:"100px",padding:"5px",backgroundColor:"#560d0d",marginTop:"10px"}}>
//                   Logout</button>
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import avatar from '../../../Images/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidation } from '../Helper/registration_validation/validate';
import convertToBase64 from '../Helper/convert';
import useFetch from '../../../hooks/fetch.hook';
import { updateUser } from '../Helper/helper';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.css';
import logo from '../../../Images/Logo.png';


export default function Profile() {
  const [file, setFile] = useState();
  const [{ isLoading, apiData, serverError }] = useFetch();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);

  const validateProfile = (values) => {
    const errors = {};

    // Add validation rules for other fields if needed

    if (!values.mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^0\d{9}$/.test(values.mobile)) {
      errors.mobile = 'Invalid mobile number. It should be a 10-digit number starting with 0';
    }

    if (!values.firstName) {
      errors.firstName = 'First name is required';
    } else if (!/^[A-Z][a-z]*$/.test(values.firstName)) {
      errors.firstName = 'Please enter a valid first name';
    }

    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    } else if (!/^[A-Z][a-z]*$/.test(values.lastName)) {
      errors.lastName = 'Please enter a valid first name';
    }

    // if (!values.email) {
    //   errors.email = 'Email is required';
    // } else if (!isEmail(values.email)) {
    //   errors.email = 'Please enter a valid email address';
    // }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: apiData?.FName || '',
      lastName: apiData?.LName || '',
      email: apiData?.Email || '',
      mobile: apiData?.Contact_No || '',
      address: apiData?.address || '',
    },
    enableReinitialize: true,
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      if (!editMode) {
        return;
      }
    
      console.log(values)
      values = await Object.assign(values, { profile: file || apiData?.ID_scancopy || '' });
      let updatePromise = updateUser(values);
    
      toast.promise(updatePromise, {
        loading: 'Updating...',
        success: <b>Profile is updated Successfully...!</b>,
        error: <b>Could not Update!</b>,
      });
    },
    
  });


  // logout handler function
  function handleLogout() {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  }

  if (isLoading) return <h1 className={`${styles.text2xl} ${styles.fontBold}`}>isLoading</h1>;
  if (serverError) return <h1 className={`${styles.textXl} ${styles.textRed500}`}>{serverError.message}</h1>;

  return (
    <div className={styles.pageContainer} style={{ backgroundColor: '#FFFFFF' , borderRadius:"20px", padding:"25px", marginLeft:"550px" }}>
      <Toaster position='top-center' reverseOrder={false} />

      <div className={styles.pageContent}>
        <div className={styles.profileContainer}>
        <div className="logo" style={{marginTop:"-30px"}} >
            <img src={logo} alt="FastMove Logo" height="30" />
          </div>
          <div className={styles.title}>
            <h2 className={styles.heading} style={{ color: '#004226',marginTop:"-10px" }}>Profile</h2>
            <span className={styles.subheading}>Click 'Edit' button to modify Information.</span>
          </div>

          <form className={styles.form} onSubmit={formik.handleSubmit}>
            

            <div className={styles.textbox}>
              <div className={styles.name} style={{marginTop:"20px"}}>
              <label htmlFor="Branch">First Name:</label>
                <input
                name='Fname'
                id='Fname'
                  {...formik.getFieldProps('firstName')}
                  className={styles.input}
                  type='text'
                  placeholder='First Name'
                  readOnly={!editMode} // Add readOnly prop based on editMode
                />
                
                <label htmlFor="Branch">Last Name:</label>
                <input
                  {...formik.getFieldProps('lastName')}
                  className={styles.input}
                  type='text'
                  placeholder='Last Name'
                  readOnly={!editMode} // Add readOnly prop based on editMode
                />
              </div>

              <div className={styles.name} style={{marginTop:"20px"}}>
              <label htmlFor="Branch" style={{marginTop:"15px"}}>Telephone Number:</label>
                <input
                  {...formik.getFieldProps('mobile')}
                  className={styles.input}
                  type='text'
                  placeholder='Mobile No.'
                  readOnly={!editMode} // Add readOnly prop based on editMode
                />
                <label htmlFor="Branch" style={{marginTop:"15px"}}>Email Address:</label>
                <input
                  {...formik.getFieldProps('email')}
                  className={styles.input}
                  type='text'
                  placeholder='Email*'
                  readOnly 
                />
              </div>

              <label htmlFor="Branch" style={{marginTop:"15px"}}>Home Address:</label>
              <input {...formik.getFieldProps('address')} className={styles.input} type="text" placeholder='Address' readOnly={!editMode} // Add readOnly prop based on editMode
/>
              
              <br/>
              {editMode ? (
                <button type='submit' style={{borderRadius:"25px",fontSize:"14px",height:"45px",width:"100px",padding:"5px",marginTop:"15px", marginRight:"20px"}}>
                  Update</button>
              ) : (
                <button type='button' onClick={() => setEditMode(true)} style={{borderRadius:"25px",fontSize:"16px",height:"45px",width:"100px",padding:"5px",marginTop:"15px", marginRight:"20px"}}>
                  <i class='fas fa-edit'></i>
                  Edit</button>
              )}

            </div>

            <div className={styles.logoutContainer}>
              <span className={styles.logoutText} style={{marginLeft:"200px"}}>
                Come back later? <button onClick={handleLogout} className={styles.logoutButton} style={{borderRadius:"25px",fontSize:"16px",height:"45px",width:"100px",padding:"5px",backgroundColor:"#560d0d",marginTop:"10px"}}>
                <i class="fa fa-sign-out"></i>Logout
                  </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
