import { Button, Container, Nav, Navbar, NavbarText, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../auth/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { logout } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';
import Avatar from './Avatar';
import icon2 from '../assets/icon2.svg';
import { useTheme } from './theme/ThemeContext';
import ThemeToggle from './theme/ThemeToggle';




const Header = () => {
    const { theme } = useTheme();
    console.log('Received theme in Header:', theme);
    const smallBackground = theme === 'dark' ? 'bg-smallBackground-dark' : 'bg-smallBackground-light';
    const whiteReplacement = theme === 'dark' ? 'text-whiteReplacement-dark' : 'text-whiteReplacement-light';
    const fontDark = theme === 'dark' ? 'text-fontDark-dark' : 'text-fontDark-light';

    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [nameUser, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const superUser = ["Michel", "Joona", "Alona", "Samuel"];

    useEffect(() => {
        const getUserData = async () => {
            const q = query(collection(db, "users"),
                where("uid", "==", user?.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(
                (doc) => {
                    setName(doc.data().name);
                    setAvatar(doc.data().avatar);
                });
        };
        if (user) {
            getUserData();
        }
    }, [user]
    );

    return (
        <Container fluid >
            <Row>
                <Navbar className={smallBackground} expand="lg">


                    <Link to="/"
                    >   <img className='h-16 ml-2.5 ml-hover:-translate-y-1 hover:scale-110'
                        src={icon2}
                        alt="logo"
                        />
                    </Link>
                    <Container className="justify-content-end font-sans">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Link to="/">
                                    <Button variant="contained" className={`${whiteReplacement} text-xl`}>Home</Button>
                                </Link>

                                <Link to="/editorPageV2">
                                    <Button variant="contained" className={`${whiteReplacement} text-xl`}>Edit</Button>
                                </Link>
                                {user &&
                                    (<Link to="/collection">
                                        <Button variant="contained" className={`${whiteReplacement} text-xl`}>Calendar Collection</Button>
                                    </Link>)}
                                {user && superUser.includes(nameUser) ? (
                                    <Link to="/dashboard">
                                        <Button variant="contained" className={`${whiteReplacement} text-xl`}>
                                            Dashboard
                                        </Button>
                                    </Link>
                                ) : null}

                                {!user && (<Link to="/register">
                                    <Button variant="contained" className={`${whiteReplacement} text-xl`} >Register</Button>
                                </Link>)
                                }
                                <ThemeToggle />
                                {!user && (<Link to="/login">
                                    <Button variant="contained" className={`${whiteReplacement} text-xl bg-accentColor`}>Login</Button>
                                </Link>)}
                                {user && (<Button variant="contained" className={`${whiteReplacement} text-xl bg-accentColor`} onClick={() => {
                                    logout();
                                    navigate("/login")
                                }} >Logout
                                </Button>)}

                            </Nav>
                            {user && (
                                <>
                                    <NavbarText
                                        className={`${fontDark} text-xl uppercase`}
                                        variant="contained"
                                        style={{ margin: "1rem" }}

                                    >
                                        {nameUser && (
                                            <span>
                                                {avatar ? (
                                                    <Avatar avatarValue={avatar} />
                                                ) : (
                                                    <img src="placeholder-image.png" alt="Loading..." />
                                                )}
                                            </span>
                                        )}
                                    </NavbarText>
                                    <NavbarText
                                        className={`${fontDark} text-xl uppercase`}
                                        variant="contained"
                                    >
                                        {nameUser && (<span>{`${nameUser}`}</span>)}
                                    </NavbarText>

                                </>
                            )}


                        </Navbar.Collapse>
                    </Container>

                </Navbar>
            </Row>
        </Container >
    );
};

export default Header;
