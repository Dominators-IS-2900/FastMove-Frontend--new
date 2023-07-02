import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './IssueO.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IssueO = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

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
      <div className="card-header py-3"></div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th className="green-column">Inquiry ID</th>
                <th  className="green-column">User ID</th>
                <th  className="green-column">Type Of Issue</th>
                <th  className="green-column">Complain</th>
                <th  className="green-column">Reply</th>
                <th  className="green-column">Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map(message => (
                <tr key={message.InquiryID}>
                  <td>{message.InquiryID}</td>
                  <td>{message.UserID}</td>
                  <td>{message.type_of_issue}</td>
                  <td>{message.complain}</td>
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

export default IssueO;
