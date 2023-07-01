import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Featured.css";

const Featured = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const handleRetrieve = () => {
    axios
      .post("http://localhost:5000/payout", {
        amount: totalAmount,
        recipientUserId: "USER001",
      })
      .then((response) => {
        console.log("Payout response:", response.data);
      })
      .catch((error) => {
        console.error("Payout error:", error.response.data.error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/currentrevenue")
      .then((res) => {
        setTotalAmount(res.data.totalAmount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="featured">
      <div className="top">
        {/* <MoreVertIcon fontSize="small" /> */}
      </div>
      <div className="bottom">
        <p className="title">Total sales made today</p>
        <p className="amount">{totalAmount}.00 Lkr</p>

        <button
          type="submit"
          className="btn btn-primary ml-1"
          style={{ borderRadius: "25px" }}
          onClick={handleRetrieve}
        >
          Retrieve
        </button>
      </div>
    </div>
  );
};

export default Featured;

