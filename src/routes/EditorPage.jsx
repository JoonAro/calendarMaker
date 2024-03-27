
import { Link } from 'react-router-dom';

const EditorPage = () => {
    return (
        <div className="container-editpage">
             <nav className="navbar">
                <Link to="/">User</Link>
                <Link to="/collection">Favourite</Link>
                <Link to="/permium">Go permium</Link>
                <Link to="/logout">Logout</Link>
             </nav>
        </div>
    )
}

export default EditorPage