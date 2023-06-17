import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Passenger.css';
import Logo from '../../../Images/Logo.png';
import { storage } from './firebase';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const PassengerReg = ({ userEmail }) => {
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
      ...prevState,
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
            toast.success('File uploaded successfully');
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
    const { Name, email, Account_No, Contact_No, NIC } = formData;
  
    const formDataToSubmit = {
      name: Name,
      email: email,
      accountNo: Account_No,
      contactNo: Contact_No,
      NIC_scancopy: NIC || '', // Use NIC as the value for NIC_scancopy
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
          NIC: '',
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
          <p style={{ fontSize: '0.9rem', fontWeight: 'normal', textShadow: 'none' }}>Please fill in this form to create a Passenger account.</p>
          <hr />

          <label htmlFor='Name'><b>First Name</b></label>
          <input
            type='text'
            name='First_Name'
            id='First_Name'
            required
            className='input-field'
            onChange={handleChange}
          />

          <label htmlFor='Name'><b>Last Name</b></label>
          <input
            type='text'
            name='Last_Name'
            id='Last_Name'
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

          <label htmlFor='Account_No'><b>Home Address</b></label>
          <input
            type='text'
            name='Home_Address'
            id='Home_Address'
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

          <label htmlFor='Gender'><b>Gender</b></label>
          <select id="cars" name="cars">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer_Not_to_say">Prefer Not to say</option>
          </select>

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
                <input type='text'Name='NIC' id='NIC' value={fileUrl} readOnly className='download-link-input' onChange={handleChange} />
                
              </>
            )}
          <hr />

          <button type='submit' className='registerbtn'  onClick={displayInfo}>
            Register
          </button>
        </div>    
      </form>
      <ToastContainer />
    </div>
  );
};

export default PassengerReg;
