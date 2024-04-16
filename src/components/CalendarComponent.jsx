import DoubleHatch from "./DoubleHatch";
import Hatch from "./Hatch";


const CalendarComponent = ({ calendar, calendarImage, accessKey }) => {
    return (
        <div className="gridHolder" style={{
            backgroundImage: `url(${calendarImage})`,
        }}>
            {calendar.hatches.map(hatch => {
                let hatchKey = hatch.hatchNr
                let hatchType = hatch.hatchType;
                return hatchType === 'single' ? <Hatch key={hatchKey} hatch={hatch} accessKey={accessKey} /> : <DoubleHatch key={hatchKey} hatch={hatch} accessKey={accessKey} />
            })}
        </div>
    )
}

export default CalendarComponent