import { useState } from "react";
import '../styles/editorStyles.css';
const Hatch = ({ pic, handleClick, hatchSide, date }) => {
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
            backgroundImage: showImage ? `url("${pic.urls.small}")` : 'url("")'
        }} className={`calendarImage `} onClick={handleClick}>
            <div onClick={openHatch} className={`hatch ${hatchSide} ${clicked ? 'openStyle' : 'closedStyle'}`}>
            <p>{date}</p>
            </div>
        </div>
    )
}

export default Hatch