import { useState } from "react";
import '../styles/editorV2Styles.css';

const today = new Date();
const todayISO = today.toISOString();

const DoubleHatch = ({ hatch, accessKey, hatchEditor }) => {
    const [clicked, setClicked] = useState(false);
    const [showImage, setShowImage] = useState(false);

    const openHatch = (hatch) => {
        const dateCheck = handleTime(hatch);
        if (dateCheck === true || accessKey) {
            setClicked(!clicked);
            if (!clicked) {
                setShowImage(!showImage);
                return;
            }
            setTimeout(() => setShowImage(!showImage), 1000);
        }
        else {
            alert("Naughty!");
        }
    }

    const handleTime = (hatch) => {
        console.log(hatch);
        const hatchDate = hatch.date;
        console.log("todayISO", todayISO, "hatchDate", hatchDate);
        if (todayISO < hatchDate) {
            console.log('Access denied')
            return false;
        }
        else {
            console.log('Access granted');
            return true;
        }
    }

    return (
        <div style={{
            backgroundImage: showImage ? `url("${hatch.hatchImg}")` : 'url("")'
        }} className={`calendarImage `}>
            {accessKey && <div className="editorHatch" >
                <div className="editorHatchType" onClick={() => hatchEditor(hatch, "hatchType")}>HatchType</div>
                <div className="editorHatchImg" onClick={() => hatchEditor(hatch, "hatchImage")}>HatchImage</div>
            </div>}
            <div onClick={() => openHatch(hatch)} className={`hatch left ${clicked ? 'openStyle' : 'closedStyle'}`}>
                <p className="hatchNumber">{hatch.hatchNr}</p>
            </div>
            <div onClick={() => openHatch(hatch)} className={`hatch right ${clicked ? 'openStyle' : 'closedStyle'}`}>
            </div>
        </div>
    )
}

export default DoubleHatch