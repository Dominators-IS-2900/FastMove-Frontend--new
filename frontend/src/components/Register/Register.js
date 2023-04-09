import React,{useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { message } from "antd";

  import { ToastContainer, toast } from "react-toastify";


const Register = ({ history }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [createpassword, setCreatepassword] = useState("");
  const [confirmpassword, setConfrimpassword] = useState("");
  const [nic, setNic] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
//  console.log({
//    firstname,
//    lastname,
//    email,
//    createpassword,
//    confirmpassword,
//    nic,
//    mobile,
//    address,
 
//  });

  console.log(gender);
const fetchRegister = () => {
  fetch("http://localhost:5000/api/user/userregister", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      createpassword,
      confirmpassword,
      nic,
      mobile,
      address,
      gender
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      
      if (data.msg) {
        message.success(data.msg);
   
         toast(data.msg);
        window.location.reload(true);
        history.push("/login");
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
          <h2 className={styles.title}>Sign up for Passenage Account ! </h2>
          <div className={styles.form_container}>
            <div className={styles.signup_form}>
              <div className={styles.form_item}>
                <div className={styles.name}>
                  <div class={styles.form_item}>
                    <input
                      type="text"
                      placeholder="FirstName"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
                  <div class={styles.form_item}>
                    <input
                      className={styles.input}
                      type="text"
                      placeholder="LastName"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.form_item}>
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className={styles.form_item}>
                <input
                  type="text"
                  placeholder=" Create Password"
                  value={createpassword}
                  onChange={(e) => setCreatepassword(e.target.value)}
                />
              </div>
              <div className={styles.form_item}>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmpassword}
                  onChange={(e) => setConfrimpassword(e.target.value)}
                />
              </div>

              <div className={styles.form_item}>
                <input
                  type="text"
                  placeholder=" Nic"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                />
              </div>
              <div className={styles.form_item}>
                <input
                  type="text"
                  placeholder=" PhoneNumber"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className={styles.form_item}>
                <input
                  type="text"
                  placeholder=" Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className={styles.radio}>
                <h3>Gender : </h3>
                <div className={styles.radio1}>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                  />
                  Male
                </div>
                <div className={styles.radio1}>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                  />
                  Female
                </div>
              </div>

              <div className={styles.actions}>
                <p class="login">
                  Already have an account?
                  <Link className={styles.link} to="login">
                    Login
                  </Link>
                </p>
                <button
                  className={styles.btn}
                  type="submit"
                  onClick={() => fetchRegister()}
                >
                  <Link to="login">Register</Link>
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
