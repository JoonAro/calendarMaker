import fakeCalendar from '../../fakeCalendar.json';
import { useState } from "react";
import Hatch from "../components/Hatch";
import DoubleHatch from "../components/DoubleHatch";
import FakeSHatch from '../components/FakeSHatch';
import FakeDblHatch from '../components/FakeDblHatch';
import '../styles/editorStyles.css';
import TextComponent from '../components/TextComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addDataToFirestore } from '../auth/firebase';

const Calendar = () => {
    const calendar = useSelector(state => state.calendar.calendar);
    const [calendarImage, setCalendarImage] = useState(calendar.bgImage);
    const dispatch = useDispatch();

    const saveCalendarFirestore = (calendar) => {
        return async (dispatch) => {
            const calendarData = JSON.parse(JSON.stringify(calendar));

            await addDataToFirestore("calendar", calendarData);

            dispatch({ type: "saveCalendarFirestore", payload: calendarData });
        };
    };

    return (
        <>
            <div className="EditorHolder">
                <div className="calendarContent">
                    <div className="spaceHolder">
                        <Button onClick={() => {
                            dispatch(saveCalendarFirestore(calendar));
                            console.log("Calendar saved");
                        }}>
                            Save
                        </Button>
                    </div>
                    <div className="calendarGridHolder" style={{
                        backgroundImage: `url(${calendarImage})`,
                    }}>

                        {calendar?.hatches?.map(hatch => {
                            let hatchKey = hatch.hatchNr;
                            let hatchType = hatch.hatchType;
                            return hatchType === 'single' ? <FakeSHatch key={hatchKey} hatch={hatch} accessKey={false} /> : <FakeDblHatch key={hatchKey} hatch={hatch} accessKey={false} />
                        })}
                    </div>
                    <div className="spaceHolder"></div>
                </div>
            </div>
        </>
    )
}

export default Calendar