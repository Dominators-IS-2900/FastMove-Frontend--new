import React from 'react'
import styles from './PaymentSuccess.module.css'
import bus from "../../assets/logo.png";
import pass from "../../assets/pass.jpeg";
import logo1 from "../../assets/Icon 1.png";
import { Link } from 'react-router-dom';
const PaymentSuccess = () => {
    return (
      <div className={styles.body}>
        <div className={styles.paymentsuccess}>
          <div className={styles.paymentsuccess_top}>
            <div className={styles.bus_img}>
              <img src={bus} />
            </div>
            <div className={styles.profile_img}>
              <img src={logo1} />
            </div>
          </div>
          <div className={styles.paymentsuccess_bottom}>
            <div className={styles.card}>
              <div>
                <img src={pass} />
              </div>
              <div>
                <h1 className={styles.heading}>Payment successful ! </h1>
              </div>
              <div>
                <h2>your seat ticket has been booked successfully</h2>
              </div>

              <div className={styles.actions}>
                <button className={styles.button} type="submit">
                  <Link to="view-seat">Back</Link>
                </button>
                <button className={styles.button} type="submit">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PaymentSuccess