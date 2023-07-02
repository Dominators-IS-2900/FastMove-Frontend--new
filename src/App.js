import { Route, Routes, Outlet} from "react-router-dom"

import ViewBusPage from "./pages/busOwner/ViewBusPage";
import OwnerHelpPage from "./pages/busOwner/OwnerHelpPage";
import BusRegisterPage from "./pages/busOwner/BusRegisterPage";
import OwnerProfilePage from "./pages/busOwner/OwnerProfilePage";
import Busfarepage from "./pages/admin/Busfarepage";
import OwnerVarificationPage from "./pages/admin/OwnerVarificationPage";
import ProfilePage from "./pages/admin/ProfilePage";
import SigninCharPage from "./pages/common/SigninCharPage/components/SigninCharPage";
import { useAuth0 } from "@auth0/auth0-react";
import ConductorDashboardPage from "./pages/conductor/ConductorDashboardPage";
import ConductorProfilePage from "./pages/conductor/ConductorProfilePage";
import ConductorSchedulePage from "./pages/conductor/ConductorSchedulePage/components/MySchedule";
import ConductorEmergencyPage from "./pages/conductor/ConductorEmergencyPage";
import ScanPage from "./pages/conductor/ScanPage";
import OwnerDashboardPage from "./pages/busOwner/OwnerDashboardpage";
import SideBar from "./components/timeKeeper/sidebar/SideBar";
import ArrivalPage from "./pages/timeKeeper/arrivalPage/ArrivalPage";
import DeparturePage from "./pages/timeKeeper/departurePage/DeparturePage";
import DeposPage from "./pages/timeKeeper/deposPage/DeposPage";
import TimeTable from "./pages/timeKeeper/busRoute/BusRoute";
import LoginPage from "./pages/timeKeeper/auth/login";
import MainPage from "./pages/timeKeeper/mainpage/MainPage";
<<<<<<< HEAD
import InvestigationPage from "./pages/admin/InvestigationPage";
import InfoPage from "./pages/admin/InfoPage";
import PverifiedPage from "./pages/admin/PverifiedPage";
import DecOwnerPage from "./pages/admin/DecOwnerPage";
import IssuesOwnerPage from "./pages/admin/IssuesOwnerPage";
<<<<<<< HEAD
import IssuesPPage from "./pages/admin/IssuesPPage";
=======
<<<<<<< HEAD
import ConductorUpdate from "./components/conductor/ConductorUpdateProfileCard/ConductorUpdate";
import QrCodeGenarate from "./pages/conductor/QrGeneratePage/TicketGenerationPage"
=======
import Homepage from "./pages/common/Homepage/components/Home";
import BusownerRegistration from "./components/busOwner/BusownerRegistration/BusownerRegistration";
import PassengerRegistration from "./components/common/PassengerRegistration/PassengerReg";
import OTPpage from "./components/common/OTPpage/OTPpage"
import UserRegistration from "./components/common/UserRegistration/UserRegistration";
import OTPVerification from "./components/common/OTPpage/OTPpage";
import Loginpage from "./pages/common/Loginpage/Loginpage";
import BankDetails from "./components/common/BankDetails/BankDetails";
import GetStarted from "./pages/common/Homepage";
>>>>>>> a1349782079c7ed00fbb5d22a3450fa5f3cfd1d6


>>>>>>> main
=======
import IssuesPPage from "./pages/admin/IssuesPPage"; 
import PassengerInquiryPage from "./pages/admin/PassengerInquiryPage";
import UpdatedCPage from "./pages/admin/UpdatedCPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import EditBusfare from "./pages/admin/Busfarepage/EditBusfare";
import PassengerVPage from "./pages/admin/PassengerVPage";

>>>>>>> e8ad81e113afc25ef3963efaca02088bc41a1d28
const SidebarLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);
function App() { 
  //use auth0 for authentication of users
  const{loginWithRedirect,
        logout,
        user,
        isAuthenticated}
        =useAuth0();
  return (
    <div className="App">
      <div id= "wrapper">
      <Routes>
      <Route path="/" element={<ConductorDashboardPage/>} />
        {/* Admin routes         */}
<<<<<<< HEAD
*

        <Route path="/" element={<BusRegisterPage/>}/>  

        <Route path="/SignInchar" element={<SigninCharPage/>} />        
=======
        <Route path="/" element={<AdminDashboardPage/>}/>
        <Route path="/SignInchar" element={<SigninCharPage/>} />   
        <Route path="/AdminDashboardPage" element={<AdminDashboardPage/>} />        
>>>>>>> e8ad81e113afc25ef3963efaca02088bc41a1d28
        <Route path="/Busfarepage" element={<Busfarepage />} />       
        <Route path="/Ownervarification" element={<OwnerVarificationPage />} />
        <Route path="/ProfilePage" element={<ProfilePage/>} /> 
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/InvestigationPage" element={<InvestigationPage/>} />
        <Route path="/InfoPage" element={<InfoPage />} />
        <Route path="/PverifiedPage" element={<PverifiedPage/>} />
        <Route path="/DecOwnerPage" element={<DecOwnerPage/>} />
        <Route path="/IssuesOwnerPage" element={<IssuesOwnerPage/>}/> 
        <Route path="/PassengerInquiryPage" element={<PassengerInquiryPage/>}/>
        <Route path="/IssuesPPage" element={<IssuesPPage/>}/>
        <Route path="/UpdatedCPage" element={<UpdatedCPage/>}/>
        <Route path="/PassengerVPage" element={<PassengerVPage/>}/>
        <Route path="/EditBusfare/:id/:Bus_type" element={<EditBusfare/>}/>

       
        {/* Bus owner routes */}
        <Route path="/ownerDashboardpage" element={<OwnerDashboardPage/>} />
        <Route path="/DetailsownerPage" element={<detailsOwner/>} />
        <Route path="/BusReg" element={<BusRegisterPage/>} />
        <Route path="/ViewBuses" element={<ViewBusPage/>} />
        <Route path="/OwnerProfile" element={<OwnerProfilePage/>} />
        <Route path="/HelpPage" element={<OwnerHelpPage/>} />
        <Route path="/Login" element={<Loginpage/>}/>

       
         {/*add conductor routes*/}
        <Route path="/ConductorDashboardPage" element={<ConductorDashboardPage/>} />
        <Route path="/Scan" element={<ScanPage/>} />
        <Route path="/ConductorProfile" element={<ConductorProfilePage/>} />
        <Route path="/MySchedule" element={<ConductorSchedulePage/>} />
        <Route path="/Emergency" element={<ConductorEmergencyPage/>} />
        <Route path="/ConductorUpdate" element={<ConductorUpdate/>} />
        <Route path="/QrGenaratePage" element={<QrCodeGenarate/>} />
       

          {/*add Timekeeper routes*/}
           <Route element={<SidebarLayout />}>
            <Route path="/main" element={<MainPage />} />
            <Route path="/arrival" element={<ArrivalPage />} />
            <Route path="/departure" element={<DeparturePage />} />
            <Route path="/timetable" element={<TimeTable/>} />
            <Route path="/depo" element={<DeposPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        

      </Routes>     
         
      </div>
    </div>
    
  );
}

export default App;
