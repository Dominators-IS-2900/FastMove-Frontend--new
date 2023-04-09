import React from 'react'
import styels from "./BusList.module.css";
import bus from "../../assets/logo.png";
import bus1 from "../../assets/bus1.jpg";
import logo1 from "../../assets/Icon 1.png";
import { Link } from 'react-router-dom';

const BusList = () => {
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
        <div className={styels.bus2_container}>
          <div>
            <h3>Batticaloa</h3>
          </div>
          <div>
            <img src={bus1} className={styels.samll_bus} />
          </div>
          <div>
            <h3>Colombo</h3>
          </div>
        </div>
        <div className={styels.date}>
          <h1>2022-02-23</h1>
        </div>
        <div>
          <div className={styels.bus1_container}>
            <div className={styels.cards}>
              <Link to="single-bus">
                <div className={styels.card}>
                  <h3>9.00 AM - 8.00 PM</h3>
                  <h3>Seri Express</h3>
                  <p>AC Sleeper</p>
                  <div className={styels.price}>
                    <h3>$6.02</h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className={styels.cards}>
              <div className={styels.card}>
                <h3>9.00 AM - 5.00 PM</h3>
                <h3>Maha Express</h3>
                <p>AC Sleeper</p>
                <div className={styels.price}>
                  <h3>$5.49</h3>
                </div>
              </div>
            </div>
            <div className={styels.cards}>
              <div className={styels.card}>
                <h3>9.00 AM - 5.00 PM</h3>
                <h3>Zeena Express</h3>
                <p>NON-AC Sleeper</p>
                <div className={styels.price}>
                  <h3>$3.49</h3>
                </div>
              </div>
            </div>

            <div className={styels.actions}>
              <div>
                <Link to="home">
                  <button className={styels.back} type="submit">
                    Back
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

export default BusList