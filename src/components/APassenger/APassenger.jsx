import React, { useState } from 'react';

export default function Passenger() {
  const [formValues, setFormValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    tp: '',
    accountNo: '',
    nicScanCopy: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormValues({
      ...formValues,
      nicScanCopy: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={formValues.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              className="form-control"
              name="address"
              value={formValues.address}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>TP</label>
            <input
              type="text"
              className="form-control"
              name="tp"
              value={formValues.tp}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Account NO</label>
            <input
              type="text"
              className="form-control"
              name="accountNo"
              value={formValues.accountNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>NIC Scan Copy</label>
            <input
              type="file"
              className="form-control-file"
              name="nicScanCopy"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mr-2">
            Submit
          </button>
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}