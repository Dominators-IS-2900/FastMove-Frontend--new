// import React, { useRef } from 'react';
// import './Home.css';
// import logo from '../../../../Images/Logo.png';
// import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react';
// import { useEffect } from 'react';
// import '../index.css';

// function Home() {
//   const { loginWithRedirect, isAuthenticated, user } = useAuth0();
//   const aboutSectionRef = useRef(null);
//   const getInTouchSectionRef = useRef(null);

//   useEffect(() => {
//     user &&
//       axios
//         .post('http://localhost:5000//api/users', {
//           username: user.nickname,
//           email: user.email,
//         })
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//   }, [isAuthenticated]);

//   const handleAboutClick = () => {
//     aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleHomeClick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleContactClick = () => {
//     getInTouchSectionRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="wrapper">
//       <header className="fixed-header">
//         <img src={logo} alt="FastMove Logo" height="30" />
//         <nav>
//           <ul>
//             <li onClick={handleHomeClick}>Home</li> {/* Call handleHomeClick when the Home button is clicked */}
//             <li onClick={handleAboutClick}>About</li>
//             <li onClick={handleContactClick}>Contact us</li> {/* Call handleContactClick when the Contact us button is clicked */}
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <img src={logo} alt="logo" className="Home--logo" />
//         <h1>Book smart-Travel safe</h1>
//         <p>Smart Bus Pass booking application to book your ticket smart and conveniently</p>
//         <button onClick={loginWithRedirect}>Get Started</button>

        // <div className="about-section" ref={aboutSectionRef}>
        //   <div className="widget">
        //   <div className='wid-topic'>
        //       <h2>Within fingertip reach</h2>
        //     </div>           
        //     <div className='wid-body'>
        //       <p>
        //         Discover the ultimate convenience of FastMove. With just a few simple taps
        //         and minimal steps, you can reserve their bus seats effortlessly, revolutionizing their travel
        //         experience. It's fingertip access at its finest!
        //       </p>
        //     </div>
        //   </div>
        //   <div className="widget">
        //     <div className='wid-topic'>
        //       <h2>24 / 7 Service</h2>
        //     </div>
        //     <div className='wid-body'>
        //       <p>Introducing our groundbreaking FastMove system, available round the clock.
        //         You can effortlessly reserve bus seats anytime, ensuring a seamless and convenient journey.
        //         Experience 24/7 convenience at your fingertips.</p>
        //     </div>
        //   </div>
        //   <div className="widget">
        //     <div className='wid-topic'>
        //       <h2>Secure seat booking transactions</h2>
        //     </div>
        //     <div className='wid-body'>
        //       <p>Secure smart bus pass system ensures protected transactions for seat bookings.
        //         Advanced safeguards provide peace of mind.
        //         Experience convenient and safe bus seat reservations.</p>
        //     </div>
        //   </div>
        // </div>

//         <div className="get-in-touch-section">
//   <h2>Get in Touch</h2>
//   <p>If you have any questions or need assistance, feel free to reach out to us.</p>
//   <div className="contact-info">
//     <p>Email: info@fastmove.com</p>
//     <p>Phone:  +94 11 269 1136</p>
//     <p>No:45,Main Street, Bambalapitiya</p>
//   </div>
//   <footer>
//         &copy; 2023 FastMove | All rights reserved
//       </footer>
// </div>
//       </main>
//     </div>
//   );
// }

// export default Home;

// import React, { useRef, useState } from 'react';
// import './Home.css';
// import logo from '../../../../Images/Logo.png';
// import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react';
// import { useEffect } from 'react';
// import '../index.css';

// function Home() {
//   const { loginWithRedirect, isAuthenticated, user } = useAuth0();
//   const aboutSectionRef = useRef(null);
//   const getInTouchSectionRef = useRef(null);
//   const [showLoginSignup, setShowLoginSignup] = useState(false);

//   useEffect(() => {
//     user &&
//       axios
//         .post('http://localhost:5000//api/users', {
//           username: user.nickname,
//           email: user.email,
//         })
//         .then((res) => {
//           console.log(res);
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//   }, [isAuthenticated]);

//   const handleAboutClick = () => {
//     aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleHomeClick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleContactClick = () => {
//     getInTouchSectionRef.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleGetStarted = () => {
//     setShowLoginSignup(true);
//   };

//   return (
//     <div className="wrapper">
//       <header className="fixed-header">
//         <img src={logo} alt="FastMove Logo" height="30" />
//         <nav>
//           <ul>
//             <li onClick={handleHomeClick}>Home</li> {/* Call handleHomeClick when the Home button is clicked */}
//             <li onClick={handleAboutClick}>About</li>
//             <li onClick={handleContactClick}>Contact us</li> {/* Call handleContactClick when the Contact us button is clicked */}
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <img src={logo} alt="logo" className="Home--logo" />
//         <h1>Book smart-Travel safe</h1>
//         <p>Smart Bus Pass booking application to book your ticket smart and conveniently</p>
//         {showLoginSignup ? (
//           <div className="login-signup-container">
//             <button className="login-button">Login</button>
//             <span className="button-spacing"></span>
//             <button className="signup-button">Sign Up</button>
//           </div>
//         ) : (
//           <button onClick={handleGetStarted}>Get Started</button>
//         )}

// <div className="about-section" ref={aboutSectionRef}>
//           <div className="widget">
//           <div className='wid-topic'>
//               <h2>Within fingertip reach</h2>
//             </div>           
//             <div className='wid-body'>
//               <p>
//                 Discover the ultimate convenience of FastMove. With just a few simple taps
//                 and minimal steps, you can reserve their bus seats effortlessly, revolutionizing their travel
//                 experience. It's fingertip access at its finest!
//               </p>
//             </div>
//           </div>
//           <div className="widget">
//             <div className='wid-topic'>
//               <h2>24 / 7 Service</h2>
//             </div>
//             <div className='wid-body'>
//               <p>Introducing our groundbreaking FastMove system, available round the clock.
//                 You can effortlessly reserve bus seats anytime, ensuring a seamless and convenient journey.
//                 Experience 24/7 convenience at your fingertips.</p>
//             </div>
//           </div>
//           <div className="widget">
//             <div className='wid-topic'>
//               <h2>Secure seat booking transactions</h2>
//             </div>
//             <div className='wid-body'>
//               <p>Secure smart bus pass system ensures protected transactions for seat bookings.
//                 Advanced safeguards provide peace of mind.
//                 Experience convenient and safe bus seat reservations.</p>
//             </div>
//           </div>
//         </div>

//         <div className="get-in-touch-section" ref={getInTouchSectionRef}>
//           <h2>Get in Touch</h2>
//           <p>If you have any questions or need assistance, feel free to reach out to us.</p>
//           <div className="contact-info">
//             <p>Email: info@fastmove.com</p>
//             <p>Phone:  +94 11 269 1136</p>
//             <p>No:45,Main Street, Bambalapitiya</p>
//           </div>
//           <footer>
//             &copy; 2023 FastMove | All rights reserved
//           </footer>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Home;

import React, { useRef, useState } from 'react';
import './Home.css';
import logo from '../../../../Images/Logo.png';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import '../index.css';

function Home() {
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
      <header className="fixed-header">
      <img src={logo} alt="FastMove Logo" height="30"/>
        <nav>
          <ul>
            <li onClick={handleHomeClick}>Home</li>
            <li onClick={handleAboutClick}>About</li>
            <li onClick={handleContactClick}>Contact us</li>
          </ul>
        </nav>
      </header>
      <main>
      <div className='mainhome'>
        <img src={logo} alt="logo" className="Home--logo" style={{ marginLeft: '600px' }} />
        <h1>Book smart-Travel safe</h1>
        <p>Smart Bus Pass booking application to book your ticket smart and conveniently</p>
        {showLoginSignup ? (
          showLoginForm ? (
            <div className="login-form">
              <input type="text" placeholder="Username" className="login-input" style={{ width:"500px", marginLeft:"520px",height:"50px"}} />
              <input type="password" placeholder="Password" className="login-input" style={{ width:"500px", marginLeft:"520px",height:"50px"}}/>
              <button className="login-button" style={{ marginLeft: '700px',height:"70px" }}>Login</button>
            </div>
          ) : (
            <div className="login-signup-container">
              <button className="login-button" onClick={handleLogin} style={{ marginLeft: '600px' }}>
                Login
              </button>
              <span className="button-spacing"></span>
              <button className="signup-button">Sign Up</button>
            </div>
          )
        ) : (
          <button onClick={handleGetStarted}style={{ marginLeft: '660px' }}>Get Started</button>
        )}
        <br/><br/>
        </div>

        <div className="about-section" ref={aboutSectionRef}>
          <div className="widget">
            <div className="wid-topic">
              <h2>Within fingertip reach</h2>
            </div>
            <div className="wid-body">
              <p>
                Discover the ultimate convenience of FastMove. With just a few simple taps and minimal steps, you can
                reserve their bus seats effortlessly, revolutionizing their travel experience. It's fingertip access at
                its finest!
              </p>
            </div>
          </div>
          <div className="widget">
            <div className="wid-topic">
              <h2>24 / 7 Service</h2>
            </div>
            <div className="wid-body">
              <p>
                Introducing our groundbreaking FastMove system, available round the clock. You can effortlessly reserve
                bus seats anytime, ensuring a seamless and convenient journey. Experience 24/7 convenience at your
                fingertips.
              </p>
            </div>
          </div>
          <div className="widget">
            <div className="wid-topic">
              <h2>Secure seat booking transactions</h2>
            </div>
            <div className="wid-body">
              <p>
                Secure smart bus pass system ensures protected transactions for seat bookings. Advanced safeguards
                provide peace of mind. Experience convenient and safe bus seat reservations.
              </p>
            </div>
          </div>
        </div>

        <div className="get-in-touch-section" ref={getInTouchSectionRef}>
          <h2>Get in Touch</h2>
          <p>If you have any questions or need assistance, feel free to reach out to us.</p>
          <div className="contact-info">
            <p>Email: info@fastmove.com</p>
            <p>Phone: +94 11 269 1136</p>
            <p>No:45,Main Street, Bambalapitiya</p>
          </div>
          <footer>&copy; 2023 FastMove | All rights reserved</footer>
        </div>
      </main>
    </div>
  );
}

export default Home;
