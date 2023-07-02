// import React, { useState } from "react";
// import { usernameValidate} from '../Helper/registration_validation/validate'
// import { verifyPassword } from '../Helper/helper'
// import toast, { Toaster } from 'react-hot-toast';
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { Link,useNavigate } from "react-router-dom";
// const Registration = () => {

//     const [ userData, setUserData ] = useState({
//         user_type:"Passenger",
//         email:"",
//         password:""
//     });

//     const [ userErr, setUserErr] = useState({
//         user_type:"",
//         email:"",
//         password:"",
       
//     });
//     const [ password, setPassword ] = useState();
//     const navigate = useNavigate();
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const userDataReg = {
//     nextUrl: "/ownerDashboardpage",
//     userData: userData,
//   };
  
//   async function handleSubmit(e) {    
   
//     e.preventDefault();
       

//     try{
//       let status  = await usernameValidate(userData);
//       console.log(status);      
//       if (status === 200) {    
//         console.log("cddc")    
      
//       let loginPromise = verifyPassword({ username:userData.email, password : userData.password })
//       toast.promise(loginPromise, {
//         loading: 'Checking...',
//         success : <b>Login Successfully...!</b>,
//         error : <b>Password Not Match!</b>
//       });

//       loginPromise.then(res => {
//         let { token } = res.data;
//         localStorage.setItem('token', token);
//         navigate('/profile')   }).catch(err=>{
//           console.log(err);
//         })     
          
//       }else{
//         return alert("User dosen't exist");
//       }


//     }catch (error) {
      
//       return alert("Something went wrong. Try again!");
//     }
      
   
//   }

//   return (
//     <div className="registraion-container">
//       <div className="registration-heading">
//         <div className="heading-title">Welcome to FastMove </div>
//         <div className="heading-subtitle">Log In</div>
//       </div>

//       <div className="registration-body">
//         <Form  onSubmit={handleSubmit}>
//         <div className="text-center py-4">
//                <span className="text-gray-500">
//                  Don't have an account?{" "}
//                 <Link className="text-red-500" to="/">
//                   Register
//                  </Link>
//               </span>
//             </div>
//           <Form.Group className=" form-group" controlId="formUserType">
//             <Form.Label>Select user type</Form.Label>
//             <Form.Select aria-label="Default select example"
//             value={userData.user_type}
//             name="user_type"
//             onChange={handleChange}
//             >
                
//               <option value="passenger">Passenger</option>
//               <option value="bus owner">Bus Owner</option>
//               <option value="conductor">Conductor</option>
//             </Form.Select>
//             <Form.Text className="text-danger">{userErr.user_type}</Form.Text>
//           </Form.Group>

//           <Form.Group className=" form-group" controlId="formEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               required
//               autoComplete="email"
//               placeholder="Email"
//               name="email"
//               value={userData.email}
//               onChange={handleChange}
//             />
//             <Form.Text className="text-danger">
//             {userErr.email}
//             </Form.Text>
//           </Form.Group>

//           <Form.Group className=" form-group" controlId="formPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               required
//               placeholder="password"
//               name="password"
//               value={userData.password}
//               onChange={handleChange}
//             />
//             <Form.Text className="text-danger">
//             {userErr.password}
//             </Form.Text>
//           </Form.Group>

          
//           <Form.Group className="submit-registration">
//           <div className="text-center py-4">
//                 <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to="/username">Recover Now</Link></span>
//               </div>
            
//             <Button variant="primary" type="submit">
//               Log In
//             </Button>
//           </Form.Group>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Registration;

import React, { useState } from "react";
import { usernameValidate} from '../Helper/registration_validation/validate'
import { verifyPassword } from '../Helper/helper'
import toast, { Toaster } from 'react-hot-toast';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link,useNavigate } from "react-router-dom";
import logo from '../../../Images/Logo.png'

const Logincard = () => {

    const [ userData, setUserData ] = useState({
        user_type:"Passenger",
        email:"",
        password:""
    });

    const [ userErr, setUserErr] = useState({
        user_type:"",
        email:"",
        password:"",
       
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
      let status  = await usernameValidate(userData);
      console.log(status);      
      if (status === 200) {    
        console.log("cddc")    
      
      let loginPromise = verifyPassword({ username:userData.email, password : userData.password })
      toast.promise(loginPromise, {
        loading: 'Checking...',
        success : <b>Login Successfully...!</b>,
        error : <b>Password Not Match!</b>
      });

      loginPromise.then(res => {
        let { token } = res.data;
        localStorage.setItem('token', token);
        navigate('/profileView')   }).catch(err=>{
          console.log(err);
        })     
          
      }else{
        return alert("User dosen't exist");
      }


    }catch (error) {
      
      return alert("Something went wrong. Try again!");
    }
      
   
  }

  return (
    <div className="registraion-container"  style={{ backgroundColor: "white", borderWidth: "1px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)", marginLeft: "480px", marginTop: "70px" , borderRadius: "20px"}}>
      <div className="logo" style={{ marginLeft: "90px", marginTop: "-30px" }}>
        <img src={logo} alt="FastMove Logo" height="30" />
      </div>
      <div className="registration-heading">
      <div className="heading-title" style={{ fontSize: "16px", color: "#6e7480" ,marginLeft:"15px"}}>Welcome to FastMove </div>
        <div className="heading-subtitle"  style={{ fontSize: "30px", color: "#004528",marginLeft: "100px", fontWeight: "bold"  }}>Log In</div>
      </div>

      <div className="registration-body">
        <Form  onSubmit={handleSubmit}>
        <div className="text-center py-4" style={{marginLeft:"0px"}}>
               <span className="text-gray-500">
                 Don't have an account?{" "}
                <Link className="text-red-500" to="/register">
                  Register
                 </Link>
              </span>
            </div>
          <Form.Group className=" form-group" controlId="formUserType">
            <Form.Label>Select user type</Form.Label>
            <Form.Select aria-label="Default select example"
            value={userData.user_type}
            name="user_type"
            onChange={handleChange}
            style={{ borderRadius: "25px"}}
            >
                
              <option value="passenger">Passenger</option>
              <option value="bus owner">Bus Owner</option>
              <option value="conductor">Conductor</option>
            </Form.Select>
            <Form.Text className="text-danger">{userErr.user_type}</Form.Text>
          </Form.Group>

          <Form.Group className=" form-group" controlId="formEmail" style={{ marginTop: "-15px"}}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              autoComplete="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              style={{ borderRadius: "25px" }}
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
              style={{ borderRadius: "25px" }}
            />
            <Form.Text className="text-danger">
            {userErr.password}
            </Form.Text>
          </Form.Group>

          
          <Form.Group className="submit-registration">
          <div className="text-center py-4" style={{ marginTop: "-35px"}}>
                <span className='text-gray-500'>Forgot Password? <Link className='text-red-500' to="/username">Recover Now</Link></span>
              </div>
            
            <Button variant="primary" type="submit" style={{ borderRadius: "25px", marginLeft: "70px" }}>
              Log In
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Logincard;

