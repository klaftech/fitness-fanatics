import {useState} from 'react'
import Header from './Header.jsx'

const Dashboard = () => {
    const [count, setCount] = useState(0)
    
    return (
      <>
        <Header/>
        <p>logged in content will go here</p>
      </>
    );
}

export default Dashboard;
