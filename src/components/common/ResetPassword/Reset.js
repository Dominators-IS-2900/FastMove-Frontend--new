// import React, { useEffect } from 'react'
// import toast, { Toaster } from 'react-hot-toast';
// import { useFormik } from 'formik';
// import { resetPasswordValidation } from '../Helper/registration_validation/validate'
// import { resetPassword } from '../Helper/helper'
// import { useAuthStore } from '../store/store';
// import { useNavigate, Navigate } from 'react-router-dom';




// export default function Reset() {

//   const { username } = useAuthStore(state => state.auth);
//   const { user_type } = useAuthStore(state => state.auth);
//   const navigate = useNavigate();
  

//   const formik = useFormik({
//     initialValues : {
//       password : '',
//       confirm_pwd: ''
//     },
//     validate : resetPasswordValidation,
//     validateOnBlur: false,
//     validateOnChange: false,
//     onSubmit : async values => {
//       console.log(username)
//       console.log(user_type);
//       let resetPromise = await resetPassword({ username, password: values.password })
//       console.log(resetPromise)
//       if (resetPromise === 201) {
        
//         navigate("/");
//         return alert("Your Password has been reseted.");
    
//     }else{
//       return alert("Password reset failed");
//     }

//       toast.promise(resetPromise, {
//         loading: 'Updating...',
//         success: <b>Reset Successfully...!</b>,
//         error : <b>Could not Reset!</b>
//       });

//       resetPromise.then(function(){ navigate('/') })

//     }
//   })


 

//   return (
//     <div className="container mx-auto">

//       <Toaster position='top-center' reverseOrder={false}></Toaster>

//       <div className='flex justify-center items-center h-screen'>
//         <div  style={{ width : "50%"}}>

//           <div className="title flex flex-col items-center">
//             <h4 className='text-5xl font-bold'>Reset</h4>
//             <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
//               Enter new password.
//             </span>
//           </div>

//           <form className='py-20' onSubmit={formik.handleSubmit}>
//               <div className="textbox flex flex-col items-center gap-6">
//                   <input {...formik.getFieldProps('password')}  type="text" placeholder='New Password' />
//                   <input {...formik.getFieldProps('confirm_pwd')}  type="text" placeholder='Repeat Password' />
//                   <button  type='submit'>Reset</button>
//               </div>

//           </form>

//         </div>
//       </div>
//     </div>
//   )
// }
import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from '../Helper/registration_validation/validate'
import { resetPassword } from '../Helper/helper'
import { useAuthStore } from '../store/store';
import { useNavigate, Navigate } from 'react-router-dom';
import logo from '../../../Images/Logo.png'



export default function Reset() {

  const { username } = useAuthStore(state => state.auth);
  const { user_type } = useAuthStore(state => state.auth);
  const navigate = useNavigate();
  

  const formik = useFormik({
    initialValues : {
      password : '',
      confirm_pwd: ''
    },
    validate : resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      console.log(username)
      console.log(user_type);
      let resetPromise = await resetPassword({ username, password: values.password })
      console.log(resetPromise)
      if (resetPromise === 201) {
        
        navigate("/");
        return alert("Your Password has been reseted.");
    
    }else{
      return alert("Password reset failed");
    }

      toast.promise(resetPromise, {
        loading: 'Updating...',
        success: <b>Reset Successfully...!</b>,
        error : <b>Could not Reset!</b>
      });

      resetPromise.then(function(){ navigate('/') })

    }
  })


 

  return (
    <div className="container mx-auto"  style={{ backgroundColor: "white", borderWidth: "1px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)", marginLeft: "480px", marginTop: "70px" , borderRadius: "20px"}}>
      <div className="logo" style={{ marginLeft: "190px", marginTop: "-30px" }}>
        <img src={logo} alt="FastMove Logo" height="30" />
      </div>

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div  style={{ width : "50%"}}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold' 
             style={{ fontSize: "30px", color: "#004528",marginLeft: "215px", fontWeight: "bold"  }}>Reset</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'
             style={{ fontSize: "16px", color: "#6e7480" ,marginLeft:"-170px",marginTop:"30px"}}>
              Enter new password.
            </span>
          </div>

          <form className='py-20' onSubmit={formik.handleSubmit}>
              <div className="textbox flex flex-col items-center gap-6">
              <input
                  {...formik.getFieldProps('password')}
                  type="text"
                  placeholder="New Password"
                  style={{ marginTop: '10px', marginLeft: '100px', height: '50px',width: '250px' ,borderRadius: "25px"}}
                />
                  <br/>
                  <input {...formik.getFieldProps('confirm_pwd')}  type="text" placeholder='Repeat Password'
                  style={{ marginTop: '100px', marginLeft: '-250px',width: '250px', height: '50px' ,borderRadius: "25px"}} />

                  <button  type='submit'  style={{ marginTop: '200px', marginLeft: '-250px' ,borderRadius: "25px",height: '50px',fontSize: '16px',paddingBottom:"5px"}} >Reset</button>
              </div>

          </form>

        </div>
      </div>
    </div>
  )
}