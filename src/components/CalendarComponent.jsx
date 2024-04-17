import DoubleHatch from "./DoubleHatch";
import Hatch from "./Hatch";


const CalendarComponent = ({ calendar, calendarImage, accessKey, bool3 }) => {
    return (
        <div className="calendarHolder">
            <div className="gridHolder" style={{
                backgroundImage: `url(${calendarImage})`,
            }}>
                {bool3 && calendar.hatches.map(hatch => {
                    let hatchKey = hatch.hatchNr
                    let hatchType = hatch.hatchType;
                    return hatchType === 'single' ? <Hatch key={hatchKey} hatch={hatch} accessKey={accessKey} /> : <DoubleHatch key={hatchKey} hatch={hatch} accessKey={accessKey} />
                })}
            </div>
        </div>
    )
}

export default CalendarComponent