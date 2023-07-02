import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { storage } from './firebase'; // Import Firebase storage

import './ConductorUpdate.css';

const ConductorUpdate = () => {
  const [conductorName, setConductorName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    selectedFile: null,
    selectedFileURL: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cname') {
      setConductorName(value);
    } else if (name === 'pnumber') {
      setContactNumber(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!conductorName.match(/^[a-zA-Z\s]+$/)) {
      errors.conductorName = 'Conductor name should only contain alphabets.';
    }

    if (!contactNumber.match(/^\d{10}$/)) {
      errors.contactNumber = 'Contact number should be a 10-digit number.';
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      errors.email = 'Invalid email format.';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  //update conductor details

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
  
    if (isValid) {
      const requestBody = {
        conductorId: 2, // Replace with the actual conductor ID you want to update
        newuserName: conductorName,
        newMobileNumber: contactNumber,
        newEmail: email,
        newNicScanCopy: formData.selectedFileURL,
        newConductorLicen: formData.selectedFileURL,
      };
  
      fetch('/api/updateConductor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error updating user information: ${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log('User information updated successfully');
          // Handle success, show a success message or perform other actions
        })
        .catch((error) => {
          console.error(error);
          // Handle error, show an error message or perform other actions
        });
    }
  };
  

  const handleFileSelect = (e) => {
    setFormData({
      ...formData,
      selectedFile: e.target.files[0],
    });
  };

  const handleFileUpload = () => {
    if (formData.selectedFile) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(formData.selectedFile.name);
      fileRef
        .put(formData.selectedFile)
        .then((snapshot) => {
          console.log('File uploaded successfully.');
          return snapshot.ref.getDownloadURL();
        })
        .then((downloadURL) => {
          setFormData({
            ...formData,
            selectedFileURL: downloadURL,
          });
        })
        .catch((error) => {
          console.log('Error uploading file:', error);
        });
    }
  };

  

  return (
    <div className="tablestyle">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Update Conductor Information</h6>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" cellSpacing="0">
                <tbody>
                  <tr>
                    <th style={{ width: '10px' }}>1</th>
                    <th>Conductor Name</th>
                    <td>
                      <input
                        type="text"
                        className="inputfield"
                        name="cname"
                        id="cname"
                        value={conductorName}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.conductorName && <p className="error">{errors.conductorName}</p>}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ width: '10px' }}>2</th>
                    <th>NIC Copy</th>
                    <td>
                      <input
                        type="file"
                        name="selectedFile"
                        id="selectedFile"
                        required
                        onChange={handleFileSelect}
                      />
                      <br />
                      {formData.selectedFile && (
                        <>
                          <button type="button" onClick={handleFileUpload} className="upload-button">
                            Upload
                          </button>
                          <br />
                          {formData.selectedFileURL && (
                            <a href={formData.selectedFileURL} target="_blank" rel="noopener noreferrer">
                              View the uploaded file
                            </a>
                          )}
                          <input
                            type="text"
                            value={formData.selectedFileURL}
                            readOnly
                            name="Nic"
                            id="ID_scancopy"
                            required
                            onChange={handleFileSelect}
                          />
                        </>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ width: '10px' }}>2</th>
                    <th>Conductor Liscense</th>
                    <td>
                      <input
                        type="file"
                        name="selectedFile"
                        id="selectedFile"
                        required
                        onChange={handleFileSelect}
                      />
                      <br />
                      {formData.selectedFile && (
                        <>
                          <button type="button" onClick={handleFileUpload} className="upload-button">
                            Upload
                          </button>
                          <br />
                          {formData.selectedFileURL && (
                            <a href={formData.selectedFileURL} target="_blank" rel="noopener noreferrer">
                              View the uploaded file
                            </a>
                          )}
                          <input
                            type="text"
                            value={formData.selectedFileURL}
                            readOnly
                            name="ConLisence"
                            id="ConLisence"
                            required
                            onChange={handleFileSelect}
                          />
                        </>
                      )}
                    </td>
                  </tr>
                
                  <tr>
                    <th style={{ width: '10px' }}>3</th>
                    <th>Contact Number</th>
                    <td>
                      <input
                        type="text"
                        className="inputfield"
                        name="pnumber"
                        id="pnumber"
                        value={contactNumber}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.contactNumber && <p className="error">{errors.contactNumber}</p>}
                    </td>
                  </tr>
                  <tr>
                    <th style={{ width: '10px' }}>4</th>
                    <th>Email</th>
                    <td>
                      <input
                        type="email"
                        className="inputfield"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleInputChange}
                        required
                      />
                      {errors.email && <p className="error">{errors.email}</p>}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="btn-group">
                <button type="submit" className="btn edit" >
                  SAVE
                </button>
                
                <button type="cancel" className="btn edit">
                  CANCEL
                 </button>
              
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConductorUpdate;
