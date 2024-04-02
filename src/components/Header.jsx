import "../styles/footerHeader.css";
import { Link } from 'react-router-dom';

const Header = () => {

    return (


        <div className="Header-container">
            <div className='Header-content'>
                <nav className="navbar">

                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/edit">Edit</Link>

                </nav>
            </div>
        </div>


    );
};

export default Header;
