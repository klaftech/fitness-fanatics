import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            
            {/* first row - welcome */}
            <div style={{'background':'grey','padding':'1%','margin':'2%'}}>
                <div style={{'font-size':'2em'}}>
                    Welcome, First_Name Last_Name
                </div>
                <div>
                    Username
                </div>
            </div>

            {/* second row - menu */}
            <div style={{'background':'grey','padding':'1%','margin':'2%'}}>
                <div>Menu</div>
                <div>
                    <Link to="exercises">View all Exercises</Link>
                    <Link to="account">Edit Account Info</Link>
                    <Link to="logout">Logout</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
