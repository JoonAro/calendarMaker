import { useState } from "react";
import DoubleHatch from "./DoubleHatch";
import Hatch from "./Hatch";
import TextComponent from "./TextComponent";
import HatchContent from "./HatchContentComp";


const CalendarComponent = ({ calendar, calendarImage, accessKey, bool3, bool4, handleUserReply, guideH, guideText }) => {
    const [showContent, setShowContent] = useState(false);
    const handleContent = (hatchNr, showImage, showContent, clicked) => {
        console.log("clicked", clicked, "showImage", showImage, "showContent", showContent, "hatchNr", hatchNr)
        if (showImage) {
            setShowContent(!showContent)
        }
    }
    return (
        <div className="calendarHolder">
            <HatchContent />
            <div className="gridHolder" style={{
                backgroundImage: `url(${calendarImage})`,
            }}>
                {!bool3 && <TextComponent guideH={guideH} guideText={guideText} yes={"Yes"} no={"No"} handleUserReply={handleUserReply} bool4={bool4} />}
                {bool3 && calendar.hatches.map(hatch => {
                    let hatchKey = hatch.hatchNr
                    let hatchType = hatch.hatchType;
                    return hatchType === 'single' ? <Hatch key={hatchKey} hatch={hatch} accessKey={accessKey} handleContent={handleContent} /> : <DoubleHatch key={hatchKey} hatch={hatch} accessKey={accessKey} handleContent={handleContent} />
                })}
            </div>
        </div>
    )
}

export default CalendarComponent