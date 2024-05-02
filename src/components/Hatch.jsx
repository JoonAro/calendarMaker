import { useState } from "react";
import '../styles/editorV2Styles.css';

const today = new Date();
const todayISO = today.toISOString();

const Hatch = ({ hatch, accessKey }) => {
    const [clicked, setClicked] = useState(false);
    const [showImage, setShowImage] = useState(false);

    const openHatch = (hatch, accessKey) => {
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
        // console.log(hatch);
        const hatchDate = hatch.date;
        // console.log("todayISO", todayISO, "hatchDate", hatchDate);
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
            <div onClick={() => openHatch(hatch, accessKey)} className={`hatch ${hatch.hatchSide} ${clicked ? 'openStyle' : 'closedStyle'}`}>
                <p className="hatchNumber">{hatch.hatchNr}</p>
            </div>
        </div>
    )
}

export default Hatch