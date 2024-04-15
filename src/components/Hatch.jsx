import { useState } from "react";
import '../styles/editorStyles.css';
const Hatch = ({ hatch, hatchSide }) => {
    const [clicked, setClicked] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const openHatch = () => {
        setClicked(!clicked);
        if (!clicked) {
            setShowImage(!showImage);
            return;
        }
        setTimeout(() => setShowImage(!showImage), 1000);
    }
    return (
        <div style={{
            backgroundImage: showImage ? `url("${hatch.hatchImg}")` : 'url("")'
        }} className={`calendarImage `}>
            <div onClick={openHatch} className={`hatch ${hatchSide} ${clicked ? 'openStyle' : 'closedStyle'}`}>
                <p className="hatchNumber">{hatch.hatchNr}</p>
            </div>
        </div>
    )
}
export default Hatch