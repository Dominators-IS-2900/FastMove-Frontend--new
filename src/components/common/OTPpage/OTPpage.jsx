import React, { useState } from 'react';
import './OTPpage.css';
import Logo from '../../../Images/Logo.png';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const OTPpage = ({ userEmail }) => {
  return (
    <div className='OTPbody'>
      <img
        className='image'
        src={Logo}
        alt='Logo'
        style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          width: '300px',
          height: '300px',
        }}
      />

      <h2 className='Head'>OTP Verification</h2>
      <h5 className='subhead'>Enter OTP code sent to your Email</h5>

      <div className="otp-container">
        <div className="otp-input">
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
          <input type="text" maxLength="1" />
        </div>
      </div>
        <button type='submit' className='Submitbtn'>
            Verify and Proceed
        </button>
    </div>
  );
};

export default OTPpage;
