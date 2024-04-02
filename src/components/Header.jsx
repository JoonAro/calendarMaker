import "../styles/footerHeader.css";
import { Link } from 'react-router-dom';

const Header = () => {

    return (


        <div className="Header-container fixed top-0 w-full z-10">
            <div className='Header-content'>
                <nav className="navbar">

                    <Link to="/">Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/editorPage">Edit</Link>

                </nav>
            </div>
        </div>


    );
};

export default Header;
