import React from 'react'
import styels from "./Payment.module.css";
import bus from "../../assets/logo.png";
import logo1 from "../../assets/Icon 1.png";
import { Link } from 'react-router-dom';
const Payment = () => {
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
        <h1 className={styels.head}>Payment</h1>
        <div>
          <div className={styels.signup_container}>
            <div className={styels.form_item}>
              <input
                className={styels.input}
                type="text"
                placeholder=" Fullname"
              />
            </div>

            <div className={styels.form_item}>
              <input
                className={styels.input}
                type="text"
                placeholder=" country"
              />
            </div>
            <div className={styels.form_item}>
              <input
                className={styels.input}
                type="text"
                placeholder=" Address"
              />
            </div>
            <div className={styels.form_item}>
              <input
                className={styels.input}
                type="text"
                placeholder=" Card Number"
              />
            </div>
            <div className={styels.form_item}>
              <input
                className={styels.input}
                type="text"
                placeholder=" Expiration date"
              />
            </div>
            <div className={styels.form_item}>
              <input
                className={styels.input}
                type="text"
                placeholder=" Security code"
              />
            </div>

            <div className={styels.actions}>
              <div>
                <Link to="single-bus">
                  <button className={styels.back} type="submit">
                    Cancel
                  </button>
                </Link>
                <Link to="view-seat">
                  <button className={styels.edit} type="submit">
                    Pay
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

export default Payment