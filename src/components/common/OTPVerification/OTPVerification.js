import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from '../../../Images/Logo.png'
import { CgSpinner } from "react-icons/cg";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import OTPInput, { ResendOTP } from "otp-input-react";
import "./OTPVerification.css";
import { useLocation } from "react-router-dom";
// import useFetch from "../../hook/Fetch";
import { generateOTP, verifyOTP, generaterRegisterOTP,registerUser,verifyRegisterOTP } from "../Helper/helper"

const OTPVerification = () => {
  const [otp, setOtp] = useState();
  const location = useLocation();
  const userDataReg = location.state;
  const [loading, isLoading] = useState(false);
  const [otpSession, setOtpSession] = useState(false);
  const nextUrl=userDataReg.nextUrl;
  const navigate = useNavigate();
  let username="";
  let user_type="";
  const userInfo = {
    username: userDataReg.userData.fname + " " + userDataReg.userData.lname,
    email: userDataReg.userData.email,
    userType:userDataReg.userData.user_type,
    
 
    
  };
 

  
  

  async function handleSubmit(e) {
   
    e.preventDefault();
    console.log(userDataReg);
  
    if(nextUrl==="/reset"){
      username= userInfo.email;
      
      
      try{
          let { status } = await verifyOTP({ code: otp, username} );
        if (status === 201) {
          alert("Verify Successfully!");
        return navigate('/reset')
        }

      }catch (error) {
        return alert("Wrong OTP! Check email again!");
      }

    }else
    { var isVerified=false;
     
      try{
        let { status } = await verifyRegisterOTP({ code: otp });
        if (status === 201) {
          isVerified=true;
        alert("Verify Successfully!");            
        
        }

      } catch (error) {
        return alert("Wront OTP! Check email again!");
      }
    }
    if(isVerified===true){
         
        registerUser(userDataReg)
        .then((msg) => {
          
          console.log(msg);
          navigate(nextUrl);
          alert("Registration Successfully!");  
        })
        .catch((error) => {
          // Handle registration error
          console.error(error);
          return alert("Registration failed");
        });
        
        
        
      }
    }


    const renderButton = (buttonProps) => {
      const remainingTime = buttonProps.remainingTime;
     // console.log(remainingTime)
      return (
        <button
        className={!remainingTime > 0 ? "otp-resend" : "resend-active"}
        style={{
          borderRadius: "25px",
          marginLeft:"-250px",
          marginRight: "90px",
          marginTop: "110px",
          fontSize: "16px",
          color: "#6e7480",
          padding:"3px",
          backgroundColor: "#f1f1f1",
          height: "40px",
          width: "150px"
        }}
      >
        Resend OTP
        </button>
      );
    }
    ;
    <br/>
    const renderTime = (remainingTime) => {
      return <span style={{ marginTop: "45px", marginLeft:"-150px"}}
      >
        {remainingTime>0?`${remainingTime} seconds remaining`:"Time is up.Try resending OTP"}</span>;
    };
  
  

  useEffect(() => {
   
    const genOtp = async () => {
      
    
      if(!otpSession){
        if(nextUrl==="/reset"){
        const generatedOtp = await generateOTP(userInfo.userType, userInfo.email);
        console.log(generatedOtp, otpSession);
        setOtpSession(true);
        }
        else if(nextUrl==="/ownerDashboardpage"){
          const generatedOtp = await generaterRegisterOTP(userInfo.username, userInfo.email);
          console.log(generatedOtp, otpSession);
          setOtpSession(true); 
        }

        
      }
      
    };
    return () => genOtp();
  }, []);
  // return (
  //   <div className="registraion-container">
      
  //     <div className="registration-heading">
  //       <div className="heading-title">OTP Verification</div>
  //       <div className="heading-subtitle">
  //         We have send OTP Verification code to the
  //         <em className="otp-email"> {userDataReg.userData.email}.</em> <br />
  //         Please check your email.
  //       </div>
  //     </div>

  //     <Form onSubmit={handleSubmit}>
  //       <div>
  //         <Form.Group className="submit-registration">
  //           <OTPInput
  //             value={otp}
  //             onChange={setOtp}
  //             autoFocus
  //             OTPLength={4}
  //             otpType="number"
  //             disabled={false}
              
  //             className="otp-container"
  //           />
  //         </Form.Group>
  //       </div>

  //       <Form.Group className="submit-registration">
  //         <Button variant="primary" type="submit" className="verify-otp">
  //           {loading && <CgSpinner size={30} className="animate-spin" />}

  //           <span>Verify OTP</span>
  //         </Button>
  //       </Form.Group>

  //       <Form.Group className="otp-resend-btn mt-3  ">
        
  //         <ResendOTP renderButton={renderButton} renderTime={renderTime} />
  //       </Form.Group>


        
  //     </Form>
  //   </div>
  // );
  
  return (
    <div className="registraion-container" style={{marginTop:"70px", marginLeft: '510px' , backgroundColor: 'white', borderWidth: '1px',boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)" }}>
      
      <div className="logo" style={{ marginLeft: "110px", marginTop: "-30px" }}>
        <img src={logo} alt="FastMove Logo" height="30" />
      </div>

      <div className="registration-heading">
        <div className="heading-title"style={{ fontSize: "30px", color: "#004528" }}>OTP Verification</div>
        <div className="heading-subtitle" style={{ fontSize: "16px", color: "#6e7480" }}>
            We have send OTP Verification code to the
              <em className="otp-email"> {userDataReg.userData.email}.</em> <br />
            Please check your email.
        </div>
      </div>

      <Form  onSubmit={handleSubmit} >
        <div>
          <Form.Group className="submit-registration">
            <OTPInput
              value={otp}
              onChange={setOtp}
              autoFocus
              OTPLength={4}
              otpType="number"
              disabled={false}
              
              className="otp-container"
            />
          </Form.Group>
        </div>

        <Form.Group className="submit-registration">
          <Button variant="primary" type="submit" className="verify-otp" style={{ borderRadius: "25px", marginLeft: "87px" }}>
             {loading && <CgSpinner size={30} className="animate-spin" />} 

            <span>Verify OTP</span>
          </Button>
        </Form.Group>

        <Form.Group className="otp-resend-btn mt-3  ">
        
          <ResendOTP 
          renderButton={renderButton} renderTime={renderTime} 
          />
        </Form.Group>


        
      </Form>
    </div>
  );


};

export default OTPVerification;