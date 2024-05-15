import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../auth/firebase";
import FakeSHatch from '../components/FakeSHatch';
import FakeDblHatch from '../components/FakeDblHatch';



const Shareable = () => {
    const { id } = useParams();
    const [calendar, setCalendar] = useState(null);


    useEffect(() => {
        const fetchCalendar = async () => {

            try {
                const calendarDoc = await getDoc(doc(db, `shareable/${id}`));
                if (calendarDoc.exists()) {
                    const calendarData = { id: calendarDoc.id, ...calendarDoc.data() };
                    setCalendar(calendarData);
                    console.log('Fetched calendar:', calendarData);
                } else {
                    console.log('Calendar not found');
                    setCalendar(null);
                }
            } catch (error) {
                console.error('Error fetching calendar:', error);
            }
        };
        fetchCalendar();
    }, [id]); // Add user.uid to the dependency array


    if (!calendar) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className="EditorHolder">
                <div className="calendarContent">
                    <div className="spaceHolder"></div>
                    <div className="gridHolderPreview" style={{ backgroundImage: `url(${calendar.data.data.bgImage})` }}>
                        {calendar.data.data?.hatches?.map(hatch => {
                            let hatchKey = hatch.hatchNr;
                            let hatchType = hatch.hatchType;
                            return hatchType === 'single' ? <FakeSHatch key={hatchKey} hatch={hatch} accessKey={false} /> : <FakeDblHatch key={hatchKey} hatch={hatch} accessKey={false} />;
                        })}
                    </div>
                    <div className="spaceHolder"></div>
                </div>
            </div>
        </div>
    );
}

export default Shareable;

