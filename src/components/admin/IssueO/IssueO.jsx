import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './IssueO.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IssueO = () => {
  const [messages, setMessages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    filterMessages();
  }, [searchTerm, messages, currentPage, itemsPerPage]);

  const fetchMessages = () => {
    axios
      .get("http://localhost:5000/sendreplyowner")
      .then(res => {
        setMessages(res.data);
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

  const filterMessages = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const filteredData = messages.filter(
      (message) =>
        message.Complain ||
        message.Email ||
        message.Reply
    ).slice(startIndex, endIndex);
    setFilteredMessages(filteredData);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    filterMessages();
    setSearchTerm('');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (InquiryID) => {
    axios
      .delete(`http://localhost:5000/deleteownereply/${InquiryID}`)
      .then(res => {
        // Display success message
        showMessage('Bus Owner deleted successfully');

        // Fetch updated passenger data
        fetchMessages();
      })
      .catch(err => {
        console.log(err);
        showMessage('Error deleting row', true);
      });
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <div className="search-bar">
          <label htmlFor="searchInput" className="search-label">Search :</label>
          <div className="search-input">
            <input
              type="text"
              id="searchInput"
              placeholder="Enter"
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
                <th className="green-column">Inquiry ID</th>
                <th className="green-column">Email</th>
                <th className="green-column">Complain</th>
                <th className="green-column">Reply</th>
                <th className="green-column">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredMessages.map(message => (
                <tr key={message.InquiryID}>
                  <td>{message.InquiryID}</td>
                  <td>{message.Email}</td>
                  <td>{message.Complain}</td>
                  <td>{message.Reply}</td>
                  <td>
                    <div className="Button">
                      <button className="btn btn-danger equal-width delete-button" onClick={() => handleDelete(message.InquiryID)}>
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
            disabled={filteredMessages.length < itemsPerPage}
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

export default IssueO;
