import {Link} from 'react-router-dom'
const Calendar = () => {
    return (
        <div className="container-calendar">
            <nav className="navbar">
                <Link to="/calenar">calendar</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </nav>
        </div>
    )
}

export default Calendar