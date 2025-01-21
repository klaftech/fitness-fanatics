import {Routes, Route} from 'react-router-dom'
import ComingSoon from './ComingSoon.jsx'
import Dashboard from './Dashboard.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <> 
     <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/login" element={ <ComingSoon endpoint={"login"} /> } />
        <Route path="/logout" element={ <ComingSoon endpoint={"logout"} /> } />
        <Route path="/signup" element={ <ComingSoon endpoint={"signup"} /> } />
        <Route path="/account" element={ <ComingSoon endpoint={"account"} /> } />
        <Route path="/routine" element={ <ComingSoon endpoint={"routine dashboard"} /> } />
        <Route path="/edit-routine" element={ <ComingSoon endpoint={"edit-routine"} /> } />
        <Route path="/exercises" element={ <ComingSoon endpoint={"exercises"} /> } />
      </Routes>
    </>
  )
}

export default App
