import React from "react";
import styels from "./Offer.module.css";
import bus from "../../assets/logo.png";
import logo1 from "../../assets/Icon 1.png";
import { Link } from "react-router-dom";
const Offer = () => {
  return (
    <div className={styels.container}>
      <div className={styels.sidebar_container}>
        <div className={styels.top_left}>
          <span className={styels.none}>&nbsp</span>
          <h1>Offrer</h1>
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
            <div className={styels.card}>
              <h1>
                Congratulation you have been selected <br /> for coupon 🎉
              </h1>
            </div>

            <div className={styels.actions}>
              <div>
                <Link to="home">
                  {" "}
                  <button className={styels.back} type="submit">
                   BACK
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
