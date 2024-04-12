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

const EditorPage = () => {
    const [images, setImages] = useState([]);
    const [bgImages, setBgImages] = useState([]);
    const [calendarImage, setCalendarImage] = useState("https://images.unsplash.com/photo-1556888335-23631cd2801a?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    const [bool, setBool] = useState(false);
    const [bool2, setBool2] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [pageNr, setPageNr] = useState(1);
    const [radioValue, setRadioValue] = useState('hatch');
    const [hatchSide, setHatchSide] = useState('left');
    const searchInput = useRef(null);
    const [calendar, setCalendar] = useState(null);
    const [guideH, setGuideH] = useState("Welcome to the calendar editor!")
    const [guideText, setGuideText] = useState("Start creating your calendar by searching for a theme.");
    const handleSearch = (event) => {
        event.preventDefault();
        handleFetch();
        if (bool2 === true) setBool2(!bool2);
    }
    const handleSelection = (selection) => {
        searchInput.current.value = selection
    }

    const handleClick = () => {
        setShowContent(!showContent)
    }
    const handleFetch = () => {
        const result = fetchImages();
        setBool(true);
        setGuideH("Choose a background image by clicking the image.");
        setGuideText("loremipsum");
    }
    const fetchImages = async () => {
        try {
            const { data } = await axios.get(`${API_URL}?query=${searchInput.current.value}&page=${pageNr}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
            console.log('result', data.results, 'length', data.results.length);
            const result = data.results;
            setImages(data.results);
            setTotalPages(data.total_pages);
            //setCatalogue(result);
            return result
        }
        catch (error) {
            console.log(error)
        }
    };

    const handleBgSelection = (hatchImg) => {
        setCalendarImage(hatchImg.urls.full)
        // create calendar and pass to it also the hatchImg.id to get rid of the backgroundImg from the hatches
        createCalendar(images, hatchImg.id);
    }
    const createCalendar = (result, bgImgId) => {
        const calendarObj = createObject(result, bgImgId);
        setCalendar(calendarObj);
        setTimeout(() => setBool2(true), 1000);
        setGuideH("Are you happy with the background?");
        setGuideText("Click no to find a new background image.")
        console.log(calendar);
    }

    // Idea for createObject. Add array of numbers etc. When user edits te calendar and chooses a hatch give him option to choose double hatch. If he chooses it then handleClick to add the hatch number to array and in createcalendar if number is this then hatchtype is that.
    const createObject = (result, bgImgId) => {
        let startDate = new Date(2024, 11, 1);
        let hatches = [];
        let numbOfHatches = 0;
        let date;
        let hatchModifier = 1;

        for (let i = 0; i < result.length; i++) {
            date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            let hatchImg = result[i].urls.small;
            let status = false;
            let hatch;
            let hatchNr = i + hatchModifier;
            if (result[i].id === bgImgId) {
                console.log('found match with bg id & stopped creating the hatch');
                hatchModifier--;
            }
            else {
                hatch = new HatchClass(date, hatchNr, hatchImg, status);
                console.log("hatchNr", hatchNr)
                hatches.push(hatch);
                numbOfHatches++;
            }
        }
        let calendar = new CalendarClass(startDate, date, calendarImage, hatches, numbOfHatches, false);
        return calendar;
    }

    return (
        <>
            <div className="EditorHolder">
                <Sidebar
                    handleSearch={handleSearch}
                    searchInput={searchInput}
                    handleSelection={handleSelection}
                    radioValue={radioValue}
                    setRadioValue={setRadioValue}
                    hatchSide={hatchSide}
                    setHatchSide={setHatchSide} />
                <div className="content">
                    <div className="spaceHolder"></div>
                    <div className="gridHolder" style={{
                        backgroundImage: `url(${calendarImage})`,
                    }}>
                        {!bool2 && <ImageCatalogue bool={bool} images={images} handleBgSelection={handleBgSelection} guideH={guideH} guideText={guideText} />
                        }
                        {bool2 && <TextComponent guideH={guideH} guideText={guideText} />}
                        {bool2 && calendar.hatches.map(hatch => {
                            let hatchKey = hatch.date.getDate();
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

export default EditorPage