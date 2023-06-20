import React, { useRef, useState } from 'react';
import './Loginpage.css';
import logo from '../../../Images/Logo.png'
import bgimg from '../../../Images/bgimg.jpg';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

function Loginpage() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const aboutSectionRef = useRef(null);
  const getInTouchSectionRef = useRef(null);
  const [showLoginSignup, setShowLoginSignup] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    user &&
      axios
        .post('http://localhost:5000//api/users', {
          username: user.nickname,
          email: user.email,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
  }, [isAuthenticated]);

  const handleAboutClick = () => {
    aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    getInTouchSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    setShowLoginSignup(true);
  };

  const handleLogin = () => {
    setShowLoginForm(true);
  };

  return (
    <div className="wrapper">
      <main>
        <div className="logincard">
           <div className="login-card">
              <div className="logo">
              <img src={logo} alt="FastMove Logo" height="30" />
              </div>
              <h2 style={{ color: '#004226' }}>Login</h2>
                <div className="input-group">
                  <label htmlFor="userID">User ID:</label>
                  <input type="text" id="userID" name="userID"/>
                </div>
                <div className="input-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" />
                </div>
                
                <div className="forgotpw">
                  <a href="/forgot-password">Forgot Password?</a>
                </div>

                  <button className='login'>Login</button>
            </div>
        </div>      
        <div className="bgimg">
          <img src={bgimg} alt="bgimg" style={{ width: '600px', height: '600px' }} />
        </div>
      </main>
    </div>
  );
}

export default Loginpage;
