import MainPage from "./pages/mainpage/MainPage";
import BusReg from "./pages/busReg/BusReg";
import ViewBusPage from "./pages/ViewBusPage";
import { Route, Routes } from "react-router-dom"
import HelpPage from "./pages/HelpPage";
import BusRoute from "./pages/busReg/BusReg";
import GetStarted from "./pages/Homepage";
import DashBoard from "./pages/dashboard/DashBoard";
import DashBoardPage from "./pages/dashboard";
import BusRegPage from "./pages/busReg";
import OwnerProfile from "./pages/OwnerProfilePage";
import Footer from "./components/footer/Footer";
import ADashBoard from "./pages/Adashboard/ADashBoard";
import ADashBoardPage from "./pages/Adashboard";
import Busfarepage from "./pages/Busfarepage/Busfarepage";
import Busfarepagein from "./pages/Busfarepage";
import Servicespage from "./pages/Servicespage/Servicespage";
import Servicespageinn from "./pages/Servicespage";
import Ownervarification from "./pages/Ownervarification/Ownervarification";
import Ownervarify from "./pages/Ownervarification";
import PassengerVerification from "./pages/PassengerVerification/PassengerVerification";
import PassengerVerify from "./pages/PassengerVerification";
import Activity from "./pages/Activity/Activity";
import ActivityShe from "./pages/Activity";
import ProfilePage from "./pages/ProfilePage";
import ProfilePP from "./pages/ProfilePage";
import Signin from "./pages/SigninCharPage";
import Homepage from "./pages/Homepage/Homepage";
import SigninCharPage from "./pages/SigninCharPage/SigninCharPage";
import { useAuth0 } from "@auth0/auth0-react";
import DashBoardConductor from "./pages/dashboard conductor/DashBoardConductor";
import DashBoardPageConductor from "./pages/dashboard conductor";
import ProfilePageConductor from "./pages/Profile conductor";
import MySchedulePage from "./pages/My Schedule conductor/components/MySchedule"
import EmergencyPage from "./pages/Emergancy conductor";
import ScanPage from "./pages/scan conductor/Scan"

function App() {
  //use auth0 for authentication of users
  const{loginWithRedirect,
        logout,
        user,
        isAuthenticated}
        =useAuth0();
  return (
    <div className="App">
      <div >
      <Routes>
      
        <Route path="/" element={<PassengerVerify/>} />

        {/* authorize and redirect users to system */}
        <Route path="/" element={isAuthenticated?<Homepage/>:<BusRegPage/>} /> 

        <Route path="/SignInchar" element={<Signin/>} />
        
        <Route path="/Busfarepage" element={<Busfarepagein />} />
        <Route path="/Servicespage" element={<Servicespageinn />} />
        <Route path="/Ownervarification" element={<Ownervarify />} />
        <Route path="/PassengerVerification" element={<PassengerVerify />} />
        <Route path="/ProfilePage" element={< ProfilePP />} />
        <Route path="/Activity" element={< ActivityShe />} />

        <Route path="/BusReg" element={<BusRegPage/>} />
        <Route path="/ViewBuses" element={<ViewBusPage/>} />
        <Route path="/OwnerProfile" element={<OwnerProfile/>} />
        <Route path="/HelpPage" element={<HelpPage/>} />

        <Route path="/Scan" element={<ScanPage/>} />
        <Route path="/Profile" element={<ProfilePageConductor/>} />
        <Route path="/MySchedule" element={<MySchedulePage/>} />
        <Route path="/Emergency" element={<EmergencyPage/>} />
              
         {/*add conductor routes*/}

        <Route path="/Scan" element={<ScanPage/>} />
        <Route path="/Profile" element={<ProfilePageConductor/>} />
        <Route path="/MySchedule" element={<MySchedulePage/>} />
        <Route path="/Emergency" element={<EmergencyPage/>} />

        
      </Routes>     
         
      </div>
    </div>
    
  );
}

export default App;
