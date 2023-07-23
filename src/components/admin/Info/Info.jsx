import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Info.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Info = () => {
  const [busData, setBusData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBusData, setFilteredBusData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetchBusData();
  }, []);

  useEffect(() => {
    filterBusData();
  }, [searchTerm, busData, currentPage, itemsPerPage]);

  const fetchBusData = () => {
    axios
      .get('http://localhost:5000/busesreg')
      .then(res => {
        setBusData(res.data);
        setFilteredBusData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const showMessage = (message, isError = false) => {
    if (isError) {
      toast.error(message, {
        className: 'toast-error',
      });
    } else {
      toast.success(message);
    }
  };

  const filterBusData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filteredData = busData.filter(bus =>
      bus.Bus_No.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bus.Email.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(startIndex, endIndex);
    setFilteredBusData(filteredData);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    filterBusData();
    setSearchTerm('');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (busNo) => {
    axios
      .delete(`http://localhost:5000/busesreg/${busNo}`)
      .then(res => {
        // Display success message
        showMessage('Bus Details deleted successfully');
        // Update the bus data
        fetchBusData();
      })
      .catch(err => {
        console.log(err);
        showMessage('Error deleting row', true);
      });
  };
  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString();
    return formattedDate;
  };


  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <div className="search-bar">
          <label htmlFor="searchInput" className="search-label">Search bus number:</label>
          <div className="search-input">
            <input
              type="text"
              id="searchInput"
              placeholder="Enter bus number"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th className="green-column">Bus No</th>
                <th className="green-column">Email</th>
                <th className="green-column">No of Seats</th>
                <th className="green-column">Bus Type</th>
                <th className="green-column">License Start Date</th>
                <th className="green-column">License Expire Date</th>
                <th className="green-column">License Scan Copy</th>
                <th className="green-column">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBusData.map((bus, index) => (
                <tr key={bus.Bus_No}>
                  <td>{bus.Bus_No}</td>
                  <td>{bus.Email}</td>
                  <td>{bus.No_ofSeats}</td>
                  <td>{bus.Bus_type}</td>
                  <td>{formatDate(bus.Bus_Lisence_startDate)}</td>
                  <td>{formatDate(bus.Bus_Lisence_expireDate)}</td>
                  <td className="nic-cell">
                    <a href={bus.BusLisence_scancopy} target="_blank" rel="noopener noreferrer">
                      View NIC
                    </a>
                  </td>
                  <td className="d-flex align-items-center justify-content-center">
                    <div className="Button">
                      <br />
                      <button
                        className="btn btn-danger equal-width delete-button"
                        onClick={() => handleDelete(bus.Bus_No)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          <button
            className="btn btn-secondary previous-button"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span>{currentPage}</span>
          <button
             className="btn btn-secondary next-button"
              disabled={filteredBusData.length < itemsPerPage}
              onClick={() => handlePageChange(currentPage + 1)}
              >
                 Next
              </button>

        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Info;
