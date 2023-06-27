import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './IssuesP.css';

const IssuesP = () => {
  const [messages, setMessages] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [showTextArea, setShowTextArea] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    axios
      .get("http://localhost:5000/Helppassenger")
      .then(res => {
        setMessages(res.data);
        setShowTextArea(new Array(res.data.length).fill(false));
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleReplyClick = index => {
    const updatedShowTextArea = [...showTextArea];
    updatedShowTextArea[index] = true;
    setShowTextArea(updatedShowTextArea);
  };

  const handleTextAreaChange = event => {
    setReplyText(event.target.value);
  };

  const handleReplySubmit = (InquiryID) => {
    const requestBody = {
      InquiryID,
      Reply: replyText
    };

    axios
      .post(`http://localhost:5000/passengerreply/${InquiryID}/${replyText}`)
      .then(res => {
        console.log('Reply submitted successfully');
        toast.success('Reply  sent successfully'); // Show toast notification
        fetchMessages(); // Fetch the updated data after submission
      })
      .catch(err => {
        console.log('Error submitting reply:', err);
        toast.error('Failed to send message'); // Show toast notification for error
      });

    setShowTextArea(new Array(messages.length).fill(false));
    setReplyText('');
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
                <th className="green-column">Email</th>
                <th className="green-column">Bus No</th>
                <th className="green-column">Complain</th>
                <th className="green-column">Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message, index) => (
                <tr key={message.InquiryID}>
                  <td>{message.InquiryID}</td>
                  <td>{message.Email}</td>
                  <td>{message.BusNo}</td>
                  <td>{message.Complain}</td>
                  <td>
                    <button className="small-button" onClick={() => handleReplyClick(index)}>
                      Reply
                    </button>
                    {showTextArea[index] && (
                      <div>
                        <textarea value={replyText} onChange={handleTextAreaChange}></textarea>
                        <button
                          className="small-button"
                          onClick={() => handleReplySubmit(message.InquiryID)}
                        >
                          Send
                        </button>
                      </div>
                    )}
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
        pauseOnHover/> 
    </div>
  );
};

export default IssuesP;


