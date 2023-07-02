import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserRegistration.css';
import Logo from '../../../Images/Logo.png';
import { storage } from './firebase';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'

const API_BASE_URL = 'http://localhost:5000';

const UserRegistration = ({ userEmail }) => {
  const [accountType, setAccountType] = useState('Passenger');

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  const renderInputs = () => {
    if (accountType === 'Passenger') {
      return (
        <div>
         <label htmlFor='Name'><b>First Name</b></label>
          <input
            type='text'
            name='FName'
            id='FName'
            required
            className='input-field'
          />
          <label htmlFor='Name'><b>Last Name</b></label>
          <input
            type='text'
            name='LName'
            id='LName'
            required
            className='input-field'
          />
          
          <label htmlFor='Gender'><b>Gender</b></label>
          <select id="sex" name="sex"  >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="NotMentioned">Prefer not to say</option>
               </select>

          <label htmlFor='email'><b>Email</b></label>
          <input
            type='text'
            name='email'
            id='email'
            required
          />


          <label htmlFor='Contact_No'><b>Contact Number</b></label>
          <input
            type='text'
            name='Contact_No'
            id='Contact_No'
            required
          />

          <label htmlFor='NIC' style={{ marginTop: '1rem' }}><b>National Identity Card</b>
            <br /><b>Scanned Copy:</b></label>
          <input
            type='file'
            name='NICcopy'
            id='NICcopy'
            required
          />

          <hr />
        </div>
      );
    } else if (accountType === 'Bus Owner') {
      return (
        <div>
          <label htmlFor='Name'><b>Name</b></label>
          <input
            type='text'
            placeholder='First name and Last name'
            name='Name'
            id='Name'
            required
            className='input-field'
          />

          <label htmlFor='email'><b>Email</b></label>
          <input
            type='text'
            name='email'
            id='email'
            required
          />


          <label htmlFor='Contact_No'><b>Contact Number</b></label>
          <input
            type='text'
            name='Contact_No'
            id='Contact_No'
            required
          />

          <label htmlFor='NIC' style={{ marginTop: '1rem' }}><b>National Identity Card</b>
            <br /><b>Scanned Copy:</b></label>
          <input
            type='file'
            name='NICcopy'
            id='NICcopy'
            required
          />

          <hr />

        </div>
      );
    } else if (accountType === 'Conductor') {
      return (
        <div>
          <label htmlFor="conductorName">Conductor Name:</label>
          <input type="text" id="conductorName" name="conductorName" />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="Regform">
      <img
        src={Logo}
        alt="Logo"
        style={{
          position: 'fixed',
          top: '10px',
          left: '10px',
          width: '300px',
          height: '300px',
        }}
      />
      <form action="action_page.php">
        <div className="container">
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textShadow: 'none', color: '#3a6a57' }}>Get Registered</h1>
          <p style={{ fontSize: '0.9rem', fontWeight: 'normal', textShadow: 'none' }}>Please fill in this form to create a User account.</p>
          <hr />

          <label htmlFor="Account">Choose Account type:</label>
          <select id="AccountType" name="AccountType" value={accountType} onChange={handleAccountTypeChange}>
            <option value="Passenger">Passenger</option>
            <option value="Bus Owner">Bus Owner</option>
            <option value="Conductor">Conductor</option>
          </select>

          {renderInputs()} {/* Render inputs based on selected account type */}
        </div>
        <button type='submit' className='registerbtn'>
            Register
          </button>
          <div className="text-center py-4">
                <span className='text-gray-500'>Already Register? <Link className='text-red-500' to="/">Login Now</Link></span>
              </div>

      </form>
      <ToastContainer />
    </div>
  );
};

export default UserRegistration;