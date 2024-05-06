import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../auth/firebase";
import FakeSHatch from '../components/FakeSHatch';
import FakeDblHatch from '../components/FakeDblHatch';


const CalendarPreview = () => {
    const { id } = useParams();
    const [calendar, setCalendar] = useState(null);


    useEffect(() => {
        const fetchCalendar = async () => {
            try {
                const user = auth.currentUser;
                if (user) {
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
            <div className="EditorHolder">
                <div className="calendarContent">
                    <div className="spaceHolder">
                    </div>
                    <div className="calendarGridHolder" style={{
                        backgroundImage: `url(${calendar.data.bgImage})`,
                    }}>
                        {calendar.data?.hatches?.map(hatch => {
                            let hatchKey = hatch.hatchNr;
                            let hatchType = hatch.hatchType;
                            return hatchType === 'single' ? <FakeSHatch key={hatchKey} hatch={hatch} accessKey={false} /> : <FakeDblHatch key={hatchKey} hatch={hatch} accessKey={false} />
                        })}
                    </div>
                    <div className="spaceHolder"></div>
                </div>
            </div>

        </div>
    );
}


export default CalendarPreview;



