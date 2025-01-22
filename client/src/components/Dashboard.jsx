//import {useState} from 'react'
import Header from './Header.jsx'
import RoutineContainer from './RoutineContainer.jsx'

const Dashboard = ({user}) => {
    //const [count, setCount] = useState(0)
    
    return (
      <>
        <Header user={user}/>
        <RoutineContainer />
      </>
    );
}

export default Dashboard;
