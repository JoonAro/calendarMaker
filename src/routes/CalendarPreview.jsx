import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { Card } from 'react-bootstrap';
import CloseIcon from '@mui/icons-material/Close';
import { auth, db } from "../auth/firebase"; 

const CalendarPreview = () => {
    const { id } = useParams();
    const [calendar, setCalendar] = useState(null);
    
    useEffect(() => {
        const fetchCalendar = async () => {
            try {
                // Get the current user
                const user = auth.currentUser;
                if (user) {
                    // Use user.uid directly here
                    const calendarDoc = await getDoc(doc(db, `users/${user.uid}/calendar/${id}`));
                    if (calendarDoc.exists()) {
                        setCalendar({ id: calendarDoc.id, ...calendarDoc.data() });
                    } else {
                        console.log('Calendar not found');
                    }
                } else {
                    console.log('No user signed in');
                }
            } catch (error) {
                console.error('Error fetching calendar:', error);
            }
        };
        fetchCalendar();
    }, [id]);

    if (!calendar) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Card key={calendar.id} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className='h-96 w-72'>
                    <Card.Img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src={calendar.data.bgImage} />
                    <CloseIcon className="absolute text-muted top-0 right-0 bg-smallBackground opacity-75 p-1" />
                </div>
            </Card>
        </div>
    );
}

export default CalendarPreview;
