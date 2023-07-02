import React, { useState } from 'react';
import avatar from '../../../Images/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidation } from '../Helper/registration_validation/validate';
import convertToBase64 from '../Helper/convert';
import useFetch from '../../../hooks/fetch.hook';
import { updateUser } from '../Helper/helper';
import { useNavigate } from 'react-router-dom';
import styles from './Profile.css';

export default function Profile() {
  const [file, setFile] = useState();
  const [{ isLoading, apiData, serverError }] = useFetch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: apiData?.FName || '',
      lastName: apiData?.LName || '',
      email: apiData?.Email || '',
      mobile: apiData?.Contact_No || '',
      address: apiData?.address || '',
    },
    enableReinitialize: true,
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || apiData?.profile || '' });
      let updatePromise = updateUser(values);

      toast.promise(updatePromise, {
        loading: 'Updating...',
        success: <b>Update Successfully...!</b>,
        error: <b>Could not Update!</b>,
      });
    },
  });

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  // logout handler function
  function userLogout() {
    localStorage.removeItem('token');
    navigate('/');
  }

  if (isLoading) return <h1 className={`${styles.text2xl} ${styles.fontBold}`}>isLoading</h1>;
  if (serverError) return <h1 className={`${styles.textXl} ${styles.textRed500}`}>{serverError.message}</h1>;

  return (
    <div className={styles.pageContainer}>
      <Toaster position='top-center' reverseOrder={false} />

      <div className={styles.pageContent}>
        <div className={styles.profileContainer}>
          <div className={styles.title}>
            <h4 className={styles.heading}>Profile</h4>
            <span className={styles.subheading}>You can update the details.</span>
          </div>

          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <div className={styles.profile}>
              <label htmlFor='profile'>
                <img src={apiData?.profile || file || avatar} className={styles.avatar} alt='avatar' />
              </label>

              <input onChange={onUpload} type='file' id='profile' name='profile' />
            </div>

            <div className={styles.textbox}>
              <div className={styles.name}>
                <input
                  {...formik.getFieldProps('firstName')}
                  className={styles.input}
                  type='text'
                  placeholder='First Name'
                />
                <input
                  {...formik.getFieldProps('lastName')}
                  className={styles.input}
                  type='text'
                  placeholder='Last Name'
                />
              </div>

              <div className={styles.name}>
                <input
                  {...formik.getFieldProps('mobile')}
                  className={styles.input}
                  type='text'
                  placeholder='Mobile No.'
                />
                <input
                  {...formik.getFieldProps('email')}
                  className={styles.input}
                  type='text'
                  placeholder='Email*'
                />
              </div>
              
              <input {...formik.getFieldProps('address')} className="" type="text" placeholder='Address' />
                  <button className= "" type='submit'>Update</button>
               
            </div>

            <div className={styles.logoutContainer}>
              <span className={styles.logoutText}>
                Come back later? <button onClick={userLogout} className={styles.logoutButton}>Logout</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
