import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import CoxsBazar from './components/Places/CoxsBazar';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SwiperJS from './components/SwiperJs/SwiperJS';
import { getCurrentUser, handleSignOut } from './components/Login/loginManager';


export const UserContext = createContext();


function App() {
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className={`App ${location.pathname === "/" || location.pathname.includes('booking') ? "home" : ""}`}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search/:place" element={<PrivateRoute redirectTo="/login"><Search /> </PrivateRoute>} />
          <Route path="/booking/:place" element={<Booking />} />
          <Route path="/swiper" element={<SwiperJS />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
