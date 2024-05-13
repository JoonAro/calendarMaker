import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../auth/firebase";
import FakeSHatch from '../components/FakeSHatch';
import FakeDblHatch from '../components/FakeDblHatch';
import ButtonComponent from '../components/ButtonComponent';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setDoc } from 'firebase/firestore';


const CalendarPreview = () => {
    const { id } = useParams();
    const [calendar, setCalendar] = useState(null);
    const [shareableLink, setShareableLink] = useState('');
    const [user] = useAuthState(auth);

    useEffect(() => {
        const fetchCalendar = async () => {
            try {
                if (user) {
                    const calendarDoc = await getDoc(doc(db, `users/${user.uid}/calendar/${id}`));
                    if (calendarDoc.exists()) {
                        setCalendar({ id: calendarDoc.id, ...calendarDoc.data() });
                    } else {
                        console.log('Calendar not found');
                        setCalendar(null); // Clear the calendar state if not found
                    }
                } else {
                    console.log('No user signed in');
                }
            } catch (error) {
                console.error('Error fetching calendar:', error);
            }
        };
        fetchCalendar();
    }, [id, user]); 

    const generateShareableLink = async () => {
        const shareableLink = `shareable/${id}`;
        setShareableLink(shareableLink);
        console.log("link", shareableLink);

        try {
            if (user) {
                await setDoc(doc(db, 'shareable', id), {
                    data: calendar,  //data? calendar.data?
                    shareableLink: shareableLink,

                    timeStamp: new Date()
                });
            }
        } catch (error) {
            console.error('Error adding data to shareable collection:', error);
        }
    };

    

    // const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');

    if (!calendar) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className="EditorHolder">
                <div className="calendarContent">
                    <div className="spaceHolder"></div>
                    <div className="calendarGridHolder" style={{ backgroundImage: `url(${calendar.data.bgImage})` }}>
                        {calendar.data?.hatches?.map(hatch => {
                            let hatchKey = hatch.hatchNr;
                            let hatchType = hatch.hatchType;
                            return hatchType === 'single' ? <FakeSHatch key={hatchKey} hatch={hatch} accessKey={false} /> : <FakeDblHatch key={hatchKey} hatch={hatch} accessKey={false} />;
                        })}
                    </div>
                    <div className="spaceHolder"></div>
                </div>
            </div>
            <div>
                <p>{shareableLink} Link here</p>
                <div onClick={generateShareableLink}>Generate Shareable Link</div>
            </div>
        </div>
    );
}

export default CalendarPreview;
