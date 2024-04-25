import { Button, Container, Nav, Navbar, Row } from 'react-bootstrap';
import Face4Icon from '@mui/icons-material/Face4';
import { Link } from 'react-router-dom';
import calendar from '../assets/media/calendar.svg';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../auth/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {logout} from '../auth/firebase';
import { useNavigate } from 'react-router-dom';




const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [nameUser, setNameUser] = useState("");

    useEffect(() => {
        const getUserData = async () => {
            const q = query(collection(db, "users"),
            where("uid", "==", user?.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(
                (doc)=>{
                    const name = doc.data().name;
                    setNameUser(name);
                });
        };
        if(user){
            getUserData();
        }
    }, [user]
    );

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
                                
                                
                                <Link to="/calendar">
                                    <Button variant="contained" className="text-whiteReplacement text-xl">Calendar</Button>
                                </Link>
                                <Link to="/editorPageV2">
                                    <Button variant="contained" className="text-whiteReplacement text-xl">Edit</Button>
                                </Link>
                                <Link to="/favourites">
                                    <Button variant="contained" className="text-whiteReplacement text-xl">Favourites</Button>
                                </Link>
                                <Link to="/dashboard">
                                    <Button variant="contained" className="text-whiteReplacement text-xl">Dashboard</Button>
                                </Link>
                                <Link to="/premium">
                                    <Button variant="contained" className="text-whiteReplacement 
                                    text-xl">Premium</Button>
                                </Link>
                                {!user && (<Link to="/register">
                                    <Button variant="contained" className="text-whiteReplacement text-xl" >Register</Button>
                                </Link>)   
                                }
                                
                                {!user && (<Link to="/login">
                                    <Button variant="contained" className="text-whiteReplacement text-xl bg-accentColor">Login</Button>
                                </Link>)}
                                {user && (<Button variant="contained" className="text-whiteReplacement text-xl bg-accentColor" onClick={()=>{
                  logout();
                navigate("/login")}} >Logout
                                    </Button>)}

                            </Nav>
                            {user && (
                                <Button className='text-fontDark text-xl uppercase' variant='contained'>
                                {nameUser && (<span><Face4Icon/>{nameUser}</span>)}
                            </Button>
                            )}
                           
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </Row>
        </Container >


    );
};

export default Header;
