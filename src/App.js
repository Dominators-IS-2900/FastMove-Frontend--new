
import { Route, Routes, Navigate} from "react-router-dom"
import { AuthorizeUser } from "./middleware/auth";

import OTPVerification from "./components/common/OTPVerification/OTPVerification";
import LoginCard from "./components/common/Login/LoginCard";
import Username from "./components/common/ResetPassword/Username";
import Reset from "./components/common/ResetPassword/Reset";
import Profile from "./components/common/ViewProfile/Profile";
import GetStarted from "./pages/common/Homepage";
import Registration from "./components/common/Register";
import BusRegisterPage from "./pages/busOwner/BusRegisterPage";
import OwnerDashboardPage from "./pages/busOwner/OwnerDashboardpage";
import OwnerHelpPage from "./pages/busOwner/OwnerHelpPage";
import ViewBusPage from "./pages/busOwner/ViewBusPage";
import ConductorDashboardPage from "./pages/conductor/ConductorDashboardPage";
import ConductorEmergencyPage from "./pages/conductor/ConductorEmergencyPage";
import ConductorSchedulePage from "./pages/conductor/ConductorSchedulePage";
import QRGenerator from "./pages/conductor/QrGeneratePage";
import ScanPage from "./pages/conductor/ScanPage";
import BankDetailsPage from "./pages/busOwner/BankDetailsPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import Busfarepage from "./pages/admin/Busfarepage";
import DecOwnerPage from "./pages/admin/DecOwnerPage";
import InfoPage from "./pages/admin/InfoPage";
import InvestigationPage from "./pages/admin/InvestigationPage";
import IssuesOwnerPage from "./pages/admin/IssuesOwnerPage";
import IssuesPPage from "./pages/admin/IssuesPPage";
import OwnerVarificationPage from "./pages/admin/OwnerVarificationPage";
import PassengerInquiryPage from "./pages/admin/PassengerInquiryPage";
import PassengerVPage from "./pages/admin/PassengerVPage";
import FirstPage from "./pages/admin/PverifiedPage";
import UpdatedCPage from "./pages/admin/UpdatedCPage";
import ProfilePage from "./pages/admin/ProfilePage";
import WelcomePage from "./pages/common/Welcome/WelcomePage";
import PassengerDashboardPage from "./pages/passenger/PassengerDashboard";
import EditBusfare from "./pages/admin/Busfarepage/EditBusfare";
import ConductorEmergencyHandle from "./components/timeKeeper/ConductorEmergencyHandle";


function App() { 

  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;
  
  
  return (
    <div className="App">
      <div id= "wrapper">
      <Routes>
       
        <Route path="/" element={<GetStarted/>}/>  
        <Route path="/login" element={<LoginCard/>} />  
        <Route path="/register" element={<Registration/>}/> 
        <Route path="/username" element={<Username/>}/>  
        <Route path="/otpVerification" element={<OTPVerification/>} />
        <Route path="/reset" element={<Reset/>} />
       


        {isAuthenticated ? (
            <>
              <Route path="/profileView" element={<Profile/>} />
              <Route path="/ownerdashboard" element={<OwnerDashboardPage/>} />
              <Route path="/busregister" element={<BusRegisterPage />} />
              <Route path="/ownerhelp" element={<OwnerHelpPage />} />
              <Route path="/viewbus" element={<ViewBusPage />} />
              <Route path="/bankdetails" element={<BankDetailsPage />} />

              <Route path="/conductordashboard" element={<ConductorDashboardPage />} />
              <Route path="/conductoremergrncy" element={<ConductorEmergencyPage />} />
              <Route path="/conductorschedule" element={<ConductorSchedulePage />} />
              <Route path="/ticket" element={<QRGenerator />} />
              <Route path="/scan" element={<ScanPage />} />

              <Route path="/admindashboard" element={<AdminDashboardPage />} />
              <Route path="/busfare" element={<Busfarepage/>} />
              <Route path="/decowner" element={<DecOwnerPage/>} />
              <Route path="/regbusinfo" element={<InfoPage/>} />
              <Route path="/ownerinquiry" element={<InvestigationPage/>} />
              <Route path="/ownerissues" element={<IssuesOwnerPage/>} />
              <Route path="/issues" element={<IssuesPPage/>} />
              <Route path="/ownerverification" element={<OwnerVarificationPage/>} />
              <Route path="/passengerinquiry" element={<PassengerInquiryPage/>} />
              <Route path="/passengerverification" element={<PassengerVPage/>} />
              <Route path="/passengerdetails" element={<FirstPage/>} />
              <Route path="/updateconductor" element={<UpdatedCPage/>} />
              <Route path="/conductorverification" element={<ProfilePage/>} />
              <Route path="/welcome" element={<WelcomePage/>}/>              
              <Route path="/EditBusfare/:id/:Bus_type" element={<EditBusfare/>} />
             
              <Route path="/passengerdashboard" element={<PassengerDashboardPage/>} />

              <Route path="/conductorEmergencyhandle" element={<ConductorEmergencyHandle/>} />


             
            </>
        ):(
          <>
          <Route path="/profileView" element={<LoginCard/>} />
              <Route path="/ownerdashboard" element={<LoginCard/>} />
              <Route path="/busregister" element={<LoginCard />} />
              <Route path="/ownerhelp" element={<LoginCard />} />
              <Route path="/viewbus" element={<LoginCard />} />
              <Route path="/bankdetails" element={<LoginCard />} />

              <Route path="/conductordashboard" element={<LoginCard />} />
              <Route path="/conductoremergrncy" element={<LoginCard />} />
              <Route path="/conductorschedule" element={<LoginCard />} />
              <Route path="/ticket" element={<LoginCard />} />
              <Route path="/scan" element={<LoginCard />} />

              <Route path="/admindashboard" element={<LoginCard />} />
              <Route path="/busfare" element={<LoginCard/>} />
              <Route path="/decowner" element={<LoginCard/>} />
              <Route path="/regbusinfo" element={<LoginCard/>} />
              <Route path="/ownerinquiry" element={<LoginCard/>} />
              <Route path="/ownerissues" element={<LoginCard/>} />
              <Route path="/issues" element={<LoginCard/>} />
              <Route path="/ownerverification" element={<LoginCard/>} />
              <Route path="/passengerinquiry" element={<LoginCard/>} />
              <Route path="/passengerverification" element={<LoginCard/>} />
              <Route path="/passengerdetails" element={<LoginCard/>} />
              <Route path="/updateconductor" element={<LoginCard/>} />
              <Route path="/conductorverification" element={<LoginCard/>} />
              <Route path="/welcome" element={<LoginCard/>}/>

              <Route path="/passengerdashboard" element={<LoginCard/>} />
          </>
        ) }      

        
      </Routes>     
             
      </div>
    </div>
    
  );
}

export default App;
