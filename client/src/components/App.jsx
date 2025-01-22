import {Routes, Route, Navigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import ComingSoon from './ComingSoon.jsx'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Account from './Account.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // state to track whether the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <> 
     <Routes>
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<Register />} />

        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/account" element={isAuthenticated ? <Account /> : <Navigate to="/login" />} />
        <Route path="/routine" element={isAuthenticated ? <ComingSoon endpoint={"routine dashboard"} /> : <Navigate to="/login" />} />
        <Route path="/edit-routine" element={isAuthenticated ? <ComingSoon endpoint={"edit-routine"} /> : <Navigate to="/login" />} />
        <Route path="/exercises" element={isAuthenticated ? <ComingSoon endpoint={"exercises"} /> : <Navigate to="/login" />} />

        <Route path="/logout" element={<ComingSoon endpoint={"logout"} />} />
        <Route path="/test" element={<Dashboard />}></Route>
      </Routes>
    </>
  )
}

export default App
