import React, { useEffect, useState } from "react";
import { getUsername } from '../../../common/Helper/helper';
import axios from "axios";
import "./Featured.css";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
const Featured = () => {
  const [userID, setUserID]=useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const handleRetrieve = () => {
    axios
      .post("api/payout", {
        amount: totalAmount,
        recipientUserId:userID,
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
      .get("api/busowner/currentRevenue")
      .then((res) => {
        setTotalAmount(res.data.totalAmount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

   useEffect(() => {
        const fetchData = async () => {
          try {
            const { username, user_type } = await getUsername();
            setUserID(username);
            
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData(); 
      
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
          style={{ borderRadius: "25px", height:"50px", width:"110px"}}
          onClick={handleRetrieve}
        >
          <i class="fa fa-download"></i>
          Retrieve
        </button>
      </div>
    </div>
  );
};

export default Featured;

