import axios from "axios";
import { useRef, useState } from "react";
import Hatch from "../components/Hatch";
import DoubleHatch from "../components/DoubleHatch";
import '../styles/editorStyles.css';
import Sidebar from "../components/Sidebar";
import { CalendarClass, HatchClass } from "../../classes/classes";

const API_KEY = import.meta.env.VITE_UNSPLASH_API;
const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 30;

const EditorPage = () => {
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
    const [calendar, setCalendar] = useState(null);
    // Clean up unnecessary usestates above
    const handleSearch = (event) => {
        event.preventDefault();
        // console.log(searchInput.current.value);
        handleFetch();
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
        //create next phaze
        setCalendarImage(hatchImg.urls.full)
        // create calendar and pass to it also the hatchImg.id to get rid of the backgroundImg from the hatches
        createCalendar(images, hatchImg.id);
    }
    // Idea! Let the user lock images the user likes and throw to bin the ones he doesn't like and then load new 30 image set and let the user flip through those and previously rejected pictures inside the hatches.
    const createCalendar = (result, bgImgId) => {
        const calendarObj = createObject(result, bgImgId);
        setCalendar(calendarObj);
        setTimeout(() => setBool(true), 1000);
        console.log(calendar);
    }
    const createObject = (result, bgImgId) => {
        let startDate = new Date(2024, 11, 1);
        let hatches = [];
        let numbOfHatches = 0;
        let date;
        for (let i = 0; i < result.length; i++) {
            date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            let hatchImg = result[i].urls.small;
            let status = false;
            let hatch;
            let hatchNr = i + 1;
            /*             if (i === 5) {
                            hatch = new HatchClass(date, hatchNr, hatchImg, status, 'double', 'left');
                        }
                        else if (i === 3 || i === 7 || i === 11 || i === 15) {
                            hatch = new HatchClass(date, hatchNr, hatchImg, status, 'single', 'right');
                        }
                        else {
                            hatch = new HatchClass(date, hatchNr, hatchImg, status);
                        } */
            if (result[i].id === bgImgId) {
                console.log('found match with bg id & stopped creating the hatch');
                i--;
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
                        {!bool &&
                            <div className="welcomeText flexColumnCentered">
                                <h1>Welcome to the calendar editor!</h1>
                                <div className="textHolder flexColumnCentered">
                                    <p>Start creating your calendar by searching for a theme.</p>
                                </div>
                            </div>
                        }
                        {bool && images.map(hatchImg => {
                            return <div className="calendarImage" key={hatchImg.id} onClick={() => handleBgSelection(hatchImg)} style={{
                                backgroundImage: `url(${hatchImg.urls.small})`
                            }}></div>

                        })}
                    </div>
                    <div className="spaceHolder"></div>
                </div>
            </div>
        </>
    )
}

export default EditorPage