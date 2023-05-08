import { Route, Routes } from "react-router-dom"

import ViewBusPage from "./pages/busOwner/ViewBusPage";
import OwnerHelpPage from "./pages/busOwner/OwnerHelpPage";
import BusRegisterPage from "./pages/busOwner/BusRegisterPage";
import OwnerProfilePage from "./pages/busOwner/OwnerProfilePage";
import Busfarepage from "./pages/admin/Busfarepage";
import OwnerVarificationPage from "./pages/admin/OwnerVarificationPage";
import PassengerVerificationPage from "./pages/admin/PassengerVerificationPage";
import ActivityPage from "./pages/admin/ActivityPage";
import ProfilePage from "./pages/admin/ProfilePage";
import SigninCharPage from "./pages/common/SigninCharPage/components/SigninCharPage";
import Homepage from "./pages/common/Homepage/components/Home";
import { useAuth0 } from "@auth0/auth0-react";
import ConductorProfilePage from "./pages/conductor/ConductorProfilePage";
import ConductorSchedulePage from "./pages/conductor/ConductorSchedulePage";
import ConductorEmergencyPage from "./pages/conductor/ConductorEmergencyPage";
import ScanPage from "./pages/conductor/ScanPage";
import OwnerDashboardPage from "./pages/busOwner/OwnerDashboardpage";

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
        <Route path="/" element={<Homepage/>}/>  
        <Route path="/SignInchar" element={<SigninCharPage/>} />        
        <Route path="/Busfarepage" element={<Busfarepage />} />       
        <Route path="/Ownervarification" element={<OwnerVarificationPage />} />
        <Route path="/PassengerVerification" element={<PassengerVerificationPage/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>} />
        <Route path="/Activity" element={<ActivityPage/>} />        
        <Route path="/ownerDashboardpage" element={<OwnerDashboardPage/>} />
        <Route path="/DetailsownerPage" element={<detailsOwner/>} />
        <Route path="/BusReg" element={<BusRegisterPage/>} />
        <Route path="/ViewBuses" element={<ViewBusPage/>} />
        <Route path="/OwnerProfile" element={<OwnerProfilePage/>} />
        <Route path="/HelpPage" element={<OwnerHelpPage/>} />
       
         {/*add conductor routes*/}

        <Route path="/Scan" element={<ScanPage/>} />
        <Route path="/Profile" element={<ConductorProfilePage/>} />
        <Route path="/MySchedule" element={<ConductorSchedulePage/>} />
        <Route path="/Emergency" element={<ConductorEmergencyPage/>} />
        
      </Routes>     
         
      </div>
    </div>
    
  );
}

export default App;
