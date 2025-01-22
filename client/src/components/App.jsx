import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../assets/css/theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ComingSoon from './ComingSoon.jsx'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import Logout from './Logout.jsx';
import Register from './Register.jsx'
import Account from './Account.jsx'
import header from '../assets/header.png'

function App() {
  const navigate = useNavigate();
  
  // state to track whether the user is authenticated
  const defaultUserData = {id: null, name: null, email: null}
  const [userData, setUserData] = useState(defaultUserData)

  const handleLogout = () => {
      localStorage.removeItem("userId");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      setUserData(defaultUserData)
  }

  useEffect(() => {
    const sessionUserData = {
      id: localStorage.getItem('userId'),
      name: localStorage.getItem('userName'),
      email: localStorage.getItem('userEmail')
    }
    console.log(sessionUserData)
    
    if (sessionUserData.id == null || sessionUserData.id == "undefined") {
      navigate('/login');
    } else {
      setUserData(sessionUserData)
    }
  }, []);

  return (
    <> 
     <img src={header} alt="Header" style={{ width: '100%', height: 'auto' }} />
     <Routes>
        <Route path="/" element={<Dashboard userData={userData} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/edit-routine" element={<ComingSoon endpoint={"edit-routine"} />} />
        <Route path="/exercises" element={<ComingSoon endpoint={"exercises"} />} />
        <Route path="/login" element={<Login userData={userData} setUserData={setUserData} />} />
        <Route path="/logout" element={<Logout handleLogout={handleLogout} />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  )
}

export default App
