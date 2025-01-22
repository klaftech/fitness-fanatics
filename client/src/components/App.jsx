import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import ComingSoon from './ComingSoon.jsx'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Account from './Account.jsx'

function App() {
  const navigate = useNavigate();
  
  // state to track whether the user is authenticated
  const [userData, setUserData] = useState({id: null, name: null, email: null})

  useEffect(() => {
    const sessionUserData = {
      id: localStorage.getItem('userId'),
      name: localStorage.getItem('userName'),
      email: localStorage.getItem('userEmail')
    }
    //console.log(sessionUserData)
    
    if (sessionUserData.id == null) {
      navigate('/login');
    } else {
      setUserData(sessionUserData)
    }
  }, []);


  //if (!checkStorage) return <p>Loading storage</p>
  return (
    <> 
     <Routes>
        <Route path="/login" element={<Login userData={userData} setUserData={setUserData} />} />
        <Route path="/signup" element={<Register />} />

        <Route path="/" element={<Dashboard userData={userData} />} />
        <Route path="/account" element={<Account />} />
        <Route path="/routine" element={<ComingSoon endpoint={"routine dashboard"} />} />
        <Route path="/edit-routine" element={<ComingSoon endpoint={"edit-routine"} />} />
        <Route path="/exercises" element={<ComingSoon endpoint={"exercises"} />} />

        <Route path="/logout" element={<ComingSoon endpoint={"logout"} />} />
        <Route path="/test" element={<Dashboard />}></Route>
      </Routes>
    </>
  )
}

export default App
