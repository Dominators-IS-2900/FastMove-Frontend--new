// import "./featured.scss";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

// const Featured = () => {
//   return (
//     <div className="featured">
//       <div className="top">
//         <h1 className="title">Total Revenue</h1>
//         <MoreVertIcon fontSize="small" />
//       </div>
//       <div className="bottom">
//         <div className="featuredChart">
//           <CircularProgressbar value={80} text={"80%"} strokeWidth={5} />
//         </div>
//         <p className="title">Total sales made today</p>
//         <p className="amount">$420</p>
//       </div>
//     </div>
//   );
// };

// export default Featured;

import React, { useEffect, useState } from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import axios from 'axios';
import './Featured.css'

// const Featured = () => {
//   const [totalAmount, setTotalAmount] = useState(0);

  // useEffect(() => {
  //   fetch("/currentrevenue")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setTotalAmount(data.totalAmount);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(()=>{
  //   axios.get("http://localhost:5000/currentrevenue")
  //   .then(res=>{
  //     setTotalAmount(res.data.totalAmount);
  //     console.log(totalAmount);
  //   }).catch(
  //     (err)=>{
  //       console.log(err);
  //     }
  //   );
  // },)

  const Featured = () => {
    const [totalAmount, setTotalAmount] = useState(0);
  
    useEffect(() => {
      axios.get("http://localhost:5000/currentrevenue")
        .then(res => {
          setTotalAmount(res.data.totalAmount);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);

  return (
    <div className="featured">
      <div className="top">
        {/* <h1 className="title">Total Revenue</h1> */}
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        {/* <div className="featuredChart">
          <CircularProgressbar
            value={80}
            text={"80%"}
            strokeWidth={5}
          />
        </div> */}
        <p className="title">Total sales made today</p>
        <p className="amount">{totalAmount}.00 Lkr</p>
        
        <button type="submit" className="btn btn-primary ml-1" style={{ borderRadius: '25px' }}>
            Retrieve
        </button>

      </div>
    </div>
  );
};

export default Featured;
