import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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

  
  

  async function handleSubmit(e) {
   
    e.preventDefault();
  
    if(nextUrl==="/reset"){
      try{
        let { status } = await verifyOTP({ code: otp });
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
         console.log(userDataReg.userData);
        registerUser(userDataReg.userData)
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

  
    
  //   try {
  //     // let { status } = await verifyOTP({ code: otp });
  //     // if (status === 201) {
  //     //   alert("Verify Successfully!");
        
  //       if(nextUrl==="/reset"){
  //         let { status } = await verifyOTP({ code: otp });
  //         if (status === 201) {
  //           alert("Verify Successfully!");
  //         return navigate('/reset');
  //         }
  //       }else
  //       {
  //         let { status } = await verifyRegisterOTP({ code: otp });
  //         if (status === 201) {
  //           alert("Verify Successfully!");            
  //         registerUser(userDataReg.userData);
  //         console.log(registerUser[0]);
  //         navigate(nextUrl);
  //       }
  //     }
  //   } catch (error) {
  //     return alert("Wront OTP! Check email again!");
  //   }
   

  // function ResendOTP() {
    
  // }

  const renderButton = (buttonProps) => {
    const remainingTime = buttonProps.remainingTime;
   // console.log(remainingTime)

    return (
      <button className={!remainingTime > 0 ? "otp-resend" : "resend-active"}>
        Resend
      </button>
    );
  }
  ;
  const renderTime = (remainingTime) => {
    return <span>{remainingTime>0?`${remainingTime} seconds remaining`:"hh"}</span>;
  };
  
  const userInfo = {
    username: userDataReg.userData.fname + " " + userDataReg.userData.lname,
    email: userDataReg.userData.email,
 
    
  };
 

  useEffect(() => {
   
    const genOtp = async () => {
      if(!otpSession){
        if(nextUrl==="/reset"){
        const generatedOtp = await generateOTP(userInfo.username, userInfo.email);
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
  return (
    <div className="registraion-container">
      
      <div className="registration-heading">
        <div className="heading-title">OTP Verification</div>
        <div className="heading-subtitle">
          We have send OTP Verification code to the
          <em className="otp-email"> {userDataReg.userData.email}.</em> <br />
          Please check your email.
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
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
          <Button variant="primary" type="submit" className="verify-otp">
            {loading && <CgSpinner size={30} className="animate-spin" />}

            <span>Verify OTP</span>
          </Button>
        </Form.Group>

        <Form.Group className="otp-resend-btn mt-3  ">
        
          <ResendOTP renderButton={renderButton} renderTime={renderTime} />
        </Form.Group>


        
      </Form>
    </div>
  );
  



};

export default OTPVerification;