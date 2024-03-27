// Header.jsx


import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Header = () => {


  return (
    <header>
      
        <div className="container">
        <nav className="navbar">
        
            <Link to="/">Home</Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            
              </nav> 
        </div>
     
    </header>
  );
};

export default Header;
