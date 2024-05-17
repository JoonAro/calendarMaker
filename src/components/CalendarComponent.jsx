import TextComponent from "./TextComponent";
import CalendarCompFinal from "./CalendarCompFinal";

const CalendarComponent = ({ calendar, calendarImage, accessHatch, bool3, bool4, handleUserReply, guideH, guideText, gridRows, hatchEditor, hatchAmount, sidebarMod }) => {
    return (
        <div className="calendarHolder" style={{ width: sidebarMod }}>
            {!bool3 && <><TextComponent guideH={guideH} guideText={guideText} yes={"Yes"} no={"No"} handleUserReply={handleUserReply} bool4={bool4} />
                <div className={`backGroundHolder ${gridRows}`} style={{
                    backgroundImage: `url(${calendarImage})`
                }}>
                </div>
            </>}
            {bool3 && <CalendarCompFinal calendar={calendar} calendarImage={calendarImage} accessHatch={accessHatch} gridRows={gridRows} hatchAmount={hatchAmount} hatchEditor={hatchEditor} />}
        </div>
    )
}

export default CalendarComponent