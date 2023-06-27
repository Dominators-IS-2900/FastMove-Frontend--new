import { Route, Routes, Outlet} from "react-router-dom"

import ViewBusPage from "./pages/busOwner/ViewBusPage";
import OwnerHelpPage from "./pages/busOwner/OwnerHelpPage";
import BusRegisterPage from "./pages/busOwner/BusRegisterPage";
import OwnerProfilePage from "./pages/busOwner/OwnerProfilePage";
import Busfarepage from "./pages/admin/Busfarepage";
import OwnerVarificationPage from "./pages/admin/OwnerVarificationPage";
import PassengerVerificationPage from "./pages/admin/PassengerVerificationPage";
import ProfilePage from "./pages/admin/ProfilePage";
import SigninCharPage from "./pages/common/SigninCharPage/components/SigninCharPage";
import Homepage from "./pages/common/Homepage/components/Home";
import { useAuth0 } from "@auth0/auth0-react";
import ConductorProfilePage from "./pages/conductor/ConductorProfilePage";
import ConductorSchedulePage from "./pages/conductor/ConductorSchedulePage";
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
import InvestigationPage from "./pages/admin/InvestigationPage";
import InfoPage from "./pages/admin/InfoPage";
import PverifiedPage from "./pages/admin/PverifiedPage";
import DecOwnerPage from "./pages/admin/DecOwnerPage";
import IssuesOwnerPage from "./pages/admin/IssuesOwnerPage";
import IssuesPPage from "./pages/admin/IssuesPPage"; 
import PassengerInquiryPage from "./pages/admin/PassengerInquiryPage";
import UpdatedCPage from "./pages/admin/UpdatedCPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import EditBusfare from "./pages/admin/Busfarepage/EditBusfare"

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
        {/* Admin routes         */}
        <Route path="/" element={<AdminDashboardPage/>}/>
        <Route path="/SignInchar" element={<SigninCharPage/>} />   
        <Route path="/AdminDashboardPage" element={<AdminDashboardPage/>} />        
        <Route path="/Busfarepage" element={<Busfarepage />} />       
        <Route path="/Ownervarification" element={<OwnerVarificationPage />} />
        <Route path="/PassengerVerification" element={<PassengerVerificationPage/>} />
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
        <Route path="/EditBusfare/:id/:Bus_type" element={<EditBusfare/>}/>
       
        {/* Bus owner routes */}
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
