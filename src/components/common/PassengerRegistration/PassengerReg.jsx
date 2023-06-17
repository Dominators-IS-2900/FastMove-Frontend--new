import React, { useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BusownerRegistration.css';
import Logo from '../../../Images/Logo.png';
import { storage } from './firebase';

const BusownerRegistration = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [accountNoError, setAccountNoError] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [contactNoError, setContactNoError] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileURL, setSelectedFileURL] = useState('');

  const fileInputRef = useRef(null);

  const handleNameChange = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
    setNameError('');
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);
    setEmailError('');
  };

  const handleAccountNoChange = (event) => {
    const inputValue = event.target.value;
    setAccountNo(inputValue);
    setAccountNoError('');
  };

  const handleContactNoChange = (event) => {
    const inputValue = event.target.value;
    setContactNo(inputValue);
    setContactNoError('');
  };

  const validateName = () => {
    const nameRegex = /^[A-Za-z]+\s[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateAccountNo = () => {
    const accountNoRegex = /^\d{7}$/;
    return accountNoRegex.test(accountNo);
  };

  const validateContactNo = () => {
    const contactNoRegex = /^\d{10}$/;
    return contactNoRegex.test(contactNo);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const uploadTask = storage.ref(`files/${selectedFile.name}`).put(selectedFile);
      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (error) => {
          console.error(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            setSelectedFileURL(downloadURL);
            console.log('File uploaded successfully!');
          });
        }
      );
    }
  };

  const handleDownloadFile = () => {
    window.open(selectedFileURL);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    if (!validateName()) {
      setNameError('Please enter First name and Last name');
      valid = false;
    }

    if (!validateEmail()) {
      setEmailError('Please enter a valid email address');
      valid = false;
    }

    if (!validateAccountNo()) {
      setAccountNoError('Account number must be 7 digits');
      valid = false;
    }

    if (!validateContactNo()) {
      setContactNoError('Contact number must be 10 digits');
      valid = false;
    }

    if (valid) {
      toast.success('Your Information was submitted successfully!');
      setName('');
      setEmail('');
      setAccountNo('');
      setContactNo('');
      setSelectedFile(null);
      setSelectedFileURL('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className='Regform'>
      <img
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
      <form onSubmit={handleSubmit} action="action_page.php">
        <div className="container">
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textShadow: 'none', color: '#3a6a57' }}>Get Registered</h1>
          <p style={{ fontSize: '0.9rem', fontWeight: 'normal', textShadow: 'none' }}>Please fill in this form to create a Bus Owner account.</p>
          <hr />

          <label htmlFor="Name"><b>Name</b></label>
          <input
            type="text"
            placeholder="First name and Last name"
            name="Name"
            id="Name"
            value={name}
            onChange={handleNameChange}
            required
            className="input-field"
          />
          {nameError && <p style={{ color: 'red', fontSize: '0.8rem', marginBottom: '0.5rem', textShadow: 'none' }}>{nameError}</p>}

          <label htmlFor="email"><b>Email</b></label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p style={{ color: 'red', fontSize: '0.8rem', marginBottom: '0.5rem', textShadow: 'none' }}>{emailError}</p>}

          <label htmlFor="Account_No"><b>Bank Account Number</b></label>
          <input
            type="text"
            name="Account_No"
            id="Account_No"
            value={accountNo}
            onChange={handleAccountNoChange}
            required
          />
          {accountNoError && <p style={{ color: 'red', fontSize: '0.8rem', marginBottom: '0.5rem', textShadow: 'none' }}>{accountNoError}</p>}

          <label htmlFor="Contact_No"><b>Contact Number</b></label>
          <input
            type="text"
            name="Contact_No"
            id="Contact_No"
            value={contactNo}
            onChange={handleContactNoChange}
            required
          />
          {contactNoError && <p style={{ color: 'red', fontSize: '0.8rem', marginBottom: '0.5rem', textShadow: 'none' }}>{contactNoError}</p>}

          <label htmlFor="NIC" style={{ marginTop: '1rem' }}><b>National Identity Card</b>
            <br /><b>Scanned Copy:</b></label>
          <input type="file" name="NICcopy" id="NICcopy" required ref={fileInputRef} onChange={handleFileSelect} />
          {selectedFile && (
            <button type="button" onClick={handleFileUpload} className="upload-button">
              Upload File
            </button>
          )}
         {selectedFileURL && (
          <div>
            <p>
            <a href={selectedFileURL} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', textShadow: 'none' }}>
  View the uploaded file
</a>

              <br />
            </p>
            <input
              name="NIC"
              id="NIC"
              type="text"
              value={selectedFileURL}
              readOnly
            />
          </div>
        )}
          <hr />

          {/* <p style={{ fontSize: '0.8rem', fontWeight: 'normal', textShadow: 'none' }}>
            By creating an account you agree to our <a href="/terms">Terms & Privacy</a>.
          </p> */}

          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>

        {/* <div className="container signin">
          <p style={{ fontSize: '0.8rem', fontWeight: 'normal', textShadow: 'none' }}>
            Already have an account? <a href="/login">Sign in</a>.
          </p>
        </div> */}
      </form>
      <ToastContainer />
    </div>
  );
};

export default BusownerRegistration;
