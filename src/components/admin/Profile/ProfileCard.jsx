
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { storage } from './firebase.js'; // Import Firebase storage
import './ProfileCard.css';

const ConductorRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const [successMessage, setSuccessMessage] = useState('');
  const [nicFormData, setNicFormData] = useState({
    selectedFile: null,
    selectedFileURL: ''
  });
  const [conductorFormData, setConductorFormData] = useState({
    selectedFile: null,
    selectedFileURL: ''
  });

  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        nicScanCopy: nicFormData.selectedFileURL,
        conductorLicense: conductorFormData.selectedFileURL
      };
  
      const response = await axios.post(`http://localhost:5000/conductorReg`, formData);
      console.log(response.data.message);
      setSuccessMessage('Successfully added');
      reset();
    } catch (error) {
      console.log('Error registering conductor:', error);
    }
  };
  
  const password = watch('password', '');

  const handleNicFileSelect = (e) => {
    setNicFormData({
      ...nicFormData,
      selectedFile: e.target.files[0],
    });
  };

  const handleNicFileUpload = () => {
    if (nicFormData.selectedFile) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(nicFormData.selectedFile.name);
      fileRef
        .put(nicFormData.selectedFile)
        .then((snapshot) => {
          console.log('NIC File uploaded successfully.');
          // download URL of file
          return snapshot.ref.getDownloadURL();
        })
        .then((downloadURL) => {
          // Update the formData with the download URL
          setNicFormData({
            ...nicFormData,
            selectedFileURL: downloadURL,
          });
        })
        .catch((error) => {
          console.log('Error uploading NIC file:', error);
        });
    }
  };

  const handleConductorFileSelect = (e) => {
    setConductorFormData({
      ...conductorFormData,
      selectedFile: e.target.files[0],
    });
  };

  const handleConductorFileUpload = () => {
    if (conductorFormData.selectedFile) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(conductorFormData.selectedFile.name);
      fileRef
        .put(conductorFormData.selectedFile)
        .then((snapshot) => {
          console.log('Conductor File uploaded successfully.');
          // download URL of file
          return snapshot.ref.getDownloadURL();
        })
        .then((downloadURL) => {
          // Update the formData with the download URL
          setConductorFormData({
            ...conductorFormData,
            selectedFileURL: downloadURL,
          });
        })
        .catch((error) => {
          console.log('Error uploading Conductor file:', error);
        });
    }
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Other form fields */}
          {/* ... */}


              <div className="form-group">
           <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              {...register('username', { required: true })}
            />
            {errors.username && (
              <span className="text-danger">Username is required</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register('password', {
                required: true,
                minLength: {
                  value: 6,
                  message: 'Password should have at least 6 characters'
                },
                pattern: {
                  value: /^(?=.*[0-9].*[0-9]).{6,}$/,
                  message: 'Password should have at least 2 numbers'
                }
              })}
            />
            {errors.password && (
              <span className="text-danger">{errors.password.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: true,
                validate: (value) =>
                  value === password || 'Passwords do not match'
              })}
            />
            {errors.confirmPassword && (
              <span className="text-danger">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              id="mobileNumber"
              {...register('mobileNumber', {
                required: true,
                pattern: {
                  value: /^\d{10}$/,
                  message: 'Mobile Number should be 10 digits'
                }
              })}
            />
            {errors.mobileNumber && (
              <span className="text-danger">
                {errors.mobileNumber.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register('email', {
                required: true,
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format'
                }
              })}
            />
            {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </div>
          <div className="form-group">
            {/* NIC Scan Copy */}
            <label htmlFor="nicScanCopy">
              NIC Scan Copy
              <br />
              <input
                type="file"
                name="nicSelectedFile"
                id="nicSelectedFile"
                required
                onChange={handleNicFileSelect}
              />
            </label>
            <br />
            {nicFormData.selectedFile && (
              <>
                <button
                  type="button"
                  onClick={handleNicFileUpload}
                  className="upload-button"
                >
                  Upload
                </button>
                <br />
                {nicFormData.selectedFileURL && (
                  <a
                    href={nicFormData.selectedFileURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View the uploaded NIC file
                  </a>
                )}
              </>
            )}
          </div>

          <div className="form-group">
            {/* Conductor License */}
            <label htmlFor="conductorLicense">
              Conductor License
              <br />
              <input
                type="file"
                name="conductorSelectedFile"
                id="conductorSelectedFile"
                required
                onChange={handleConductorFileSelect}
              />
            </label>
            <br />
            {conductorFormData.selectedFile && (
              <>
                <button
                  type="button"
                  onClick={handleConductorFileUpload}
                  className="upload-button"
                >
                  Upload
                </button>
                <br />
                {conductorFormData.selectedFileURL && (
                  <a
                    href={conductorFormData.selectedFileURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View the uploaded Conductor file
                  </a>
                )}
              </>
            )}
          </div>

          {/* Rest of the form */}
          {/* ... */}

          <button type="submit" className="btn btn-primary">
            Add
          </button>

          {successMessage && (
            <div className="alert alert-success mt-3">{successMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ConductorRegistration;

