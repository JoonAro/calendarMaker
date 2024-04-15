import DoubleHatch from "./DoubleHatch";
import Hatch from "./Hatch";


const CalendarComponent = ({ calendar, calendarImage }) => {
    return (
        <div className="gridHolder" style={{
            backgroundImage: `url(${calendarImage})`,
        }}>
            {calendar.hatches.map(hatch => {
                let hatchKey = hatch.date.getDate();
                let hatchSide = hatch.hatchSide;
                let hatchType = hatch.hatchType;
                return hatchType === 'single' ? <Hatch key={hatchKey} hatch={hatch} hatchSide={hatchSide} /> : <DoubleHatch key={hatchKey} hatch={hatch} />
            })}
        </div>
    )
}

export default CalendarComponent