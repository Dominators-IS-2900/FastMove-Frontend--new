import React, { useState } from 'react'

export default function Profile() {
  const [formData, setFormData] = useState({
    conductorId: '',
    username: '',
    password: '',
    mobileNumber: '',
    email: '',
    nicScanCopy: null
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setFormData({ ...formData, nicScanCopy: file })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission
  }

  return (
    <div class="card shadow mb-4">
      <div class="card-body">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="conductorId">Conductor ID</label>
            <input type="text" class="form-control" id="conductorId" name="conductorId" value={formData.conductorId} onChange={handleInputChange} />
          </div>
          <div class="form-group">
            <label for="username">User name</label>
            <input type="text" class="form-control" id="username" name="username" value={formData.username} onChange={handleInputChange} />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" name="password" value={formData.password} onChange={handleInputChange} />
          </div>
          <div class="form-group">
            <label for="mobileNumber">Mobile Number</label>
            <input type="text" class="form-control" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          </div>
          <div class="form-group">
            <label for="nicScanCopy">NIC Scan copy</label>
            <input type="file" class="form-control-file" id="nicScanCopy" name="nicScanCopy" accept="image/*" onChange={handleFileChange} />
          </div>
          <button type="button" class="btn btn-primary ml-1">Edit</button>
                                <button type="button" class="btn btn-warning ml-1">Delete</button>
        </form>
      </div>
    </div>
  )
}
