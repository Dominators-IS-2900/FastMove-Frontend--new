import MainPage from "./pages/mainpage/MainPage";
import SideBar from "./components/sidebar/SideBar";
import ArrivalPage from "./pages/arrivalPage/ArrivalPage";
import { Route, Routes, Outlet } from "react-router-dom";
import DeparturePage from "./pages/departurePage/DeparturePage";
import TimeTable from "./pages/busRoute/BusRoute";
import DeposPage from "./pages/deposPage/DeposPage";
import LoginPage from "./pages/auth/login";
import ProfilePage from "./pages/profile";

const SidebarLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Routes>
          <Route element={<SidebarLayout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/arrival" element={<ArrivalPage />} />
            <Route path="/departure" element={<DeparturePage />} />
            <Route path="/timetable" element={<TimeTable/>} />
            <Route path="/depo" element={<DeposPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
