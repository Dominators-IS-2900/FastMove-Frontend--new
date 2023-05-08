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
      license: e.target.files[0],
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
        <table>
          <tbody>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>NIC Scan Copy</td>
              <td>
                <input
                  type="file"
                  className="form-control-file"
                  id="nicScanCopy"
                  name="nicScanCopy"
                  onChange={handleFileUpload}
                />
              </td>
            </tr>
            <tr>
              <td>TP</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="tp"
                  name="tp"
                  value={formData.tp}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>License</td>
              <td>
                <input
                  type="file"
                  className="form-control-file"
                  id="licence"
                  name="licence"
                  onChange={handleFileUpload}
                />
              </td>
            </tr>
            <tr>
              <td>Account NO</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="accountNo"
                  name="accountNo"
                  value={formData.accountNo}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td></td>     
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
