//import {useState} from 'react'
import Header from './Header.jsx'
import RoutineContainer from './RoutineContainer.jsx'

const Dashboard = ({userData}) => {
    //const [count, setCount] = useState(0)
    
    return (
      <>
        <Header userData={userData}/>
        <RoutineContainer />
      </>
    );
}

export default Dashboard;
