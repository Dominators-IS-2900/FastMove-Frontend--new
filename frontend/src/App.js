import React from 'react'
import Register from './components/Register/Register';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Profile from './pages/Profile/Profile';
import Booking from './pages/Booking/Booking';
import BusList from './pages/BusList/BusList';
import Payment from './pages/Payment/Payment';
import Report from './pages/Report/Report';
import Help from './pages/Help/Help';
import Offer from './pages/Offer/Offer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleBus from './pages/SingleBusView/SingleBus';
import BookedSeat from './pages/BookedSeat/BookedSeat';
import PaymentSuccess from './pages/PaymentSuccess/PaymentSuccess';
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Navbar} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/booking" exact component={Booking} />
          <Route path="/report" exact component={Report} />
          <Route path="/offer" exact component={Offer} />
          <Route path="/help" exact component={Help} />
          <Route path="/bus-list" exact component={BusList} />
          <Route path="/single-bus" exact component={SingleBus} />
          <Route path="/view-seat" exact component={BookedSeat} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/paymentsuccess" exact component={PaymentSuccess} />

          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App