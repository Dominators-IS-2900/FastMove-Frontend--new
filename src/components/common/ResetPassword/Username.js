// import React, { useState } from "react";
// import { usernameValidate} from '../Helper/registration_validation/validate'
// import { verifyPassword } from '../Helper/helper'
// import toast, { Toaster } from 'react-hot-toast';
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useAuthStore } from '../store/store';

// import { Link,useNavigate } from "react-router-dom";
// const Username = () => {
//   const setUsername = useAuthStore(state => state.setUsername);
//   const setUsertype = useAuthStore(state => state.setUsertype);

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
//     nextUrl: "/reset",
//     userData: userData,
//   };
  
//   async function handleSubmit(e) {    
   
//     e.preventDefault();
//     console.log(userData.email)
//     setUsername(userData.email);
//     setUsertype(userData.user_type);

//     try{
//       let status  = await usernameValidate(userData);
//       console.log(status);      
//       if (status === 200) {    
//         navigate("/otpVerification", { state: userDataReg });
      
          
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
//         <div className="heading-title"> FastMove</div>
//         <div className="heading-subtitle">Reset Password</div>
//       </div>

//       <div className="registration-body">
//         <Form  onSubmit={handleSubmit}>
      
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

          
//           <Form.Group className="submit-registration">
          
//             <Button variant="primary" type="submit">
//               Confirm
//             </Button>
//           </Form.Group>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default Username;

import React, { useState } from "react";
import { usernameValidate} from '../Helper/registration_validation/validate'
import { verifyPassword } from '../Helper/helper'
import toast, { Toaster } from 'react-hot-toast';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuthStore } from '../store/store';
import logo from '../../../Images/Logo.png'

import { Link,useNavigate } from "react-router-dom";
const Username = () => {
  const setUsername = useAuthStore(state => state.setUsername);
  const setUsertype = useAuthStore(state => state.setUsertype);

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
    nextUrl: "/reset",
    userData: userData,
  };
  
  async function handleSubmit(e) {    
   
    e.preventDefault();
    console.log(userData.email)
    setUsername(userData.email);
    setUsertype(userData.user_type);

    try{
      let status  = await usernameValidate(userData);
      console.log(status);      
      if (status === 200) {    
        navigate("/otpVerification", { state: userDataReg });
      
          
      }else{
        return alert("User dosen't exist");
      }


    }catch (error) {
      
      return alert("Something went wrong. Try again!");
    }
      
   
  }

  return (
    <div className="registraion-container"  style={{ backgroundColor: "white", borderWidth: "1px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)", marginLeft: "550px", marginTop: "70px" , borderRadius: "20px"}}>
      <div className="logo" style={{ marginLeft: "60px", marginTop: "-30px" }}>
        <img src={logo} alt="FastMove Logo" height="30" />
      </div>
      <div className="registration-heading">
        {/* <div className="heading-title"> FastMove</div> */}
        <div className="heading-subtitle"  style={{ fontSize: "30px", color: "#004528",marginLeft: "5px", fontWeight: "bold"  }}>Reset Password</div>
      </div>

      <div className="registration-body">
        <Form  onSubmit={handleSubmit}>
      
          <Form.Group className=" form-group" controlId="formUserType"  style={{ marginTop: "20px"}}>
            <Form.Label>Select user type</Form.Label>
            <Form.Select aria-label="Default select example"
            value={userData.user_type}
            name="user_type"
            onChange={handleChange}
            style={{ borderRadius: "25px" }}
            >
                
              <option value="passenger">Passenger</option>
              <option value="bus owner">Bus Owner</option>
              <option value="conductor">Conductor</option>
            </Form.Select>
            <Form.Text className="text-danger">{userErr.user_type}</Form.Text>
          </Form.Group>

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
              style={{ borderRadius: "25px" }}
            />
            <Form.Text className="text-danger">
            {userErr.email}
            </Form.Text>
          </Form.Group>

          
          <Form.Group className="submit-registration">
          
            <Button variant="primary" type="submit" style={{ borderRadius: "25px", marginLeft: "40px", marginTop:"10px"}}>
              Confirm
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Username;