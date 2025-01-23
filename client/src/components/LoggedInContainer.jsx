import Header from './Header.jsx'
import RoutineContainer from './RoutineContainer.jsx'

const LoggedInContainer = ({userData, children}) => {
    return (
      <>
        <Header userData={userData}/>
        {children}
      </>
    );
}

export default LoggedInContainer;
