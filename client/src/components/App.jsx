import {Routes, Route, Navigate} from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import ComingSoon from './ComingSoon.jsx'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Account from './Account.jsx'  
import Logout from './Logout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  // state to track whether the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  //const [userData, setUserData] = useState({name:"test",username:"test",email:"test",id:"1"});
  const [userData, setUserData] = useState({name:"test"})
    
  const [checkStorage, setCheckStorage] = useState(false);
  const navigate = useNavigate();
  
  console.log("user data below")
  console.log(userData['name'])

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    //console.log(localStorage.getItem('userData'))
    if (!userData) {
      navigate('/login');
      //setIsAuthenticated(true);
    }
    setCheckStorage(true)
    setUserData(userData)
  }, []);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  //if (!checkStorage) return <p>Loading storage</p>

  return (
    <> 
     <Routes>
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<Register />} />

        <Route path="/" element={isAuthenticated ? <Dashboard user={userData} /> : <Navigate to="/login" />} />
        <Route path="/account" element={isAuthenticated ? <Account /> : <Navigate to="/login" />} />
        <Route path="/routine" element={isAuthenticated ? <ComingSoon endpoint={"routine dashboard"} /> : <Navigate to="/login" />} />
        <Route path="/edit-routine" element={isAuthenticated ? <ComingSoon endpoint={"edit-routine"} /> : <Navigate to="/login" />} />
        <Route path="/exercises" element={isAuthenticated ? <ComingSoon endpoint={"exercises"} /> : <Navigate to="/login" />} />

        <Route path="/logout" element={<LogoutButton setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/test" element={<Dashboard />}></Route>
      </Routes>
    </>
  )
}

export default App
