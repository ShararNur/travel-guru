import './App.css';
import React from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import CoxsBazar from './components/Places/CoxsBazar';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
