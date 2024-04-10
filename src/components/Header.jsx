import { Button, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import calendar from '../assets/media/calendar.svg';

const Header = () => {

    return (
        <Container fluid>

            <Row>
                <Navbar
                    style={{ backgroundColor: '#EED6D3' }}
                    expand="md"
                >
                    <img
                        className="img-thumbnail mx-auto d-block mb-2"
                        style={{ width: "40%", maxWidth: "5rem", height: "5rem", backgroundColor: '#EED6D3', borderColor: '#EED6D3' }}
                        src={calendar}
                        alt="calendar"
                    />

                    <Container className="justify-content-end">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Link to="/">
                                    <Button variant="contained" style={{ color: '#ffffff' }}>Home</Button>
                                </Link>
                                <Link to="/register">
                                    <Button variant="contained" style={{ color: '#ffffff' }}>Register</Button>
                                </Link>
                                <Link to="/login">
                                    <Button variant="contained" style={{ color: '#ffffff' }}>Login</Button>
                                </Link>
                                <Link to="/editorPage">
                                    <Button variant="contained" style={{ color: '#ffffff' }}>Edit</Button>
                                </Link>
                                <Link to="/dashboard">
                                    <Button variant="contained" style={{ color: '#ffffff' }}>Dashboard</Button>
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
