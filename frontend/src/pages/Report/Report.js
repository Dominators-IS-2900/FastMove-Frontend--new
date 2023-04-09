import React from 'react'
import styels from "./Report.module.css";
import bus from "../../assets/logo.png";
import logo1 from "../../assets/Icon 1.png";
import { Link } from 'react-router-dom';
const Report = () => {
  return (
    <div className={styels.container}>
      <div className={styels.sidebar_container}>
        <div className={styels.top_left}>
          <span className={styels.none}>&nbsp</span>

          <h1>Report</h1>
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
              <label>Bus Number</label> <br />
              <input
                className={styels.input}
                type="text"
                placeholder=" Enter Bus Number"
              />
            </div>

            <div className={styels.form_item}>
              <label>Name of Bus</label> <br />
              <input
                className={styels.input}
                type="text"
                placeholder=" Enter Name of Bus "
              />
            </div>
            <div className={styels.form_item}>
              <label>Complaint</label> <br />
              <textarea cols={54} rows={13} placeholder=" Enter message" />
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

export default Report