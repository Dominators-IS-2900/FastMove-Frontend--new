import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BusownerRegistration.css';
import Logo from '../../../Images/Logo.png';
import { storage } from './firebase';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const BusownerRegistration = ({ userEmail }) => {
  const [formData, setFormData] = useState({

    Name: '',
    email: '',
    Account_No: '',
    Contact_No: '',
    NICcopy: null,
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const storageRef = storage.ref();
      const uploadTask = storageRef.child(selectedFile.name).put(selectedFile);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          console.error(error);
          toast.error('File upload failed');
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            setFileUrl(downloadURL);
            setFormData((prevState) => ({
              ...formData,
              NICcopy: downloadURL,
            })); toast.success('File uploaded successfully');
          });
        }
      );
    } else {
      toast.error('No file selected');
    }
  };

  const displayInfo = () => {
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { Name, email, Account_No, Contact_No, NICcopy } = formData;

    const formDataToSubmit = {
      UserID: "6",
      name: Name,
      email: email,
      accountNo: Account_No,
      contactNo: Contact_No,
      NIC_scancopy: NICcopy || '', // Use NIC as the value for NIC_scancopy
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/registerBusOwner`, formDataToSubmit);
      console.log(response.data);
      if (response.data.sqlState === '23000' && response.data.sqlMessage.includes('Duplicate entry')) {
        // Display error message for duplicate entry
        toast.error('You are already registered.', {
          className: 'red-toast',
          bodyClassName: 'red-toast-body',
        });
        console.log(response.data);
      } else {
        // Display success message
        toast.success('You are registered successfully');
        // Clear the form data
        setFormData({
          Name: '',
          email: '',
          Account_No: '',
          Contact_No: '',
          NICcopy: '',
        });
      }
    } catch (error) {
      console.log(error);
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
      <form action='action_page.php' onSubmit={handleSubmit}>
        <div className='container'>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textShadow: 'none', color: '#3a6a57' }}>Get Registered</h1>
          <p style={{ fontSize: '0.9rem', fontWeight: 'normal', textShadow: 'none' }}>Please fill in this form to create a Bus Owner account.</p>
          <hr />

          <label htmlFor='Name'><b>Name</b></label>
          <input
            type='text'
            placeholder='First name and Last name'
            name='Name'
            id='Name'
            required
            className='input-field'
            onChange={handleChange}
          />

          <label htmlFor='email'><b>Email</b></label>
          <input
            type='text'
            name='email'
            id='email'
            onChange={handleChange}
            required
          />

          <label htmlFor='Account_No'><b>Bank Account Number</b></label>
          <input
            type='text'
            name='Account_No'
            id='Account_No'
            onChange={handleChange}
            required
          />

          <label htmlFor='Contact_No'><b>Contact Number</b></label>
          <input
            type='text'
            name='Contact_No'
            id='Contact_No'
            onChange={handleChange}
            required
          />

          <label htmlFor='NIC' style={{ marginTop: '1rem' }}><b>National Identity Card</b>
            <br /><b>Scanned Copy:</b></label>
          <input
            type='file'
            name='NICcopy'
            id='NICcopy'
            required
            onChange={handleFileSelect}
          />

          {selectedFile && (
            <>
              <button type='button' className='uploadbtn' onClick={handleFileUpload}>
                Upload
              </button>
            </>
          )}

          {fileUrl && (
            <>
              <p>
                <span className="file-text">View uploaded file:</span>
                <span className="download-link" onClick={() => window.open(fileUrl, '_blank')}>
                  Click here
                </span>
              </p>
            </>
          )}
          <hr />

          <button type='submit' className='registerbtn' onClick={displayInfo}>
            Register
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default BusownerRegistration;
