import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BusownerProfile.scss';
import './BusownerProfile.css';

const BusownerProfile = () => {
  const [ownerdata, setOwnerData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/BusownerProfile')
      .then((res) => {
        setOwnerData(res.data);
        console.log(ownerdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [showTextArea, setShowTextArea] = useState(false);
  const [showTextAreaRow, setShowTextAreaRow] = useState(null);
  const [accountNoInput, setAccountNoInput] = useState('');
  const [contactNumberInput, setContactNumberInput] = useState('');

  const handleEdit = (rowIndex) => {
    setShowTextAreaRow(rowIndex);
    setShowTextArea(true);
  };

  const handleUpdateAccountNo = () => {
    const updatedAccountNo = accountNoInput.trim();

    if (!/^\d{7}$/.test(updatedAccountNo)) {
      toast.error('Enter a valid 7-digit bank account number', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-error',
      });
      setAccountNoInput('');
      return;
    }

    // Update the account number in the database
    axios
      .put('http://localhost:5000/updateAccountNo', {
        accountNo: updatedAccountNo,
      })
      .then((res) => {
        console.log('Account number updated successfully');
        toast.success('Account number was updated successfully', {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'toast-success',
        });
        setAccountNoInput('');
        // Fetch updated owner data after successful update
        axios
          .get('http://localhost:5000/BusownerProfile')
          .then((res) => {
            setOwnerData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log('Error updating account number', err);
      });
  };

  const handleUpdateContactNumber = () => {
    const updatedContactNumber = contactNumberInput.trim();

    if (!/^0\d{9}$/.test(updatedContactNumber)) {
      toast.error('Enter a valid 10-digit contact number', {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-error',
      });
      setContactNumberInput('');
      return;
    }

    // Update the contact number in the database
    axios
      .put('http://localhost:5000/updateContactNumber', {
        contactNumber: updatedContactNumber,
      })
      .then((res) => {
        console.log('Contact number updated successfully');
        toast.success('Contact number was updated successfully', {
          position: toast.POSITION.BOTTOM_RIGHT,
          className: 'toast-success',
        });
        setContactNumberInput('');
        // Fetch updated owner data after successful update
        axios
          .get('http://localhost:5000/BusownerProfile')
          .then((res) => {
            setOwnerData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log('Error updating contact number', err);
      });
  };

  return (
    <div className="Profilecard">
      <div className="card shadow mb-4">
        <div className="content">
          <h2>Your Profile</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>UserID</td>
                <td>
                  {ownerdata.map((owner) => (
                    <span key={owner.UserID}>{owner.UserID}</span>
                  ))}
                </td>
                <td style={{ textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Name</td>
                <td>
                  {ownerdata.map((owner) => (
                    <span key={owner.UserID}>{owner.Name}</span>
                  ))}
                </td>
                <td style={{ textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  {ownerdata.map((owner) => (
                    <span key={owner.UserID}>{owner.Email}</span>
                  ))}
                </td>
                <td style={{ textAlign: 'right' }}></td>
              </tr>
              <tr>
                <td>Bank Account Number</td>
                <td>
                  {ownerdata.map((owner) => (
                    <span key={owner.UserID}>{owner.Account_No}</span>
                  ))}
                </td>
                <td style={{ textAlign: 'right' }}>
                  {showTextArea && showTextAreaRow === 3 ? (
                    <div>
                      <input
                        type="text"
                        name="Account_No"
                        id="Account_No"
                        value={accountNoInput}
                        onChange={(e) => setAccountNoInput(e.target.value)}
                        pattern="^\d{7}$"
                        required
                      />
                      {!/^\d{7}$/.test(accountNoInput) && (
                        <span className="error-message">
                          Enter a valid 7-digit bank account number
                        </span>
                      )}
                      <button
                        className="submitBtnaccount"
                        onClick={handleUpdateAccountNo}
                        style={{
                          width: '130px',
                          height: '25px',
                          fontSize: '15px',
                          paddingBottom: '35px',
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  ) : (
                    <button
                      className="editButton"
                      onClick={() => handleEdit(3)}
                      style={{
                        backgroundColor: '#8B8000',
                        width: '130px',
                        height: '25px',
                        fontSize: '15px',
                        paddingBottom: '35px',
                        float: 'right',
                      }}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
              <tr>
                <td>Contact Number</td>
                <td>
                  {ownerdata.map((owner) => (
                    <span key={owner.UserID}>{owner.Contact_No}</span>
                  ))}
                </td>
                <td style={{ textAlign: 'right' }}>
                  {showTextArea && showTextAreaRow === 4 ? (
                    <div>
                      <input
                        type="text"
                        name="Contact_Number"
                        id="Contact_Number"
                        value={contactNumberInput}
                        onChange={(e) => setContactNumberInput(e.target.value)}
                        pattern="^0\d{9}$"
                        required
                      />
                      {!/^0\d{9}$/.test(contactNumberInput) && (
                        <span className="error-message">
                          Enter a valid 10-digit contact number
                        </span>
                      )}
                      <button
                        className="submitBtncontact"
                        onClick={handleUpdateContactNumber}
                        style={{
                          width: '130px',
                          height: '25px',
                          fontSize: '15px',
                          paddingBottom: '35px',
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  ) : (
                    <button
                      className="editButton"
                      onClick={() => handleEdit(4)}
                      style={{
                        backgroundColor: '#8B8000',
                        width: '130px',
                        height: '25px',
                        fontSize: '15px',
                        paddingBottom: '35px',
                        float: 'right',
                      }}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default BusownerProfile;


