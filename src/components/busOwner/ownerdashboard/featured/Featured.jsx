<<<<<<< HEAD
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
=======
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
>>>>>>> a1349782079c7ed00fbb5d22a3450fa5f3cfd1d6

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
<<<<<<< HEAD
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
=======
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
>>>>>>> a1349782079c7ed00fbb5d22a3450fa5f3cfd1d6
      </div>
    </div>
  );
};

export default Featured;

