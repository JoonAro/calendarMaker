// Header.jsx


import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Header = () => {


  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-right">
            
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
