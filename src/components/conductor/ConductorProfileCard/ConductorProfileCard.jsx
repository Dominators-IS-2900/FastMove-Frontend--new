import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { storage } from './firebase'; // Import Firebase storage
import axios from 'axios';
import '../../conductor/ConductorUpdateProfileCard/ConductorUpdate';
import './ConductorProfileCard.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConductorProfileCard = () => {
  const [conductordata, setConductorData] = useState([]);
  const [formData, setFormData] = useState({
    selectedFile: null,
    selectedFileURL: null,
  });

  useEffect(() => {
    axios
      .get('http://localhost:5000/ConductorProfile')
      .then((res) => {
        setConductorData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

 {/*  const handleFileSelect = (e) => {
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
          // download URL of file
          return snapshot.ref.getDownloadURL();
        })
        .then((downloadURL) => {
          // Update the formData with the download URL
          setFormData({
            ...formData,
            selectedFileURL: downloadURL,
          });
        })
        .catch((error) => {
          console.log('Error uploading file:', error);
        });
    }
  };*/}


  return (
    <div className="tablestyle">
      {/* table card */}
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Conductor Information</h6>
        </div>
        {/* update profile form */}
        <form>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" cellSpacing="0">
                <thead>
                  <tr>
                    <th style={{ width: '10px' }}>1</th>
                    <th>Conductor Name</th>
                    {conductordata.map((conductor) => (
                      <td key={conductor.email}>{conductor.FName}{conductor.LName}</td>
                    ))}
                  </tr>
                  <tr>
                    <th style={{ width: '10px' }}>2</th>
                    <th>Conductor ID</th>
                    {conductordata.map((conductor) => (
                      <td key={conductor.email}>{conductor.password}</td>
                    ))}
                  </tr>
                  
                  <tr>
                    <th style={{ width: '10px' }}>2</th>
                    <th>Address</th>
                    {conductordata.map((conductor) => (
                      <td key={conductor.email}>{conductor.address}</td>
                    ))}
                  </tr>
                  <tr>

                    <th style={{ width: '10px' }}>3</th>
                    <th>NIC Copy</th>
                    {conductordata.map((conductor) => (
                      <td className="nic-cell" key={conductor.email}>
                        <a href={conductor.ID_scancopy} target="_blank" rel="noopener noreferrer">
                          View NIC
                        </a>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <th style={{ width: '10px' }}>4</th>
                    <th>Contact Number</th>
                    {conductordata.map((conductor) => (
                      <td key={conductor.email}>{conductor.Contact_No}</td>
                    ))}
                  </tr>
                  <tr>
                    <th style={{ width: '10px' }}>5</th>
                    <th>Email</th>
                    {conductordata.map((conductor) => (
                      <td key={conductor.email}>{conductor.email}</td>
                    ))}
                  </tr>
                  <tr>
                    <th style={{ width: '10px' }}>6</th>
                    <th>Conductor License</th>
                    {conductordata.map((conductor) => (
                      <td className="nic-cell" key={conductor.conductorId}>
                        <a href={conductor.conductorLicen} target="_blank" rel="noopener noreferrer">
                          View License
                        </a>
                      </td>
                    ))}
                  </tr>
                </thead>
              </table>
              <div className="btn-group">
                <Link to="/ConductorUpdate">
                  <button type="button" className="btn edit" id="myButton">
                    UPDATE
                  </button>
                </Link>
                <button
                  type="button"
                  className="btn edit"
                  id="myButton"
                  
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default ConductorProfileCard;
