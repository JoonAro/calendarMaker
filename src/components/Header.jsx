import { Button, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import calendar from '../assets/media/calendar.svg';


const Header = () => {

    return (
        <Container fluid>

            <Row>
                <Navbar
                    className="bg-smallBackground"
                    expand="md"
                >
                    <img
                        className="img-thumbnail mx-auto d-block mb-2 bg-smallBackground border-smallBackground"
                        style={{ width: "40%", maxWidth: "5rem", height: "5rem" }}
                        src={calendar}
                        alt="calendar"
                    />

                    <Container className="justify-content-end font-sans">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Link to="/">
                                    <Button variant="contained" className="text-whiteReplacement text-xl">Home</Button>
                                </Link>
                                <Link to="/register">
                                    <Button variant="contained" className="text-whiteReplacement text-xl" >Register</Button>
                                </Link>
                                <Link to="/login">
                                    <Button variant="contained" className="text-whiteReplacement text-xl">Login</Button>
                                </Link>
                                <Link to="/calendar">
                                    <Button variant="contained" className="text-whiteReplacement text-xl">Calendar</Button>
                                </Link>
                                <Link to="/editorPageV2">
                                    <Button variant="contained" className="text-whiteReplacement text-xl">Edit</Button>
                                </Link>
                                <Link to="/dashboard">
                                    <Button variant="contained" className="text-whiteReplacement text-xl">Dashboard</Button>
                                </Link>
                                <Link to="/premium">
                                    <Button variant="contained" className="text-whiteReplacement 
                                    text-xl">Premium</Button>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </Row>
        </Container >


    );
};

export default Header;
