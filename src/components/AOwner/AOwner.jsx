import React, { useState } from 'react';

export default function Owner() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    nicScanCopy: '',
    tp: '',
    address: '',
    license: '',
    accountNo: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = (e) => {
    setFormData({
      ...formData,
      nicScanCopy: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="nicScanCopy">NIC Scan Copy</label>
            <input
              type="file"
              className="form-control-file"
              id="nicScanCopy"
              name="nicScanCopy"
              onChange={handleFileUpload}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tp">TP</label>
            <input
              type="text"
              className="form-control"
              id="tp"
              name="tp"
              value={formData.tp}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="license">License</label>
            <input
              type="text"
              className="form-control"
              id="license"
              name="license"
              value={formData.license}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="accountNo">Account NO</label>
            <input
              type="text"
              className="form-control"
              id="accountNo"
              name="accountNo"
              value={formData.accountNo}
              onChange={handleChange}
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
