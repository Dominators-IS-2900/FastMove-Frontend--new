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
    if (type === 'radio') {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (type === 'date') {
      setFormData({
        ...formData,
        [name]: new Date(value), // convert to a Date object
      });
    } else {
      setFormData({
        ...formData,
        [name]: files ? files[0] : value,
      });
    }

    console.log(value)
  };

  function displayInfo(){
    console.log(formData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { BusNo, BusType, NumOfSeats, LisenceRenewDate } = formData;
    
  
    const formDataToSubmit =( {
      Bus_No:BusNo,
      Bus_type:BusType,
      No_ofSeats:NumOfSeats,
      Bus_Lisence_startDate:LisenceRenewDate
    });

    try {
      console.log(formDataToSubmit)
      axios.post(`${API_BASE_URL}/addBus`, formDataToSubmit
      // , {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // }
      ).then((res)=>{
        console.log(res.data);

      })
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
                  <input type='radio' name='BusType' value='Normal' required onChange={handleChange} />
                  <label htmlFor='Male'> Normal</label> <br />
                  <input type='radio' name='BusType' value='Semi Luxury' required onChange={handleChange} />
                  <label htmlFor='Female'> Semi Luxury</label>
                  <br />
                  <input type='radio' name='BusType' value='Luxury' required onChange={handleChange} />
                  <label htmlFor='Female'> Luxury</label>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Number of seats</td>
                <td>
                  <input type='text' name='NumOfSeats' id='NumOfSeats' required onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Lisence renew date</td>
                <td>
                  <input type='date' name='LisenceRenewDate' id='LisenceRenewDate' required onChange={handleChange}/>
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