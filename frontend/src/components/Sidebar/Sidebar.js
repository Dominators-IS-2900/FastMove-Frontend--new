import React from 'react'
import styles from "./Sidebar.module.css";
import bus from '../../assets/logo.png'
const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
      <div>
        <img src={bus} alt="logo" className={ styles.busimage} />
      </div>
    </div> 
  )
}

export default Sidebar