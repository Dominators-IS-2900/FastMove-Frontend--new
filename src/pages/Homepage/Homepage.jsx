import React from 'react'
import './Homepage.css'
import logo from "../../Logo.png"
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react';
import './index.css';

//use auth0 for authentication 
function HomePage() {
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

  return (
    <div>
      <header> 
        <img src={logo} alt="FastMove Logo" height="30" />
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <img src={logo} className="Home--logo"/>
        <h1>Book smart-Travel safe</h1>
        <p> Smart Bus Pass booking application to book your ticket smart and conveniently</p>
        {/* login if only authenticated */}
        <button  onClick={loginWithRedirect}>Get Started</button> 
      </main>
      <footer>
        &copy; 2023 FastMove | All rights reserved
      </footer>
    </div>
  );
}

export default HomePage;


































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


