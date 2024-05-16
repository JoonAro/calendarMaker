import DoubleHatch from "./DoubleHatch";
import Hatch from "./Hatch";

const CalendarCompFinal = ({ calendar, calendarImage, accessHatch, gridRows, hatchEditor, hatchAmount }) => {


    return (
        <div className={`gridHolder ${gridRows[0]} ${gridRows[1]} hatchAmount${hatchAmount}`} style={{
            backgroundImage: `url(${calendarImage})`,
            backgroundSize: 'cover'
        }}>
            {calendar.hatches.map(hatch => {
                let hatchKey = hatch.hatchNr
                let hatchType = hatch.hatchType;
                return hatchType === 'single' ? <Hatch key={hatchKey} hatch={hatch} accessHatch={accessHatch} hatchEditor={hatchEditor} /> : <DoubleHatch key={hatchKey} hatch={hatch} accessHatch={accessHatch} hatchEditor={hatchEditor} />
            })}
        </div>
    )
}

export default CalendarCompFinal