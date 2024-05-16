import { useState, useEffect } from 'react';
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../auth/firebase";
import { Card, Container } from 'react-bootstrap';
import ButtonComponent from '../components/ButtonComponent';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {Button} from 'react-bootstrap';

const Favorites = () => {
    const [usersCalendar, setUsersCalendar] = useState([]);
    const [user] = useState(auth.currentUser);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                const getUsersCalendar = async () => {
                    const usersCalendarRef = collection(db, `users/${currentUser.uid}/calendar`);
                    const querySnapshot = await getDocs(usersCalendarRef);
                    const userCalendar = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    setUsersCalendar(userCalendar);
                };
                getUsersCalendar();
            } else {
                // Handle case when user is not authenticated
                setUsersCalendar([]);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleDeleteCalendar = async (calendarId) => {
        try {
            await deleteDoc(doc(db, `users/${auth.currentUser.uid}/calendar/${calendarId}`));
            setUsersCalendar(usersCalendar.filter(calendar => calendar.id !== calendarId));
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };
    return (
        <>
            <Container fluid className='flex min-h-screen items-start justify-center bg-mainBackground-light font-sans'>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-5">
                    {usersCalendar.map(calendar => (

                        <Card key={calendar.id} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/100">

                            <div className='h-96 w-72'>
                                <Card.Img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={calendar.data.bgImage} />
                                <CloseIcon className="absolute text-muted top-0 right-0 bg-white opacity-75 p-1" onClick={() => handleDeleteCalendar(calendar.id)} />
                            </div>
                            <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[45%] transition-all duration-500 bottom-0'>
                             
                                    <Link to={`/calendar/${calendar.id}`}>
                                    <Button className="button p-1">
                                        Preview
                                        </Button>
                                    </Link>
                             

                            </div>

                        </Card>

                    ))}
                </div>
            </Container>
        </>
    );
}

export default Favorites;
