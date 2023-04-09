import React from "react";
import styels from "./Profile.module.css";
import bus from "../../assets/logo.png";
import logo1 from "../../assets/Icon 1.png";
import { Link } from "react-router-dom";
const Profile = () => {
  return (
    <div className={styels.container}>
      <div className={styels.sidebar_container}>
        <div className={styels.top_left}>
          <span className={styels.none}>&nbsp</span>
          <h1>Profile</h1>
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
              <label>Username</label> <br />
              <input
                className={styels.input}
                type="text"
                placeholder=" Enter Email Address"
              />
            </div>

            <div className={styels.form_item}>
              <label>Password</label> <br />
              <input
                className={styels.input}
                type="text"
                placeholder=" Enter Password"
              />
            </div>
            <div className={styels.form_item}>
              <label>Phonenumber</label> <br />
              <input
                className={styels.input}
                type="text"
                placeholder=" Enter Phonenumber"
              />
            </div>
            <div className={styels.form_item}>
              <label>Email</label> <br />
              <input
                className={styels.input}
                type="text"
                placeholder=" Enter Email"
              />
            </div>

            <div className={styels.actions}>
              <div>
                <Link to="home">
                  <button className={styels.back} type="submit">
                    <Link>Back</Link>
                  </button>
                </Link>
                <button className={styels.edit} type="submit">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
