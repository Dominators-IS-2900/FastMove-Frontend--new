import React, { useState } from 'react';

export default function Owner() {
  const [formData, setFormData] = useState({
    ownerId: '',
    email: '',
    name: '',
    nicScanCopy: '',
    tp: '',
    address: '',
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

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <table>
          <tbody>
            <tr>
              <td>Owner ID</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  id="ownerId"
                  name="ownerId"
                  value={formData.ownerId}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{formData.email}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{formData.name}</td>
            </tr>
            <tr>
              <td>NIC Scan Copy</td>
              <td>{formData.nicScanCopy}</td>
            </tr>
            <tr>
              <td>TP</td>
              <td>{formData.tp}</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>{formData.address}</td>
            </tr>
            <tr>
              <td>Account NO</td>
              <td>{formData.accountNo}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

