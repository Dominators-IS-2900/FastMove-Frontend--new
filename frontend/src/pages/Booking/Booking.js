import React from 'react'
import styels from "./Booking.module.css";
import bus from "../../assets/logo.png";
import logo1 from "../../assets/Icon 1.png";
import { Link } from 'react-router-dom';
const Booking = () => {
  return (
    <div className={styels.container}>
      <div className={styels.sidebar_container}>
        <div className={styels.top_left}>
          <span className={styels.none}>&nbsp</span>
          <h1>Booking</h1>
        </div>
        <div className={styels.bus}>
          <img src={bus} />
        </div>
      </div>

      <div className={styels.div}>
        <div className={styels.logo1div}>
          <img src={logo1} />
        </div>
        <div>
          <div className={styels.signup_container}>
            <h2>Where you want to go</h2>
            <div className={styels.form_item}>
              <input
                className={styels.input}
                type="text"
                placeholder=" Destination"
              />
            </div>

            <div className={styels.form_item}>
              <input
                className={styels.input}
                type="text"
                placeholder=" Where"
              />
            </div>
            <div className={styels.form_item}>
              <input className={styels.input} type="text" placeholder=" From" />
            </div>

            <div className={styels.actions}>
              <div>
                <Link to="home">
                  <button className={styels.back} type="submit">
                    <Link> Back</Link>
                  </button>
                </Link>

                <Link to="bus-list">
                  <button className={styels.edit} type="submit">
                    Search
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking