<<<<<<< HEAD
import React from 'react'
import './Home.css'
import logo from "../../../../Images/Logo.png"
=======
// import React, { useRef, useState } from 'react';
// import './Home.css';
// import logo from '../../../../Images/Logo.png';
// import bgimg from '../../../../Images/bgimg.jpg'
// import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react';
// import { useEffect } from 'react';
// import '../index.css';
// import {Link} from 'react-router-dom'

// function Home() {
//   const { loginWithRedirect, isAuthenticated, user } = useAuth0();
//   const aboutSectionRef = useRef(null);
//   const getInTouchSectionRef = useRef(null);
//   const [showLoginSignup, setShowLoginSignup] = useState(false);
//   const [showLoginForm, setShowLoginForm] = useState(false);

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

//   const handleLogin = () => {
//     setShowLoginForm(true);
//   };

//   return (
//     <div className="wrapper">
//       <header className="fixed-header">
//         <div className='homelogo'><img src={logo} alt="FastMove Logo" height="30" /></div>
//         <nav>
//           <ul>
//             <li onClick={handleHomeClick}>Home</li>
//             <li onClick={handleAboutClick}>About</li>
//             <li onClick={handleContactClick}>Contact us</li>
//             <Link to="/Login"> 
            
//             <button className='loginbtn'>Log in</button>
//             </Link>
//           </ul>
//         </nav>
//       </header>
//       <main>
//         <img src={logo} alt="FastMove Logo" height="30" className='homeimg'/>
//         <div className='content'>
//         <h1 style={{ textShadow: 'none', fontWeight: 'lighter' }}>Reserve your Bus Seat at </h1>
//         <h1 style={{ textShadow: 'none', fontWeight: 'bold', color: '#004226' }}>Distance of Fingertip</h1>
//         <p style={{ textShadow: 'none',  fontStyle: 'italic' }}> Book Fast - Travel Safe</p>
//         <button className='startbtn'>Get Started</button>
//         </div>
//         <div className='bgimge'>
//           <img src={bgimg} alt="bgimge" style={{ width: '600px', height: '600px' }} />
//         </div>
//         <br/> <br/> <br/> <br/> <br/> <br/> <br/>
//       <div className='about'>
//         <div className='squres'>
//           <div className='squrehead1'><h3>Within fingertip reach</h3></div>
//           <br/>
//           <div className='squrebody1'><p>Discover the ultimate convenience of FastMove. With just a few simple taps
//                 and minimal steps, you can reserve their bus seats effortlessly, revolutionizing their travel
//                 experience. It's fingertip access at its finest!</p></div>
//         </div>
//         <div className='squres'>
//           <div className='squrehead2'><h3>24 / 7 Service</h3></div>
//           <br/>
          // <div className='squrebody2'><p>Introducing our groundbreaking FastMove system, available round the clock.
          //       You can effortlessly reserve bus seats anytime, ensuring a seamless and convenient journey.
          //       Experience 24/7 convenience at your fingertips.</p></div>
        // </div>
//         <div className='squres'>
//           <div className='squrehead3'><h3>Secure seat booking transactions</h3></div>
//           <br/>
//           <div className='squrebody3'><p>Secure smart bus pass system ensures protected transactions for seat bookings.
//                 Advanced safeguards provide peace of mind.
//                 Experience convenient and safe bus seat reservations.</p></div>
//         </div>
//       </div>
      
//       </main>
//     </div>
//   );
// }

// export default Home;



import React, { useRef, useState } from 'react';
import './Home.css';
import logo from '../../../../Images/Logo.png';
>>>>>>> a1349782079c7ed00fbb5d22a3450fa5f3cfd1d6
import axios from 'axios';
// import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react';
<<<<<<< HEAD
import '../index.css'
=======
import '../index.css';
import { Link } from 'react-router-dom';
>>>>>>> a1349782079c7ed00fbb5d22a3450fa5f3cfd1d6

//use auth0 for authentication 
function Home() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  //check user email and redirect to the system
  useEffect(() => {
    user &&
      axios
        .post("http://localhost:5000//api/users", {
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

  // const handleLogin=()=>{
  //   loginWithRedirect({
  //     redirect_uri:'https://localhost:3000/BusReg',
  //   });
  // };

<<<<<<< HEAD
  return (
    <div>
      <header> 
        <img src={logo} alt="FastMove Logo" height="30" />
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
=======
  return(
    <div className="wrapper">
      <header className="fixed-header">
        <div className="homelogo">
          <img src={logo} alt="FastMove Logo" height="30" />
        </div>
        <nav>
          <ul>
            <li onClick={handleHomeClick}>Home</li>
            <li onClick={handleAboutClick}>About</li>
            <li onClick={handleContactClick}>Contact us</li>
            <Link to="/Login">
              <button className="loginbtn">Log in</button>
            </Link>
>>>>>>> a1349782079c7ed00fbb5d22a3450fa5f3cfd1d6
          </ul>
        </nav>
      </header>

      <main>
<<<<<<< HEAD
        <img src={logo} alt='logo' className="Home--logo"/>
        <h1>Book smart-Travel safe</h1>
        <p> Smart Bus Pass booking application to book your ticket smart and conveniently</p>
        {/* login if only authenticated */}
        <button  onClick={loginWithRedirect}>Get Started</button> 
      </main>
      <footer>
        &copy; 2023 FastMove | All rights reserved
      </footer>
=======
        <div className='toppart'>
          <img src={logo} alt="FastMove Logo" height="30" className="homeimg" />
              <div className="content">
                <h1 style={{ textShadow: 'none', fontWeight: 'lighter' }}>Reserve your Bus Seat at </h1>
                <h1 style={{ textShadow: 'none', fontWeight: 'bold', color: '#004226' }}>Distance of Fingertip</h1>
                <p style={{ textShadow: 'none', fontStyle: 'italic' }}> Book Fast - Travel Safe</p>
                <button className="startbtn"
                  style={{ marginLeft: '270px', marginTop:'0px' }}> Get Started</button>
              </div>
        </div>
        <div className='abouttopic'>
            <h1 style={{ textShadow: 'none',fontStyle: 'italic' , color: '#004226', marginTop:'150px'}}>Why should you choose </h1>
            <div className='abouttopic'>
    <h1 style={{ textShadow: 'none', color: '#004226', marginLeft: '680px', marginTop: '-55px' }}>
        <strong>FastMove?</strong>
    </h1>
</div>

        </div>

        <div className="widgets">
          <div className="widget widget-left">
            <div className="widget-content">
              <h3>Within fingertip reach</h3>
                <p>Discover the ultimate convenience of FastMove. With just a few simple taps
                  and minimal steps, you can reserve their bus seats effortlessly, revolutionizing their travel
                  experience. It's fingertip access at its finest!</p>
            </div>
          </div>
          <div className="widget widget-middle">
            <div className="widget-content">
              <h3>24 / 7 Service</h3>
              <p>Experience the FastMove system, providing seamless bus seat reservations 24/7.
                 Effortlessly book anytime for a hassle-free journey. Enjoy convenient convenience at your fingertips.</p>
            </div>
          </div>
          <div className="widget widget-right">
            <div className="widget-content">
              <h3>Secure seat booking transactions</h3>
              <p>Secure smart bus pass system ensures protected transactions for seat bookings.
                Advanced safeguards provide peace of mind.
                Experience convenient and safe bus seat reservations.</p>
            </div>
          </div>
        </div>    


      </main>
      {/* <footer className="fixed-header" style={{marginTop:"600px"}}>
        <div className="homelogo">
          <img src={logo} alt="FastMove Logo" height="30" />
        </div>
        <nav>
          <ul>
            <li onClick={handleHomeClick}>Home</li>
            <li onClick={handleAboutClick}>About</li>
            <li onClick={handleContactClick}>Contact us</li>
            <Link to="/Login">
              <button className="loginbtn">Log in</button>
            </Link>
          </ul>
        </nav>
      </footer> */}
>>>>>>> a1349782079c7ed00fbb5d22a3450fa5f3cfd1d6
    </div>
  );
}

export default Home


































// import React from 'react'
// import './Homepage.css'
// import logo from "../../Logo.png"
// import axios from 'axios';
// import { Link } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'
// import { useEffect } from 'react';
// import './index.css';
// import BusRegPage from '../busReg';
// import GetStarted from '.';

// function HomePage() {

 
//   // const { loginWithRedirect, isAuthenticated, user } = useAuth0();

//   const{loginWithRedirect,
//     logout,
//     user,
//     isAuthenticated}
//         =useAuth0();

//   // useEffect(() => {
//   //   user &&
//   //     axios
//   //       .post("http://localhost:8000//api/users", {
//   //         username: user.nickname,
//   //         email: user.email,
//   //       })
//   //       .then((res) => {
//   //         console.log(res);
//   //       })
//   //       .catch((e) => {
//   //         console.log(e);
//   //       });
//   // }, [isAuthenticated]);

//   // const handleLogin=()=>{
//   //   loginWithRedirect({
//   //     redirect_uri:'https://localhost:3000/BusReg',
//   //   });
//   // };

//   return (
//     <div>
//       <header> 
//         <img src={logo} alt="FastMove Logo" height="30" />
//           <nav>
//             <ul>
//               <li>Home</li>
//               <li>About</li>
//               <li>Contact</li>
//             </ul>
//           </nav>
//       </header>
//       <main>
//         <img src={logo} className="Home--logo"/>
//         <h1>Book smart-Travel safe</h1>
//         <p> Smart Bus Pass booking application to book your ticket smart and conveniently</p>
//         <button  onClick={loginWithRedirect}>Get Started</button>
//         {/* {isAuthenticated? <BusRegPage/>:<GetStarted/>} */}
//       </main>
//       <footer>
//         &copy; 2023 FastMove | All rights reserved
//       </footer>
//     </div>
//   );
// }

// export default HomePage;



// import React from 'react'
// import './Homepage.css'
// import logo from "../../Logo.png"

// import { Link } from 'react-router-dom'
// import { useAuth0 } from '@auth0/auth0-react'
// import './index.css';

// function HomePage() {

  // const{loginWithRedirect}=useAuth0();

  // const handleLogin=()=>{
  //   loginWithRedirect({
  //     redirect_uri:'https://localhost:3000/BusReg',
  //   });
  // };




  // const{loginWithRedirect,
  //   logout,
  //   user,
  //   isAuthenticated}
  //       =useAuth0();

  // return (
  //   <div>
  //     <header> 
  //       <img src={logo} alt="FastMove Logo" height="30" />
  //       <nav>
  //         <ul>
  //           <li>Home</li>
  //           <li>About</li>
  //           <li>Contact</li>
  //         </ul>
  //       </nav>
  //     </header>
  //     <main>
  //       <img src={logo} className="Home--logo"/>
  //       <h1>Book smart-Travel safe</h1>
  //       <p> Smart Bus Pass booking application to book your ticket smart and conveniently</p>
  //       {/* <button  onClick={loginWithRedirect}>Get Started</button> */}
  //       <button  onClick={loginWithRedirect}>Get Started</button>
  //     </main>
  //     <footer>
  //       &copy; 2023 FastMove | All rights reserved
  //     </footer>
  //   </div>
  // );

// }

// export default HomePage;


