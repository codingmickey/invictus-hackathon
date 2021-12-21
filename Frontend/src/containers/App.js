import { ThemeProvider } from '@mui/system';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

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
          </ul>
        </nav>

        {/* A <> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createNewRequest" element={<CreateReq />} />
          <Route path="/showBids" element={<ShowBids />} />
          <Route path="/acceptBid" element={<Acceptbid />} />
          <Route path="/MakeBid" element={<MakeBid />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
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
