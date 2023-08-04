// import React, { useEffect, useState } from "react";
// import logo from "../../Images/Logo.png"
// import convertToBase64 from '../common/Helper/convert';
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Swal from "sweetalert2";
// import { storage } from "../../config/firebase";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // import "../../styles/auth.css";
// import { checkEmail } from "./Helper/helper";
// import { Link,useNavigate } from "react-router-dom";
// const Registration = () => {
    
//     const [isLoading, setIsLoading] = useState(false);

//     let [ userData, setUserData ] = useState({
//         user_type:"Passenger",
//         fname:"",
//         lname:"",
//         email:"",
//         contactno:"",
//         address:"",
//         password:"",
        
//     });
//     const [file, setFile] = useState()

//     const [ userErr, setUserErr] = useState({
//         user_type:"",
//         fname:"",
//         lname:"",
//         email:"",
//         contactno:"",
//         address:"",        
//         password:"",
//         confirm_password:"",
//     });

//     const onUpload = async e => {
      
//       setFile(e.target.files[0]);
      
//     }
//   //   const [image, setImage] = useState(null);
//   // const [isPicChnaged, setIsPicChnaged] = useState(false);



//     const [ password, setPassword ] = useState();
//     const navigate = useNavigate();
//   const handleChange = async(event) => {
//     const { name, value } = event.target;
   
//         setUserData((prevValues) => ({
//           ...prevValues,
//           [name]: value,
//         }));
  
//   };


  // const userDataReg = {
  //   nextUrl: "/ownerdashboard",
  //   userData: userData, 

 
  // };
  
  
//   async function handleSubmit(e) {    
   
//     e.preventDefault();    
//     setIsLoading(true);
//     console.log(isLoading)
//     if(isLoading){
//       toast.loading("Loading...........")
//     }         

//     try{ 
           
//       try {
//         const storageRef =storage.ref();
//         const fileRef = storageRef.child(`ID/${userData.fname}`);
//         await fileRef.put(file);      
//         const downloadURL = await fileRef.getDownloadURL();
//         userData = Object.assign(userData, { ID: downloadURL || '' });
        
//       } catch (error) {
//         console.log(error)
//       }     
      
//       let status  = await checkEmail(userData);
        
//       if (status === 201) {
        
//           navigate("/otpVerification", { state: userDataReg });
      
//       }else{
//         return alert("This email is already registered. Please login in.");
//       }

//     }catch (error) {
      
//       return alert("Something went wrong. Try again!");
//     }
   
      
   
//   }

//   return (
//     <div className="registraion-container" style={{ backgroundColor: "white",borderRadius:"20px", borderWidth: "1px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)", marginLeft: "480px", marginTop: "70px" }}>
//       <div className="logo" style={{ marginLeft: "110px", marginTop: "-30px" }}>
//         <img src={logo} alt="FastMove Logo" height="30" />
//       </div>
//       <div className="registration-heading">
//         <div className="heading-title" style={{ fontSize: "16px", color: "#6e7480" }}>Welcome to FastMove </div>
//         <div className="heading-subtitle" style={{ fontSize: "30px", color: "#004528" }}>Get Registered now</div>
//       </div>

//       <div className="registration-body">
      
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className=" form-group" controlId="formUserType">
//             <br />
//             <Form.Label style={{ color: "#6e7480" }}>Select user type</Form.Label>
//             <Form.Select
//               aria-label="Default select example"
//               value={userData.user_type}
//               name="user_type"
//               onChange={handleChange}
//               style={{ borderRadius: "25px" }}
//             >
//               <option value="passenger">Passenger</option>
//               <option value="bus owner">Bus Owner</option>
//               <option value="conductor">Conductor</option>
//             </Form.Select>
//             <Form.Text className="text-danger">{userErr.user_type}</Form.Text>
//           </Form.Group>

//           <div className="usernames">
//             <Form.Group className=" form-group" controlId="formFname">
//               <Form.Label style={{ color: "#6e7480" }}>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 required
//                 autoComplete="first-name"
//                 placeholder="John"
//                 name="fname"
//                 value={userData.fname}
//                 onChange={handleChange}
//                 style={{ borderRadius: "25px", color: "black" }}
//               />
//               <Form.Text className="text-danger">{userErr.fname}</Form.Text>
//             </Form.Group>

