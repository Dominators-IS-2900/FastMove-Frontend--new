import React,{useState} from 'react'
import Sidebar from './../Sidebar/Sidebar';
import styles from './Login.module.css'
import { Link } from "react-router-dom";
import { message } from "antd";
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [createpassword, setCreatepassword] = useState("");


const fetchLogin = () => {
  fetch("http://localhost:5000/api/user/userlogin", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      createpassword,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.msg) {
        message.success(data.msg);
        console.log(data.msg);
        history.push("/home");

      } else {
        message.error(data.error);
        console.log(data.error);
      }
    });
};



  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.body_body}>
        <div className={styles.signup_container}>
          <h2 className={styles.title}>Login for Passenage Account ! </h2>
          <div className={styles.form_container}>
            <div className={styles.signup_form}>
              <div className={styles.form_item}>
                <input
                  type="text"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.form_item}>
                <input
                  type="text"
                  placeholder=" Enter Password"
                  value={createpassword}
                  onChange={(e) => setCreatepassword(e.target.value)}
                />
              </div>

              <div className={styles.actions}>
                <p class="login">
                  Don't have an account?
                  <Link to="register" className={styles.link}>
                    Register
                  </Link>
                </p>
                <button type="submit" onClick={() => fetchLogin()}>
                  <Link to="home">Login</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login