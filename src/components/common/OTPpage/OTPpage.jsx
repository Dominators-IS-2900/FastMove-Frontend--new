import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CgSpinner } from "react-icons/cg";
import { Spinner } from "react-bootstrap";

import OTPInput, { ResendOTP } from "otp-input-react";
// import "../../styles/shared.css";
import { useLocation } from "react-router-dom";
// import useFetch from "../../hook/Fetch";
// import { generateOTP, verifyOTP } from "../../helper.js/helper";
const OTPVerification = () => {
  const [otp, setOtp] = useState();
  const location = useLocation();
  const userData = location.state;
  const [loading, isLoading] = useState(false);
  const [otpSession, setOtpSession] = useState(false);

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   try {
  //     let { status } = await verifyOTP({ code: otp });
  //     if (status === 201) {
  //       alert("Verify Successfully!");
  //       //  return navigate('/reset')
  //     }
  //   } catch (error) {
  //     return alert("Wront OTP! Check email again!");
  //   }
  // }

  function ResendOTP() {
    
  }

  const renderButton = (buttonProps) => {
    const remainingTime = buttonProps.remainingTime;
    console.log(remainingTime)

    return (
      <button className={!remainingTime > 0 ? "otp-resend" : "resend-active"}>
        Resend
      </button>
    );
  };
  const renderTime = (remainingTime) => {
    return <span>{remainingTime>0?`${remainingTime} seconds remaining`:"hh"}</span>;
  };

  const userInfo = {
    username: userData.fname + " " + userData.lname,
    email: userData.email,
  };

  useEffect(() => {
    const genOtp = async () => {
      // if(!otpSession){
      //   const generatedOtp = await generateOTP(userInfo.username, userInfo.email);
      //   console.log(generatedOtp, otpSession);
      //   setOtpSession(true);

      // }
      
    };
    return () => genOtp();
  }, [otpSession, userInfo]);
  return (
    <div className="registraion-container">
      <div className="registration-heading">
        <div className="heading-title">OTP Verification</div>
        <div className="heading-subtitle">
          We have send OTP Verification code to the
          <em className="otp-email"> {userData.email}.</em> <br />
          Please check your email.
        </div>
      </div>

      <Form
      //  onSubmit={handleSubmit}
       >
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
          {/* <ResendOTP renderButton={renderButton} renderTime={renderTime} className=""/> */}

          {/* onClick={console.log(otpSession)} */}
          <ResendOTP renderButton={renderButton} renderTime={renderTime} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default OTPVerification;