import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// import "../../styles/auth.css";
import { checkEmail } from "./Helper/helper";
import { Link,useNavigate } from "react-router-dom";
const Registration = () => {

    const [ userData, setUserData ] = useState({
        user_type:"Passenger",
        fname:"",
        lname:"",
        email:"",
        password:""
    });

    const [ userErr, setUserErr] = useState({
        user_type:"",
        fname:"",
        lname:"",
        email:"",
        password:"",
        confirm_password:"",
    });
    const [ password, setPassword ] = useState();
    const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const userDataReg = {
    nextUrl: "/ownerDashboardpage",
    userData: userData,
  };
  
  async function handleSubmit(e) {    
   
    e.preventDefault();
       

    try{
      let status  = await checkEmail(userData);
      console.log(status);      
      if (status === 201) {
        
          navigate("/otpVerification", { state: userDataReg });
      
      }else{
        return alert("This email is already registered. Please login in.");
      }

    }catch (error) {
      
      return alert("Something went wrong. Try again!");
    }
      
   
  }

  return (
    <div className="registraion-container">
      <div className="registration-heading">
        <div className="heading-title">Welcome to FastMove </div>
        <div className="heading-subtitle">Register now</div>
      </div>

      <div className="registration-body">
        <Form  onSubmit={handleSubmit}>
          <Form.Group className=" form-group" controlId="formUserType">
            <Form.Label>Select user type</Form.Label>
            <Form.Select aria-label="Default select example"
            value={userData.user_type}
            name="user_type"
            onChange={handleChange}
            >
                
              <option value="passenger">Passenger</option>
              <option value="bus owner">Bus Owner</option>
              <option value="conductor">Conductor</option>
            </Form.Select>
            <Form.Text className="text-danger">{userErr.user_type}</Form.Text>
          </Form.Group>

          <div className="usernames">
            <Form.Group className=" form-group" controlId="formFname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                required
                autoComplete="first-name"
                placeholder="John"
                name="fname"
                value={userData.fname}
                onChange={handleChange}
              />
              <Form.Text className="text-danger">
                {userErr.fname}
              </Form.Text>
            </Form.Group>

            <Form.Group className=" form-group" controlId="formLname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                required
                autoComplete="family-name"
                placeholder="Doe"
                name="lname"
                value={userData.lname}
                onChange={handleChange}
              />
              <Form.Text className="text-danger">
              {userErr.lname}
              </Form.Text>
            </Form.Group>
          </div>

          <Form.Group className=" form-group" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              autoComplete="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
            <Form.Text className="text-danger">
            {userErr.email}
            </Form.Text>
          </Form.Group>

          <Form.Group className=" form-group" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
            <Form.Text className="text-danger">
            {userErr.password}
            </Form.Text>
          </Form.Group>

          <Form.Group className=" form-group" controlId="formConfirmSubject">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Confirm Password"
              name="lname"
              onChange={((e)=>{setPassword(e.target.value)})}
            />
            <Form.Text className="text-danger">
            {userErr.confirm_password}
            </Form.Text>
          </Form.Group>
          <Form.Group className="submit-registration">
          <div className="text-center py-4">
               <span className="text-gray-500">
                 Already Register?{" "}
                <Link className="text-red-500" to="/">
                  Login Now
                 </Link>
              </span>
            </div>
            
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Registration;

// import React, { Fragment, useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Toaster, toast } from "react-hot-toast";
// import { useFormik } from "formik";
// import { Dialog, Transition } from "@headlessui/react";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// import "./../../styles/Username.module.css"
// import convertToBase64 from "./Helper/convert";
// import { registerValidation } from "./Helper/registration_validation/validate";
// import { registerUser } from "./Helper/helper";

// const Register = () => {
//   const [file, setFile] = useState();
//   const navigate = useNavigate()

// const saveUser = (userData)=>{
//   console.log(userData);


// }
//   const formik = useFormik({
//     initialValues: {
//       fname: "",
//       lname: "",
//       email: "",
//       password:"",
//       confirmpassword:""
//     },
//     validate: registerValidation,
//     validateOnBlur: false,
//     validateOnChange: false,
//     onSubmit: async (values) => {
//       values = Object.assign(values, { profile: file || "" });

//       let registerPromise = registerUser(values);
//       toast.promise(registerPromise,{
//         loading:"Creating...",
//         success: <b>Register successfully....</b>,
//         error:<b>Could not register</b>
//       });
//       navigate("/")
//     },
//   });

//   const onUpload = async (e) => {
//     const base64 = await convertToBase64(e.target.files[0]);
//     //console.log(base64)
//     setFile(base64);
//   };
//   return (
//     <div className="container mx-auto">
//       <Toaster position="top-center" reverseOrder={false}></Toaster>
//       <div className="flex justify-center items-center h-screen">
//         <div className="glass" style={{ width: "45%" }}>
//           <div className="title flex flex-col items-center">
//             <h4 className="text-5xl font-bold">Reegister</h4>
//             <span className="py-4 text-xl w-2/3 text-center text-gray-500">
//               Happy to join you!
//             </span>
//           </div>
//           <form className="" onSubmit={formik.handleSubmit}>
//             <div className="profile flex justify-center py-1">
//               <label htmlFor="profile">
//                 {/* <img
//                   src={file || avatar}
//                   className="profile_img"
//                   alt="avatar"
//                 /> */}
//               </label>

//               <input
//                 type="file"
//                 onChange={onUpload}
//                 id="profile"
//                 name="profile"
//               />
//             </div>

//             <div className="textbox flex flex-col items-center gap-6">
//               <div className="name flex w-3/4 gap-10">
//                 <input
//                   {...formik.getFieldProps("fname")}
//                   autoComplete="first-name"
//                   type="text"
//                   className="text_box"
//                   placeholder="John"
//                 />
//                 <input
//                   {...formik.getFieldProps("lname")}
//                   autoComplete="family-name"
//                   type="text"
//                   className="text_box"
//                   placeholder="Doe"
//                 />
//               </div>
//               <input
//                   {...formik.getFieldProps("username")}
//                   autoComplete="username"
//                   type="text"
//                   className="text_box"
//                   placeholder="username"
//                 />
//               <input
//                 {...formik.getFieldProps("email")}
//                 autoComplete="email"
//                 type="email"
//                 className="text_box"
//                 placeholder="email"
//               />
//               <div className="name flex w-3/4 gap-10">
//                 <input
//                   {...formik.getFieldProps("password")}
//                   autoComplete="password"
//                   type="password"
//                   className="text_box"
//                   placeholder="password"
//                 />
//                 <input
//                   {...formik.getFieldProps("confirmpassword")}
//                   autoComplete="password"
//                   type="password"
//                   className="text_box"
//                   placeholder="Confirm password"
//                 />
//               </div>

//               <button className="btn" type="submit">
//                 Continue
//               </button>
//             </div>

//             <div className="text-center py-4">
//               <span className="text-gray-500">
//                 Already Register?{" "}
//                 <Link className="text-red-500" to="/">
//                   Login Now
//                 </Link>
//               </span>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