//             <Form.Group className=" form-group" controlId="formLname">
//               <Form.Label style={{ color: "#6e7480" }}>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 required
//                 autoComplete="family-name"
//                 placeholder="Doe"
//                 name="lname"
//                 value={userData.lname}
//                 onChange={handleChange}
//                 style={{ borderRadius: "25px", color: "black" }}
//               />
//               <Form.Text className="text-danger">{userErr.lname}</Form.Text>
//             </Form.Group>
//           </div>

//           <Form.Group className=" form-group" controlId="formEmail">
//             <Form.Label style={{ color: "#6e7480" }}>Email</Form.Label>
//             <Form.Control
//               type="email"
//               required
//               autoComplete="email"
//               placeholder="Email"
//               name="email"
//               value={userData.email}
//               onChange={handleChange}
//               style={{ borderRadius: "25px", color: "black", backgroundColor: "#f1f1f1" }}
//             />
//             <Form.Text className="text-danger">{userErr.email}</Form.Text>
//           </Form.Group>

//           <Form.Group className=" form-group" controlId="formcontactno"> 
//               <Form.Label style={{ color: "#6e7480" }}>Telephone Number</Form.Label>
//                         <Form.Control
//                           type="text"
//                           required
//                           autoComplete="contactno"
//                           placeholder="0771234567"
//                           name="contactno"
//                           value={userData.contactno}
//                           onChange={handleChange}
//                           style={{ borderRadius: "25px", color: "black" }}/>
//               <Form.Text className="text-danger">{userErr.contactno}</Form.Text>
//           </Form.Group>

//           <Form.Group className=" form-group" controlId="formaddress"> 
//               <Form.Label style={{ color: "#6e7480" }}>Home Address</Form.Label>
//                         <Form.Control
//                           type="text"
//                           required
//                           autoComplete="address"
//                           placeholder=""
//                           name="address"
//                           value={userData.address}
//                           onChange={handleChange}
//                           style={{ borderRadius: "25px", color: "black" }}/>
//               <Form.Text className="text-danger">{userErr.address}</Form.Text>
//           </Form.Group>

//           <Form.Group className=" form-group" controlId="ID"> 
//               <Form.Label style={{ color: "#6e7480" }}>ID Scan Copy</Form.Label>
//                         <Form.Control
//                           type="file"
//                           required
//                           autoComplete="ID"
//                           placeholder=""
//                           name="ID"
//                           onChange={onUpload}
//                           style={{ borderRadius: "25px" }}/>
//               <Form.Text className="text-danger">{userErr.ID}</Form.Text>
//           </Form.Group>


//           <Form.Group className=" form-group" controlId="formPassword">
//             <Form.Label style={{ color: "#6e7480", marginTop: "20px" }}>Password</Form.Label>
//             <Form.Control
//               type="password"
//               required
//               placeholder="password"
//               name="password"
//               value={userData.password}
//               onChange={handleChange}
//               style={{ borderRadius: "25px", color: "black" }}
//             />
//             <Form.Text className="text-danger">{userErr.password}</Form.Text>
//           </Form.Group>

//           <Form.Group className=" form-group" controlId="formConfirmSubject">
//             <Form.Label style={{ color: "#6e7480" }}>Confirm Password</Form.Label>
//             <Form.Control
//               type="password"
//               required
//               placeholder="Confirm Password"
//               name="confirm_password"
//               value={password}
//               onChange={(e) => {
//                 setPassword(e.target.value);
//                 setUserErr((prevErrors) => ({
//                   ...prevErrors,
//                   confirm_password: e.target.value === userData.password ? "" : "Passwords do not match"
//                 }));
//               }}
//               style={{ borderRadius: "25px", color: "black" }}
//             />
//             <Form.Text className="text-danger">{userErr.confirm_password}</Form.Text>
//           </Form.Group>
//           <Form.Group className="submit-registration">
//             <div className="text-center py-4" style={{ marginLeft: "-40px", marginTop: "-40px" }}>
//               <span className="text-gray-500">
//                 Already Registered?{" "}
//                 <Link className="text-red-500" to="/login">
//                   Login Now
//                 </Link>
//               </span>
//             </div>

//             <Button variant="primary" type="submit" style={{ borderRadius: "25px", marginLeft: "70px",height:"50px",width:"120px" }}>
//               Register
//             </Button>
           
//             </Form.Group>
//         </Form>

//       </div>
//     </div>
//   );
//    };

// export default Registration;


import React, { useEffect, useState } from "react";
import logo from "../../Images/Logo.png";
import convertToBase64 from "../common/Helper/convert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import { storage } from "../../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkEmail } from "./Helper/helper";
import { Link, useNavigate } from "react-router-dom";
import { isEmail } from 'validator';



