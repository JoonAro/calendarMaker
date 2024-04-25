import { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../auth/firebase";
import { Card, Container, Row } from 'react-bootstrap';
import ButtonComponent from '../components/ButtonComponent';

const Favorites = () => {
    const [usersCalendar, setUsersCalendar] = useState([]);

    useEffect(() => {
        const getUsersCalendar = async () => {
            const user = auth.currentUser;
            if (user) {
                const usersCalendarRef = collection(db, `users/${user.uid}/calendar`);
                const querySnapshot = await getDocs(usersCalendarRef);
                const userCalendar = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setUsersCalendar(userCalendar);
                console.log(userCalendar);
            }

        };
        getUsersCalendar();
    }, []);

    return (
        <>
            <Container fluid style={{ background: "#67595E", minHeight: "100vh" }}>
                <Row xs={1} md={1} lg={1} className="g-3">
                    <div className="d-flex flex-wrap justify-content-around mt-3">
                        {usersCalendar.map(calendar => (
                            <Card key={calendar.id} className="m-2" style={{ backgroundColor: "#EED6D3", width: '18rem' }}>
                                <Card.Img variant="top" src={calendar.data.bgImage} />
                                <div className="d-flex justify-content-center">
                                    <ButtonComponent>Preview</ButtonComponent>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <ButtonComponent>Edit</ButtonComponent>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Row>
            </Container>
        </>
    );
}

export default Favorites;
