// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// const ConductorRegistration = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     // Convert file objects to FormData
//     const formData = new FormData();
//     formData.append('conductorId', data.conductorId);
//     formData.append('username', data.username);
//     formData.append('password', data.password);
//     formData.append('mobileNumber', data.mobileNumber);
//     formData.append('email', data.email);
//     formData.append('nicScanCopy', data.nicScanCopy[0]);
//     formData.append('conductorLicen', data.conductorLicen[0]);

//     // Send form data to backend API endpoint
//     axios
//       .post('http://localhost:5000/conductorRegistration', formData)
//       .then((response) => {
//         console.log(response.data); // Handle successful response
//       })
//       .catch((error) => {
//         console.error(error); // Handle error
//       });
//   };

//   return (
//     <div className="card shadow mb-4">
//       <div className="card-body">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="form-group">
//             <label htmlFor="conductorId">Conductor ID</label>
//             <input
//               type="text"
//               className="form-control"
//               id="conductorId"
//               {...register('conductorId', { required: true })}
//             />
//             {errors.conductorId && <span className="text-danger">Conductor ID is required</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               className="form-control"
//               id="username"
//               {...register('username', { required: true })}
//             />
//             {errors.username && <span className="text-danger">Username is required</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               {...register('password', { required: true })}
//             />
//             {errors.password && <span className="text-danger">Password is required</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="mobileNumber">Mobile Number</label>
//             <input
//               type="tel"
//               className="form-control"
//               id="mobileNumber"
//               {...register('mobileNumber', { required: true })}
//             />
//             {errors.mobileNumber && <span className="text-danger">Mobile Number is required</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               {...register('email', { required: true })}
//             />
//             {errors.email && <span className="text-danger">Email is required</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="nicScanCopy">NIC Scan Copy</label>
//             <input
//               type="file"
//               className="form-control"
//               id="nicScanCopy"
//               {...register('nicScanCopy', { required: true })}
//             />
//             {errors.nicScanCopy && <span className="text-danger">NIC Scan Copy is required</span>}
//           </div>

//           <div className="form-group">
//             <label htmlFor="conductorLicen">Conductor License</label>
//             <input
//               type="file"
//               className="form-control"
//               id="conductorLicen"
//               {...register('conductorLicen', { required: true })}
//             />
//             {errors.conductorLicen && <span className="text-danger">Conductor License is required</span>}
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Add
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ConductorRegistration;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ConductorRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [confirmPassword, setConfirmPassword] = useState('');

  const password = watch('password');

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('conductorId', data.conductorId);
    formData.append('username', data.username);
    formData.append('password', data.password);
    formData.append('mobileNumber', data.mobileNumber);
    formData.append('email', data.email);
    formData.append('nicScanCopy', data.nicScanCopy[0]);
    formData.append('conductorLicen', data.conductorLicen[0]);

    axios
      .post('http://localhost:5000/conductorRegistration', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="conductorId">Conductor ID</label>
            <input
              type="text"
              className="form-control"
              id="conductorId"
              {...register('conductorId', { required: true })}
            />
            {errors.conductorId && <span className="text-danger">Conductor ID is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              {...register('username', { required: true })}
            />
            {errors.username && <span className="text-danger">Username is required</span>}
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
                  message: 'Password should have at least 6 characters',
                },
                pattern: {
                  value: /^(?=.*[0-9].*[0-9]).{6,}$/,
                  message: 'Password should have at least 2 numbers',
                },
              })}
            />
            {errors.password && (
              <span className="text-danger">{errors.password.message}</span>
            )}
          </div>

          
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              id="mobileNumber"
              {...register('mobileNumber', { required: true })}
            />
            {errors.mobileNumber && (
              <span className="text-danger">Mobile Number is required</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register('email', { required: true })}
            />
            {errors.email && <span className="text-danger">Email is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="nicScanCopy">NIC Scan Copy</label>
            <input
              type="file"
              className="form-control"
              id="nicScanCopy"
              {...register('nicScanCopy', { required: true })}
            />
            {errors.nicScanCopy && (
              <span className="text-danger">NIC Scan Copy is required</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="conductorLicen">Conductor License</label>
            <input
              type="file"
              className="form-control"
              id="conductorLicen"
              {...register('conductorLicen', { required: true })}
            />
            {errors.conductorLicen && (
              <span className="text-danger">Conductor License is required</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConductorRegistration;




