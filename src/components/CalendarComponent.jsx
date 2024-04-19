import { useState } from "react";
import DoubleHatch from "./DoubleHatch";
import Hatch from "./Hatch";
import TextComponent from "./TextComponent";
import HatchContent from "./HatchContentComp";

// Todo: recreate hatch to take orders from calendarComponent.
//       -Make the hatch open when you click the outer calendarImage div 
//       -Then when hatch is open when you click on the calendarImage again it will give you the hatchContentComp
//        with the calendarImage displayed on it
//       -Clicking X or outside the hatchContentComp will close the component.
//       -When you click on the hatch div it only closes the door. You may have to block the first click with a boolean to block it from closing it straight away.
const CalendarComponent = ({ calendar, calendarImage, accessKey, bool3, bool4, handleUserReply, guideH, guideText }) => {
    const [showContent, setShowContent] = useState(false);
    const handleContent = (hatchNr, showImage, showContent, clicked) => {
        console.log("clicked", clicked, "showImage", showImage, "showContent", showContent, "hatchNr", hatchNr)
        if (showImage === true) {
            setShowContent(!showContent)
        }
    }
    return (
        <div className="calendarHolder">
            {showContent && <HatchContent />}
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