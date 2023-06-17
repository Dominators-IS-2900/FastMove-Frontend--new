
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InvestigationCard.css';

const InvestigationCard = () => {
  const [messages, setMessages] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [showTextArea, setShowTextArea] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Helpowner")
      .then(res => {
        setMessages(res.data);
        setShowTextArea(new Array(res.data.length).fill(false));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleReplyClick = index => {
    const updatedShowTextArea = [...showTextArea];
    updatedShowTextArea[index] = true;
    setShowTextArea(updatedShowTextArea);
  };

  const handleTextAreaChange = event => {
    setReplyText(event.target.value);
  };

  const handleReplySubmit = () => {
    // Perform submission logic, e.g., send replyText to the server
    // Redirect to the owner table of the inquiry information page

    // Reset the state after submission
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
               
                <th>Inquiry ID</th>
                <th>User ID</th>
                <th>Type Of Issue</th>
                <th>Complain</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message, index) => (
                <tr key={message.InquiryID}>
                  <td>{message.InquiryID}</td>
                  <td>{message.UserID}</td>
                  <td>{message.type_of_issue}</td>
                  <td>{message.complain}</td>
                  <td>
                    <button className="small-button" onClick={() => handleReplyClick(index)}>
                      Reply
                    </button>
                    {showTextArea[index] && (
                      <div>
                        <textarea value={replyText} onChange={handleTextAreaChange}></textarea>
                        <button className="small-button" onClick={handleReplySubmit}>
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
    </div>
  );
};

export default InvestigationCard;
