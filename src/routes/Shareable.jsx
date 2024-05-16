import { useState, useEffect } from 'react';
import '../styles/editorV2Styles.css';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { db } from "../auth/firebase";
import FakeSHatch from '../components/FakeSHatch';
import FakeDblHatch from '../components/FakeDblHatch';



const Shareable = () => {
    const { id } = useParams();
    const [calendar, setCalendar] = useState(null);
    const [gridRows, setGridRows] = useState([]);
    const [hatchAmount, setHatchAmount] = useState("hatchAMount7");

    const handleGridRows = (hatchTotal) => {
        const numberOfRows = hatchTotal / 5;
        setHatchAmount(`hatchAmount${hatchTotal}`);
        console.log(hatchTotal, "hatchTotal")
        console.log(numberOfRows, "numberOfRows")
        if (hatchTotal < 10) {
            setGridRows(["threeColumns", "threeRows"]);
        }
        else if (hatchTotal >= 10 && hatchTotal < 13) {
            setGridRows(["threeColumns", "fourRows"]);
        }
        else if (hatchTotal >= 13 && hatchTotal < 17) {
            setGridRows(["fourColumns", "fourRows"]);
        }
        else if (hatchTotal >= 16 && hatchTotal < 21) {
            setGridRows(["fourColumns", "fiveRows"]);
        }
        else if (hatchTotal >= 21 && hatchTotal < 26) {
            setGridRows(["fiveColumns", "fiveRows"]);
        }
        else {
            setGridRows(["sixColumns", "fiveRows"]);
        }
    }

    useEffect(() => {
        const fetchCalendar = async () => {

            try {
                const calendarDoc = await getDoc(doc(db, `shareable/${id}`));
                if (calendarDoc.exists()) {
                    const calendarData = { id: calendarDoc.id, ...calendarDoc.data() };
                    let hatchAmount = calendarData.data.data.numbOfHatches;
                    console.log(hatchAmount, "hatchAmount")
                    handleGridRows(hatchAmount);
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
            <div className="calendarContent">
                <div className='calendarHolder'>
                    <div className={`gridHolder ${gridRows[0]} ${gridRows[1]} ${hatchAmount}`} style={{ backgroundImage: `url(${calendar.data.data.bgImage})` }}>
                        {calendar.data.data?.hatches?.map(hatch => {
                            let hatchKey = hatch.hatchNr;
                            let hatchType = hatch.hatchType;
                            return hatchType === 'single' ? <FakeSHatch key={hatchKey} hatch={hatch} accessHatch={false} /> : <FakeDblHatch key={hatchKey} hatch={hatch} accessHatch={false} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shareable;
