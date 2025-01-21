import MenuTop from './MenuTop';
import MenuButtom from './MenuBottom';

const Header = () => {

    const first_name = "DEMO"
    const last_name = "DEMO"
    const username = "demoUser"

    return (
        <div style={{'margin':'2%'}} >
            <MenuTop first_name={first_name} last_name={last_name} username={username} />
            <MenuButtom />
        </div>
        // <div class="header-container">    
        //     {/* first row - welcome */}
        //     <div class="header-row">
        //         <div class="column left welcome">
        //             <p>Welcome, First_Name Last_Name</p>
        //         </div>
        //         <div class="column center">
        //             <p></p>
        //         </div>
        //         <div class="column right username">
        //             <p>Username</p>
        //         </div>
        //     </div>

        //     {/* second row - menu */}
        //     <div class="header-row bar">
        //         <div class="column left menu">Menu</div>
        //         <div class="column right menu-buttons">
        //             <Link to="exercises">View all Exercises</Link>
        //             <Link to="account">Edit Account Info</Link>
        //             <Link to="logout">Logout</Link>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Header;
