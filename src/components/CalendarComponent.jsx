import TextComponent from "./TextComponent";
import CalendarCompFinal from "./CalendarCompFinal";

const CalendarComponent = ({ calendar, calendarImage, accessKey, bool3, bool4, handleUserReply, guideH, guideText, gridRows, hatchEditor }) => {
    return (
        <div className="calendarHolder">
            {!bool3 && <><TextComponent guideH={guideH} guideText={guideText} yes={"Yes"} no={"No"} handleUserReply={handleUserReply} bool4={bool4} />
                <div className="backGroundHolder" style={{
                    backgroundImage: `url(${calendarImage})`
                }}>
                </div>
            </>}
            {bool3 && <CalendarCompFinal calendar={calendar} calendarImage={calendarImage} accessKey={accessKey} gridRows={gridRows} hatchEditor={hatchEditor} />}
        </div>
    )
}

export default CalendarComponent