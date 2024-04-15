import fakeCalendar from '../../fakeCalendar.json';
import axios from "axios";
import { useRef, useState } from "react";
import Hatch from "../components/Hatch";
import DoubleHatch from "../components/DoubleHatch";
import '../styles/editorStyles.css';
import Sidebar from "../components/Sidebar";
import { CalendarClass, HatchClass } from "../../classes/classes";
import ImageCatalogue from "../components/ImageCatalogue";
import TextComponent from "../components/TextComponent";

const API_KEY = import.meta.env.VITE_UNSPLASH_API;
const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 30;

// Todo: Make sure you check the date of the hatch before user is able to open the hatch
const Calendar = () => {
    const [images, setImages] = useState([]);
    const [bgImages, setBgImages] = useState([]);
    const [calendarImage, setCalendarImage] = useState("https://images.unsplash.com/photo-1556888335-23631cd2801a?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    const [bool, setBool] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [pageNr, setPageNr] = useState(1);
    const [radioValue, setRadioValue] = useState('hatch');
    const [hatchSide, setHatchSide] = useState('left');
    const searchInput = useRef(null);
    const [calendar, setCalendar] = useState(fakeCalendar);

    const handleClick = () => {
        setShowContent(!showContent)
    }

    const handleBgSelection = (hatchImg) => {
        if (!bool) {
            setCalendarImage(hatchImg);
            setBool(true);
        }
    }

    // Idea for createObject. Add array of numbers etc. When user edits te calendar and chooses a hatch give him option to choose double hatch. If he chooses it then handleClick to add the hatch number to array and in createcalendar if number is this then hatchtype is that.
    handleBgSelection(calendar.bgImage)
    return (
        <>
            <div className="EditorHolder">
                <div className="calendarContent">
                    <div className="spaceHolder"></div>
                    <div className="calendarGridHolder" style={{
                        backgroundImage: `url(${calendarImage})`,
                    }}>
                        {console.log(calendar)}
                        {calendar.hatches.map(hatch => {
                            let hatchKey = hatch.hatchNr;
                            let hatchSide = hatch.hatchSide;
                            let hatchType = hatch.hatchType;
                            return hatchType === 'single' ? <Hatch key={hatchKey} hatch={hatch} handleClick={handleClick} hatchSide={hatchSide} /> : <DoubleHatch key={hatchKey} hatch={hatch} />
                        })}
                    </div>
                    <div className="spaceHolder"></div>
                </div>
            </div>
        </>
    )
}

export default Calendar