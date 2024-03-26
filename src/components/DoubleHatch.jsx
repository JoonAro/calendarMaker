import { useState } from "react";

const DoubleHatch = ({ pic }) => {
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
        }} className={`calendarImage `}>
            <div onClick={openHatch} className={`hatch left ${clicked ? 'openStyle' : 'closedStyle'}`}>
            </div>
            <div onClick={openHatch} className={`hatch right ${clicked ? 'openStyle' : 'closedStyle'}`}>
            </div>
        </div>
    )
}

export default DoubleHatch