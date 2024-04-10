import { useState } from "react";
import '../styles/editorStyles.css';
const DoubleHatch = ({ hatch }) => {
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
            <div onClick={openHatch} className={`hatch left ${clicked ? 'openStyle' : 'closedStyle'}`}>
                <p className="hatchNumber">{hatch.hatchNr}</p>
            </div>
            <div onClick={openHatch} className={`hatch right ${clicked ? 'openStyle' : 'closedStyle'}`}>
            </div>
        </div>
    )
}

export default DoubleHatch