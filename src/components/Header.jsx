import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header-container fixed top-0 w-full z-10 bg-smallBackground text-black flex justify-end items-center h-16">
            <div className='Header-content flex justify-end w-full sm:ml-0 sm:mr-0'>
                <nav className="navbar flex justify-end w-full">
                    <Link to="/" className="mx-4">Home</Link>
                    <Link to="/register" className="mx-4">Register</Link>
                    <Link to="/login" className="mx-4">Login</Link>
                    <Link to="/calendar" className="mx-4">Calendar</Link>
                    <Link to="/editorPage" className="mx-4">Edit</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;
