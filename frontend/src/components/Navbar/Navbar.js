import React from 'react'
import logo1 from '../../assets/Icon 1.png'
import bus from "../../assets/logo.png";
import styles from  './Nabar.module.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.sidebar_container}>
          <div>
            <img src={logo1} alt="logo" className={styles.logo} />
          </div>

          <div>
            <div>
              <div className={styles.button}>
                <h1>
                  <Link to="home">Home</Link>
                </h1>
              </div>
            </div>
            <div>
              <div className={styles.button}>
                <h1>
                  <Link to="profile">Profile</Link>
                </h1>
              </div>
            </div>
            <div>
              <div className={styles.button}>
                <h1>
                  {" "}
                  <Link to="booking">Booking</Link>
                </h1>
              </div>
            </div>
            <div>
              <div className={styles.button}>
                <h1>
                  <Link to="report">Report</Link>{" "}
                </h1>
              </div>
            </div>
            <div>
              <div className={styles.button}>
                <h1>
                  <Link to="offer">Offer</Link>{" "}
                </h1>
              </div>
            </div>
            <div>
              <div className={styles.button}>
                <h1>
                  <Link to="help">Help</Link>{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.pesslogo}>
          <img src={logo1} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.head}>
          <h1>Hello Amal Welcome to Olinoq</h1>
        </div>
        <div className={styles.busimage}>
          <img src={bus} alt="bus" className={styles.logo} />
        </div>
        <div className={styles.logout}>
          <h3>
            <Link to="login" className={styles.link}>
              Logout
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Navbar