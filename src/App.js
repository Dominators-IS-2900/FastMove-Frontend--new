import MainPage from "./pages/mainpage/MainPage";


import { Route, Routes } from "react-router-dom"
import HelpPage from "./pages/HelpPage";

import Homepage from "./pages/Homepage/Homepage";
import DashBoard from "./pages/dashboard/DashBoard";
import DashBoardPage from "./pages/dashboard";
import BusRegPage from "./pages/busReg";
import Footer from "./components/footer/Footer";
import ADashBoard from "./pages/Adashboard/ADashBoard";
import ADashBoardPage from "./pages/Adashboard";
import Busfarepage from "./pages/Busfarepage/Busfarepage";
import Busfarepagein from "./pages/Busfarepage";
import Ownervarification from "./pages/Ownervarification/Ownervarification";
import Ownervarify from "./pages/Ownervarification";
import PassengerVerification from "./pages/PassengerVerification/PassengerVerification";
import PassengerVerify from "./pages/PassengerVerification";
import Activity from "./pages/Activity/Activity";
import ActivityShe from "./pages/Activity";
import ProfilePage from "./pages/ProfilePage";
import ProfilePP from "./pages/ProfilePage";
import Ownerinquirypage from "./pages/Ownerinquirypage";
import Ownerinquiryy from "./pages/Ownerinquirypage";
import Pinquirypage from "./pages/Pinquirypage";
import inqiryyypage from "./pages/Pinquirypage";
import Adminlogin from "./pages/Adminlogin/Adminlogin";
import loginn from "./pages/Adminlogin";
function App() {
  return (
    <div className="App">
      <div >
      <Routes>
      
        <Route path="/" element={<ADashBoardPage/>} />
        <Route path="/Busfarepage" element={<Busfarepagein />} />
        <Route path="/Ownervarification" element={<Ownervarify />} />
        <Route path="/PassengerVerification" element={<PassengerVerify />} />
        <Route path="/ProfilePage" element={< ProfilePP />} />
        <Route path="/Activity" element={< ActivityShe />} />
        <Route path="/Ownerinquirypage" element={< Ownerinquiryy />} />
        <Route path="/Adminlogin" element={<Adminlogin/>} />
       
       
 
        

      </Routes>
        
         
      </div>
    </div>
    
  );
}

export default App;
