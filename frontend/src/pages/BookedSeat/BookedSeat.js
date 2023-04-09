import React from 'react'
import styels from "./BookedSeat.module.css";
import bus from "../../assets/logo.png";
import bus1 from "../../assets/bus1.jpg";
import logo1 from "../../assets/Icon 1.png";
import { Link } from 'react-router-dom';
function BookedSeat() {
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
        <div className={styels.date}>
          <h1>2022-02-23</h1>
        </div>
        <div className={styels.bus2_container}></div>

        <div>
          <div className={styels.bus1_container}>
            <div>
              <img src={bus1} className={styels.samll_bus} />
            </div>
            <div className={styels.cards}>
              <div className={styels.card}>
                <h3>9.00 AM - 8.00 PM</h3>
                <h3>Seri Express</h3>
                <p>AC Sleeper</p>
                <div className={styels.price}>
                  <h3>$6.02</h3>
                </div>
              </div>
            </div>

            <div className={styels.card_status}>
              <div className={styels.card_div}>
                <h3>Bus No</h3>
              </div>
              <div className={styels.card_div}>
                <h3>025</h3>
              </div>
            </div>
            <div className={styels.card_status}>
              <div className={styels.card_div}>
                <h3>Seat No</h3>
              </div>
              <div className={styels.card_div}>
                <h3>C2</h3>
              </div>
            </div>
            <div className={styels.card_status}>
              <div className={styels.card_div}>
                <h3>Seat No</h3>
              </div>
              <div className={styels.card_div}>
                <h3>D2</h3>
              </div>
            </div>
            <div className={styels.card_status}>
              <div className={styels.card_div}>
                <h3>Bus Fees</h3>
              </div>
              <div className={styels.card_div}>
                <h3>$10.98</h3>
              </div>
            </div>

            <div className={styels.actions}>
              <div>
                <Link to="paymentsuccess">
                  <button className={styels.back} type="submit">
                    Pay
                  </button>
                </Link>

                <Link to="single-bus">
                  <button className={styels.ok} type="submit">
              Cancel
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

export default BookedSeat