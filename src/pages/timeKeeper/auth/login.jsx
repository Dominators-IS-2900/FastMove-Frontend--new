import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault();
    if(userName && password){
      axios.post('http://localhost:3000/login',{
        userName,
        password
      })
    .then(function (response) {
      if(response?.data?.status == "success"){
        const {user} = response.data
        localStorage.setItem("userId",user['id'])
        navigate("/")
      }
    })
    }
  }
  return (
    <div id="content" className="content">
      <div className="container-fluid mr-5">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                          onChange={(e)=>{setUserName(e.target.value)}}
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                          onChange={(e)=>{setPassword(e.target.value)}}
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <a
                          href="index.html"
                          className="btn btn-primary btn-user btn-block"
                          onClick={(e)=>{onSubmit(e)}}
                        >
                          Login
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      {/* <div className="text-center">
                        <a className="small" href="register.html">
                          Create an Account!
                        </a>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