const Registration = () => {
  const [emailError, setEmailError] = useState('');
  const [contactNoError, setContactNoError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState(""); 
  const [passwordError, setPasswordError] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    user_type: "Passenger",
    fname: "",
    lname: "",
    email: "",
    contactno: "",
    address: "",
    password: "",
  });
  const [file, setFile] = useState();
  const [userErr, setUserErr] = useState({
    user_type: "",
    fname: "",
    lname: "",
    email: "",
    contactno: "",
    address: "",
    password: "",
    confirm_password: "",
  });
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

     // Email validation
  if (name === 'email') {
    if (!isEmail(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }
  // Contact number validation
  if (name === "contactno") {
    if (!/^(0)\d{9}$/.test(value)) {
      setContactNoError("Please enter a valid Telephone number starting with 0");
    } else {
      setContactNoError("");
    }
  }

  // First name validation
  if (name === "fname") {
    if (!/^[A-Z][a-z]*$/.test(value)) {
      if (value === "") {
        setFirstNameError("First name is required");
      } else if (!/^[A-Z]/.test(value)) {
        setFirstNameError("First name should start with a capital letter");
      } else if (!/^[A-Za-z\s]+$/.test(value)) {
        setFirstNameError("First name should contain only letters");
      } else {
        setFirstNameError("Please enter a valid first name");
      }
    } else {
      setFirstNameError("");
    }
  }

  // Last name validation
  if (name === "lname") {
    if (!/^[A-Z][a-z]*$/.test(value)) {
      if (value === "") {
        setLastNameError("Last name is required");
      } else if (!/^[A-Z]/.test(value)) {
        setLastNameError("Last name should start with a capital letter");
      } else if (!/^[A-Za-z\s]+$/.test(value)) {
        setLastNameError("Last name should contain only letters");
      } else {
        setLastNameError("Please enter a valid last name");
      }
    } else {
      setLastNameError("");
    }
  }

   // Password validation
   if (name === "password") {
    const minLength = 8;
    const hasCapitalLetter = /[A-Z]/.test(value);
    const hasSimpleLetter = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(value);

    let passwordError = "";
    if (value.length < minLength) {
      passwordError = `Password should be at least ${minLength} characters long.`;
    } else {
      if (!hasCapitalLetter) {
        passwordError += "Password should have at least one capital letter. ";
      }
      if (!hasSimpleLetter) {
        passwordError += "Password should have at least one simple letter. ";
      }
      if (!hasNumber) {
        passwordError += "Password should have at least one number. ";
      }
      if (!hasSpecialCharacter) {
        passwordError += "Password should have at least one special character. ";
      }
    }

    setPasswordError(passwordError);
  }

    setUserData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onUpload = (e) => {
    setFile(e.target.files[0]);
    
  };

  const userDataReg = {
    nextUrl: "/ownerdashboard",
    userData: userData, 

 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(userDataReg);

    if (isLoading) {
      toast.loading("Loading...........");
    }

    try {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(`ID/${userData.fname}`);
      await fileRef.put(file);
      const downloadURL = await fileRef.getDownloadURL();
      userData.ID = downloadURL || "";

      let status = await checkEmail(userData);

      if (status === 201) {
        navigate("/otpVerification", { state:  userDataReg  });
      } else {
        return alert("This email is already registered. Please login in.");
      }
    } catch (error) {
      return alert("Something went wrong. Try again!");
    }
  };

  return (
    <div
      className="registraion-container"
      style={{
        backgroundColor: "white",
        borderRadius: "20px",
        borderWidth: "1px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
        marginLeft: "480px",
        marginTop: "70px",
      }}
    >
      <div className="logo" style={{ marginLeft: "110px", marginTop: "-30px" }}>
        <img src={logo} alt="FastMove Logo" height="30" />
      </div>
      <div className="registration-heading">
        <div className="heading-title" style={{ fontSize: "16px", color: "#6e7480" }}>
          Welcome to FastMove
        </div>
        <div className="heading-subtitle" style={{ fontSize: "30px", color: "#004528" }}>
          Get Registered now
        </div>
      </div>

      <div className="registration-body">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="form-group" controlId="formUserType">
            <br />
            <Form.Label style={{ color: "#6e7480" }}>Select user type</Form.Label>
            <Form.Select
              aria-label="Default selectexample"
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

          <div className="usernames">
            <Form.Group className="form-group" controlId="formFname">
              <Form.Label style={{ color: "#6e7480" }}>First Name</Form.Label>
                <Form.Control
                  type="text"
                  required
                  autoComplete="first-name"
                  placeholder="John"
                  name="fname"
                  value={userData.fname}
                  onChange={handleChange}
                  isInvalid={!!firstNameError}
                />
                <Form.Control.Feedback type="invalid">{firstNameError}</Form.Control.Feedback>
              <Form.Text className="text-danger">{userErr.fname}</Form.Text>
            </Form.Group>

            <Form.Group className="form-group" controlId="formLname">
              <Form.Label style={{ color: "#6e7480" }}>Last Name</Form.Label>
              <Form.Control
                  type="text"
                  required
                  autoComplete="family-name"
                  placeholder="Doe"
                  name="lname"
                  value={userData.lname}
                  onChange={handleChange}
                  isInvalid={!!lastNameError}
                />
                <Form.Control.Feedback type="invalid">{lastNameError}</Form.Control.Feedback>

              <Form.Text className="text-danger">{userErr.lname}</Form.Text>
            </Form.Group>
          </div>

          <Form.Group className="form-group" controlId="formEmail">
            <Form.Label style={{ color: "#6e7480" }}>Email</Form.Label>
            <Form.Control
                type="email"
                required
                autoComplete="email"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                style={{ borderRadius: "25px", color: "black", backgroundColor: "#f1f1f1" }}
                isInvalid={!!emailError}
              />
              {emailError && <Form.Control.Feedback type="invalid">{emailError}</Form.Control.Feedback>}
            <Form.Text className="text-danger">{userErr.email}</Form.Text>
          </Form.Group>

          <Form.Group className="form-group" controlId="formcontactno">
            <Form.Label style={{ color: "#6e7480" }}>Telephone Number</Form.Label>
            <Form.Control
              type="text"
              required
              autoComplete="contactno"
              placeholder="0771234567"
              name="contactno"
              value={userData.contactno}
              onChange={handleChange}
              isInvalid={!!contactNoError}
            />
            {contactNoError && <Form.Control.Feedback type="invalid">{contactNoError}</Form.Control.Feedback>}
            <Form.Text className="text-danger">{userErr.contactno}</Form.Text>
          </Form.Group>

          <Form.Group className="form-group" controlId="formaddress">
            <Form.Label style={{ color: "#6e7480" }}>Home Address</Form.Label>
            <Form.Control
              type="text"
              required
              autoComplete="address"
              placeholder=""
              name="address"
              value={userData.address}
              onChange={handleChange}
              style={{ borderRadius: "25px", color: "black" }}
            />
            <Form.Text className="text-danger">{userErr.address}</Form.Text>
          </Form.Group>

          <Form.Group className="form-group" controlId="ID">
            <Form.Label style={{ color: "#6e7480" }}>ID Scan Copy</Form.Label>
            <Form.Control
              type="file"
              required
              autoComplete="ID"
              placeholder=""
              name="ID"
              onChange={onUpload}
              style={{ borderRadius: "25px"}}
            />
            <Form.Text className="text-danger">{userErr.ID}</Form.Text>
          </Form.Group>

          <Form.Group className="form-group" controlId="formPassword">
            <Form.Label style={{ color: "#6e7480", marginTop: "20px" }}>Password</Form.Label>
            <Form.Control
                type="password"
                required
                placeholder="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                style={{ borderRadius: "25px", color: "black" }}
                isInvalid={!!passwordError}
              />
              {passwordError && (
                <Form.Control.Feedback type="invalid">
                  {passwordError}
                </Form.Control.Feedback>
              )}
            <Form.Text className="text-danger">{userErr.password}</Form.Text>
          </Form.Group>

          <Form.Group className="form-group" controlId="formConfirmSubject">
            <Form.Label style={{ color: "#6e7480" }}>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Confirm Password"
              name="confirm_password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setUserErr((prevErrors) => ({
                  ...prevErrors,
                  confirm_password: e.target.value === userData.password ? "" : "Passwords do not match",
                }));
              }}
              style={{ borderRadius: "25px", color: "black" }}
            />
            <Form.Text className="text-danger">{userErr.confirm_password}</Form.Text>
          </Form.Group>
          <Form.Group className="submit-registration">
            <div className="text-center py-4" style={{ marginLeft: "-40px", marginTop: "-40px" }}>
              <span className="text-gray-500">
                Already Registered?{" "}
                <Link className="text-red-500" to="/login">
                  Login Now
                </Link>
              </span>
            </div>

            <Button variant="primary" type="submit" style={{ borderRadius: "25px", marginLeft: "70px", height: "50px", width: "120px" }}>
              Register
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
