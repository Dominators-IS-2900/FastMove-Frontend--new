import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './IssueO.css';

const IssueO = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/IssuesOwner")
      .then(res => {
        setMessages(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
                <th>Reply</th>
              </tr>
            </thead>
            <tbody>
              {messages.map(message => (
                <tr key={message.InquiryID}>
                  <td>{message.InquiryID}</td>
                  <td>{message.UserID}</td>
                  <td>{message.Type_of_Issue}</td>
                  <td>{message.Complain}</td>
                  <td>{message.Reply}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IssueO;
