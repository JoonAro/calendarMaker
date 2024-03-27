import { Link } from "react-router-dom"

const Collection = () => {
    return (
        <div className="container-collection">
            <nav className="navbar">
                
            <Link to="/collection">Favourite</Link>
              <Link to="/register">Register</Link>
              <Link to="/logout">Logout</Link>
            
                </nav>
        </div>
    )
}

export default Collection