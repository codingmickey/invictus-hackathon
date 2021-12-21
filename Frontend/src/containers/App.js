import { ThemeProvider } from '@mui/system';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import React from 'react';
import './App.css';
import Home from '../components/Home-page/Home';
import customTheme from './theme';
import Register from '../components/Register';
import NotFound from '../components/NotFound';
import Dashboard from '../components/Dashboard/Dashboard';
import Login from '../components/Login';
import CreateReq from '../components/Dashboard/Customer/Create-request/CreateReq';
import Acceptbid from '../components/Dashboard/Customer/Accept-bid/AcceptBid';
import MakeBid from '../components/Dashboard/Seller/Make-bid/MakeBid';
import ShowBids from '../components/Dashboard/Customer/Show-bids/ShowBids';
import SellerRegister from '../components/Dashboard/Seller/Register/SellerRegister';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/createNewRequest">createNewRequest</Link>
            </li>
            <li>
              <Link to="/showBids">showBids</Link>
            </li>
            <li>
              <Link to="/acceptBid">acceptBid</Link>
            </li>
            <li>
              <Link to="/makeBid">MakeBid</Link>
            </li>
            <li>
              <Link to="/sellerRegister">sellerRegister</Link>
            </li>
          </ul>
        </nav>

        {/* A <> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/createNewRequest" component={CreateReq} />
          <Route path="/showBids" component={ShowBids} />
          <Route path="/acceptBid" component={Acceptbid} />
          <Route path="/MakeBid" component={MakeBid} />
          <Route path="/sellerRegister" component={SellerRegister} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

// COLOR PALETTE
// #0F4C75
// #1B262C
// #FE938C
// #0075A2
// #F2F7FF
