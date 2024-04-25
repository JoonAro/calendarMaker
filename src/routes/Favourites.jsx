import { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../auth/firebase";
import { Card, Container, Row } from 'react-bootstrap';
import ButtonComponent from '../components/ButtonComponent';
import CloseIcon from '@mui/icons-material/Close';

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
            <Container className='flex min-h-screen items-center justify-center m-5'>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">


                        {usersCalendar.map(calendar => (
                            <Card key={calendar.id} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">

                                <div className='h-96 w-72'>
                                <Card.Img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={calendar.data.bgImage} />

                                <CloseIcon className="absolute text-muted top-0 right-0 bg-smallBackground opacity-75 p-1"/>
                                </div>
                                
                                <div className='absolute insent-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 tarnsition-all duration-500 bottom-0'>

                                <ButtonComponent className="p-1">Preview</ButtonComponent>
                                <ButtonComponent>Edit</ButtonComponent>
                                </div>
                                
                            </Card>
                           
                        ))}
                         </div>
             
            </Container>
        </>
    );
}

export default Favorites;
