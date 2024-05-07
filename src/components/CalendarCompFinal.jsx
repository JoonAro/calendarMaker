import DoubleHatch from "./DoubleHatch";
import Hatch from "./Hatch";

const CalendarCompFinal = ({ calendar, calendarImage, accessKey, gridRows }) => {

    return (
        <div className={`gridHolder ${gridRows}`} style={{
            backgroundImage: `url(${calendarImage})`,
            backgroundSize: 'cover',
            width: "95%",
            height: "100%"
        }}>
            {calendar.hatches.map(hatch => {
                let hatchKey = hatch.hatchNr
                let hatchType = hatch.hatchType;
                return hatchType === 'single' ? <Hatch key={hatchKey} hatch={hatch} accessKey={accessKey} /> : <DoubleHatch key={hatchKey} hatch={hatch} accessKey={accessKey} />
            })}
        </div>
    )
}

export default CalendarCompFinal