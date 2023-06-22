import React, { useState } from 'react';
import logo from '../../../Images/Logo.png';
import './BankDetails.css';

const BankDetails = () => {
  const [bank, setBank] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [accountNoError, setAccountNoError] = useState('');

  const handleBankChange = (event) => {
    setBank(event.target.value);
  };

  //bank account number validation part

  const handleAccountNoChange = (event) => {
    const inputAccountNo = event.target.value;
    setAccountNo(inputAccountNo);

    if (bank === 'BOC') {
      if (inputAccountNo.length === 7 && /^\d+$/.test(inputAccountNo)) {
        setAccountNoError('');
      } else {
        setAccountNoError('Account Number should have 7 digits.');
      }
    }

    if (bank === 'Peoples') {
      if (inputAccountNo.length === 15 && /^\d+$/.test(inputAccountNo)) {
        setAccountNoError('');
      } else {
        setAccountNoError('Account Number should have 15 digits.');
      }
    }

    if (bank === 'Sampath') {
      if (inputAccountNo.length === 12 && /^\d+$/.test(inputAccountNo)) {
        setAccountNoError('');
      } else {
        setAccountNoError('Account Number should have 12 digits.');
      }
    }

    if (bank === 'NSB') {
      if (inputAccountNo.length === 12 && /^\d+$/.test(inputAccountNo)) {
        setAccountNoError('');
      } else {
        setAccountNoError('Account Number should have 12 digits.');
      }
    }

    if (bank === 'HNB') {
      if (inputAccountNo.length === 12 && /^\d+$/.test(inputAccountNo)) {
        setAccountNoError('');
      } else {
        setAccountNoError('Account Number should have 12 digits.');
      }
    }

    if (bank === 'NDB') {
      if (inputAccountNo.length === 12 && /^\d+$/.test(inputAccountNo)) {
        setAccountNoError('');
      } else {
        setAccountNoError('Account Number should have 12 digits.');
      }
    }
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or further processing here
  };

  return (
    <div className="BankDetails">
      <div className="BankCard">
        <div className="Bank-Card">
          <div className="logo">
            <img src={logo} alt="FastMove Logo" height="30" />
          </div>
          <h2 style={{ color: '#004226' }}>Enter your Bank Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="bank">Choose Bank:</label>
              <select id="bank" name="bank" value={bank} onChange={handleBankChange}>
                <option value="">Select Bank</option>
                <option value="BOC">Bank of Ceylon</option>
                <option value="Peoples">People's Bank</option>
                <option value="Sampath">Sampath Bank</option>
                <option value="NSB">National Savings Bank</option>
                <option value="HNB">Hatton National Bank</option>
                <option value="NDB">NDB</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="Branch">Select Branch:</label>
              <select id="Branch" name="Branch">
                <option value="">Select Branch</option>
                <option value="Colombo">Colombo</option>
                <option value="Kandy">Kandy</option>
                <option value="Galle">Galle</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Nuwara_Eliya">Nuwara Eliya</option>
                <option value="Kegalle">Kegalle</option>
                <option value="Anuradhapura">Anuradhapura</option>
                <option value="Vavuniya">Vavuniya</option>
                <option value="Kurunegala">Kurunegala</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="AccountNo">Account Number:</label>
              <input
                type="text"
                id="AccountNo"
                name="AccountNo"
                value={accountNo}
                onChange={handleAccountNoChange}
              />
              {accountNoError && <p className="error-message no-shadow">{accountNoError}</p>}
            </div>

            <button className="Submit" type="submit" disabled={accountNoError !== ''}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;


