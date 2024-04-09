import { Link } from 'react-router-dom';
import { useState } from 'react';
import calendar from '../assets/media/calendar.svg';
import menuIcon from '../assets/media/menu.svg'; // Importing the menu icon

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false); // State to manage menu visibility

    const closeMenu = () => {
        setMenuOpen(false); // Function to close the menu
    };

    return (
        <div className="Header-container fixed top-0 w-full z-10 bg-smallBackground text-black flex justify-between items-center h-16 px-4">
            <div className='Header-content flex items-center'>
                <img src={calendar} alt="Calendar" className="h-8 mr-2" /> {/* Using the calendar image */}
                <span className="text-sm">Dream Calendar</span> {/* Adding the logo name */}
            </div>
            <nav className="navbar sm:flex justify-end">
                <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden block">
                    {/* Menu button with the menu icon */}
                    <img src={menuIcon} alt="Menu" className="h-6 w-6" />
                </button>
                <div className={`sm:hidden absolute top-16 right-0 bg-white border border-gray-200 mt-2 w-48 rounded-md shadow-lg ${menuOpen ? 'block' : 'hidden'}`}>
                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Home</Link>
                    <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Register</Link>
                    <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Login</Link>
                    <Link to="/calendar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Calendar</Link>
                    <Link to="/editorPage" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeMenu}>Edit</Link>
                </div>
                <div className="hidden sm:flex">
                    <Link to="/" className="mx-4">Home</Link>
                    <Link to="/register" className="mx-4">Register</Link>
                    <Link to="/login" className="mx-4">Login</Link>
                    <Link to="/calendar" className="mx-4">Calendar</Link>
                    <Link to="/editorPage" className="mx-4">Edit</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;
