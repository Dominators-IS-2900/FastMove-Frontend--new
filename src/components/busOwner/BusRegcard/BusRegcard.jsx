import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { storage } from '../../../config/firebase';
import './BusRegcard.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUsername } from '../../common/Helper/helper';

const API_BASE_URL = 'http://localhost:5000';

const BusRegcard = () => {

  const [userID, setUserID]=useState('');
  const [formData, setFormData] = useState({
    BusNo: '',
    BusType: '',
    NumOfSeats: '',
    LisenceRenewDate: '',
    selectedFile: null,
    selectedFileURL: '',
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { username, user_type } = await getUsername();
        setUserID(username);
         
        
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData(); 
  
  }, []); 
  const [file, setFile] = useState();
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    let error = '';

    if (type === 'date') {
      // Handle date input
      setFormData({
        ...formData,
        [name]: new Date(value),
      });
    } else if (name === 'BusType') {
      // Handle BusType input
      let numSeats = [];
      switch (value) {
        case 'Normal':
          numSeats = ['44', '49', '54', '59'];
          break;
        case 'Semi Luxury':
          numSeats = ['54', '69'];
          break;
        case 'Luxury':
          numSeats = ['30', '45'];
          break;
        default:
          numSeats = [];
          break;
      }
      setFormData({
        ...formData,
        [name]: value,
        NumOfSeats: numSeats[0],
        numSeatsOptions: numSeats,
      });
    } else {
      // Handle other inputs
      setFormData({
        ...formData,
        [name]: value,
      });

      // Perform real-time validation for BusNo input
      if (name === 'BusNo') {
        const regex = /^[A-Z]{2}-\d{4}$/;
        if (!regex.test(value)) {
          error = 'Please enter a value in the format AB-7896.';
        }
      }
    }

    // Set the error message
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`${name}Error`]: error,
    }));
  };

  // const handleFileSelect = (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = storage.ref();
  //   const fileRef = storageRef.child(file.name);

  //   fileRef
  //     .put(file)
  //     .then((snapshot) => {
  //       console.log('File uploaded successfully.');
  //       // Get the download URL of the uploaded file
  //       return snapshot.ref.getDownloadURL();
  //     })
  //     .then((downloadURL) => {
  //       // Update the formData with the download URL
  //       setFormData({
  //         ...formData,
  //         selectedFile: file,
  //         selectedFileURL: downloadURL,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log('Error uploading file:', error);
  //     });
  // };

  const displayInfo = () => {
    
  };

  const onUpload = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0])
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { BusNo, BusType, NumOfSeats, LisenceRenewDate, selectedFileURL } = formData;
    console.log(userID) 
    const formDataToSubmit = {
      Bus_No: BusNo,
      Bus_type: BusType,
      No_ofSeats: NumOfSeats,
      Bus_Lisence_startDate: LisenceRenewDate,
      BusLisence_scancopy:'',
      UserEmail:userID
    };
  console.log(formDataToSubmit)
    try {

      const storageRef = storage.ref();
      const fileRef = storageRef.child(`BusLicense/${formDataToSubmit.Bus_No}`);
      await fileRef.put(file);
      const downloadURL = await fileRef.getDownloadURL();
      formDataToSubmit.BusLisence_scancopy = downloadURL || "";
      const response = await axios.post(`${API_BASE_URL}/api/busowner/addBus`, formDataToSubmit);
      console.log(response.data);
      if (response.data.sqlState === '23000' && response.data.sqlMessage.includes('Duplicate entry')) {
        // Display error message for duplicate entry
        toast.error('The bus is already registered.', {
          className: 'red-toast',
          bodyClassName: 'red-toast-body',
        });
        console.log(response.data);
      } else {
        // Display success message
        toast.success('Your Bus is registered successfully');
        // Clear the form data
        setFormData({
          BusNo: '',
          BusType: 'Normal',
          NumOfSeats: '',
          LisenceRenewDate: '',
          selectedFile: null,
          selectedFileURL: '',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='regbody'>
      <div className='card shadow mb-4'>
        <div className='card-header py-3'>
          <h6 className='m-0 font-weight-bold text-primary'>Fill the Information</h6>
        </div>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <table className='table table-bordered' id='dataTable' width='100%' cellSpacing='0'>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Bus Number</td>
                  <td>
                    <input
                      type='text'
                      name='BusNo'
                      id='BusNo'
                      required
                      onChange={handleChange}
                      placeholder='ex: AB-7896'
                      pattern='^[A-Z]{2}-\d{4}$'
                    />
                    {formData.BusNoError && <span className="error-message">{formData.BusNoError}</span>}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bus Type</td>
                  <td>
                    <select name='BusType' id='BusType' required onChange={handleChange} style={{ borderRadius: '25px'}}>
                      <option value=''>Select a type</option>
                      <option value='Normal'>Normal</option>
                      <option value='Semi Luxury'>Semi Luxury</option>
                      <option value='Luxury'>Luxury</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Number of seats</td>
                  <td>
                    <select name='NumOfSeats' id='NumOfSeats' required onChange={handleChange}  style={{ borderRadius: '25px'}}>
                      {formData.numSeatsOptions &&
                        formData.numSeatsOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Lisence renew date</td>
                  <td>
                    <input type='date' name='LisenceRenewDate' id='LisenceRenewDate' required onChange={handleChange}  style={{ borderRadius: '25px'}}/>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Scanned copy of bus license</td>
                  <td>
                    <input type="file" name="selectedFile" id="selectedFile" required onChange={onUpload}  />
                    <br />
                    {formData.selectedFileURL && (
                      <a href={formData.selectedFileURL} target="_blank" rel="noopener noreferrer">
                        {/* View uploaded file */}
                      </a>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <button type='submit' onClick={displayInfo} className='btn btn-primary btn-user btn-block'  style={{ borderRadius: '30px',width:"110px",height:"50px" }}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position='top-right' autoClose={3000} hideProgressBar={true} />
    </div>
  );
};

export default BusRegcard;
