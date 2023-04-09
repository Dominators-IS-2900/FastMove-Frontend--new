import React from 'react'
import styels from "./Help.module.css";
import bus from "../../assets/logo.png";
import logo1 from "../../assets/Icon 1.png";
import { Link } from 'react-router-dom';
const Help = () => {
  return (
    <div className={styels.container}>
      <div className={styels.sidebar_container}>
        <div className={styels.top_left}>
          <span className={styels.none}>&nbsp</span>

          <h1>Help</h1>
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
            <div className={styels.form_item}>
              <label>How can we help</label> <br />
              <br />
              <textarea cols={60} rows={17} placeholder=" Enter message" />
            </div>

            <div className={styels.actions}>
              <div>
                <Link to="home">
                  <button className={styels.back} type="submit">
                    Back
                  </button>
                </Link>

                <button className={styels.edit} type="submit">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Help