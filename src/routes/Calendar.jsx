import fakeCalendar from '../../fakeCalendar.json';
import { useState } from "react";
import Hatch from "../components/Hatch";
import DoubleHatch from "../components/DoubleHatch";
import '../styles/editorStyles.css';

// Todo: Make sure you check the date of the hatch before user is able to open the hatch
const Calendar = () => {
    const [calendar, setCalendar] = useState(fakeCalendar);
    const [calendarImage, setCalendarImage] = useState(calendar.bgImage);
    // Create a date checking function when hatch is clicked check if date is smaller than today. if so open hatch 

    /* const handleBgSelection = (hatchImg) => {
        if (!bool) {
            setCalendarImage(hatchImg);
            setBool(true);
        }
    } */

    // Idea for createObject. Add array of numbers etc. When user edits te calendar and chooses a hatch give him option to choose double hatch. If he chooses it then handleClick to add the hatch number to array and in createcalendar if number is this then hatchtype is that.
    //handleBgSelection(calendar.bgImage)
    return (
        <>
            <div className="EditorHolder">
                <div className="calendarContent">
                    <div className="spaceHolder"></div>
                    <div className="calendarGridHolder" style={{
                        backgroundImage: `url(${calendarImage})`,
                    }}>

                        {calendar.hatches.map(hatch => {
                            let hatchKey = hatch.hatchNr;
                            let hatchType = hatch.hatchType;
                            return hatchType === 'single' ? <Hatch key={hatchKey} hatch={hatch} /> : <DoubleHatch key={hatchKey} hatch={hatch} />
                        })}
                    </div>
                    <div className="spaceHolder"></div>
                </div>
            </div>
        </>
    )
}

export default Calendar