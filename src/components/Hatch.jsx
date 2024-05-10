import { useState } from "react";
import '../styles/editorV2Styles.css';

const today = new Date();
const todayISO = today.toISOString();

const Hatch = ({ hatch, accessKey, hatchEditor }) => {
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
    // Add edit that shows only when accessKey is true
    // Edit will launch hatchImageCatalogue where you can make a new fetch and select new image for the hatch
    return (
        <>
            <div style={{
                backgroundImage: showImage ? `url("${hatch.hatchImg}")` : 'url("")'
            }} className={`calendarImage `}>
                {accessKey && <div className="editorHatch" onClick={() => hatchEditor(hatch)}>Edit</div>}
                <div onClick={() => openHatch(hatch, accessKey)} className={`hatch ${hatch.hatchSide} ${clicked ? 'openStyle' : 'closedStyle'}`}>
                    <p className="hatchNumber">{hatch.hatchNr}</p>
                </div>
            </div>
        </>
    )
}

export default Hatch