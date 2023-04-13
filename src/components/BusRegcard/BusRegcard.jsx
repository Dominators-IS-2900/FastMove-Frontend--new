// import React, { useState } from 'react';
// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:5000';

// const BusRegcard = () => {
//   const [formData, setFormData] = useState({
//     BusNo: '',
//     BusType: '',
//     NumOfSeats: '',
//     LisenceRenewDate: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'date') {
//       setFormData({
//         ...formData,
//         [name]: new Date(value), // convert to a Date object
//       });
//     } else if (name === 'BusType') {
//       const numSeats = (value === 'Normal') ? ['44', '49','54','59'] : ['100'];
//       setFormData({
//         ...formData,
//         [name]: value,
//         NumOfSeats: numSeats[0],
//         numSeatsOptions: numSeats
//       });
      
//     } else {
//       setFormData({
//         ...formData,
//         [name]: files ? files[0] : value,
//       });
//     }
//   };

//   function displayInfo() {
//     console.log(formData);
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { BusNo, BusType, NumOfSeats, LisenceRenewDate } = formData;

//     const formDataToSubmit = ({
//       Bus_No: BusNo,
//       Bus_type: BusType,
//       No_ofSeats: NumOfSeats,
//       Bus_Lisence_startDate: LisenceRenewDate
//     });

//     try {
//       console.log(formDataToSubmit)
//       axios.post(`${API_BASE_URL}/addBus`, formDataToSubmit).then((res) => {
//         console.log(res.data);
//       })
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className='card shadow mb-4'>
//       <div className='card-header py-3'>
//         <h6 className='m-0 font-weight-bold text-primary'>Fill the Information </h6>
//       </div>
//       <div className='card-body'>
//         <form onSubmit={handleSubmit}>
//           <table className='table table-bordered' id='dataTable' width='100%' cellSpacing='0'>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 <td>Bus Number</td>
//                 <td>
//                   <input type='text' name='BusNo' id='BusNo' required onChange={handleChange} />
//                 </td>
//               </tr>
//               <tr>
//                 <td>2</td>
//                 <td>Bus Type</td>
//                 <td>
//                   <select name='BusType' id='BusType' required onChange={handleChange}>
//                     <option value=''>Select a type</option>
//                     <option value='Normal'>Normal</option>
//                     <option value='Semi Luxury'>Semi Luxury</option>
//                     <option value='Luxury'>Luxury</option>
//                   </select>
//                 </td>
//               </tr>
//               <tr>

import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const BusRegcard = () => {
  const [formData, setFormData] = useState({
    BusNo: '',
    BusType: '',
    NumOfSeats: '',
    LisenceRenewDate: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'date') {
      setFormData({
        ...formData,
        [name]: new Date(value), // convert to a Date object
      });
    } else if (name === 'BusType') {
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
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
    }
  };

  function displayInfo() {
    console.log(formData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { BusNo, BusType, NumOfSeats, LisenceRenewDate } = formData;

    const formDataToSubmit = ({
      Bus_No: BusNo,
      Bus_type: BusType,
      No_ofSeats: NumOfSeats,
      Bus_Lisence_startDate: LisenceRenewDate,
    });

    try {
      console.log(formDataToSubmit);
      axios.post(`${API_BASE_URL}/addBus`, formDataToSubmit).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <h6 className='m-0 font-weight-bold text-primary'>Fill the Information </h6>
      </div>
      <div className='card-body'>
        <form onSubmit={handleSubmit}>
          <table className='table table-bordered' id='dataTable' width='100%' cellSpacing='0'>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bus Number</td>
                <td>
                  <input type='text' name='BusNo' id='BusNo' required onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Bus Type</td>
                <td>
                  <select name='BusType' id='BusType' required onChange={handleChange}>
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
                  <select name='NumOfSeats' id='NumOfSeats' required onChange={handleChange}>
                    {formData.numSeatsOptions && formData.numSeatsOptions.map(option => (
                      <option value={option}>{option}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Lisence renew date</td>
                <td>
                  <input type='date' name='LisenceRenewDate' id='LisenceRenewDate' required onChange={handleChange}/>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Scanned copy of bus license</td>
                <td>
                  <input type='file' name='LisenceRenewDate' id='LisenceRenewDate' required onChange={handleChange}/>
                </td>
              </tr>
            </tbody>

          </table>
          <button type='submit'onClick={displayInfo} className='btn btn-primary'>
            Add Bus
          </button>
        </form>

      </div>

    </div>
  )}

export default BusRegcard;


