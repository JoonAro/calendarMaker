import axios from "axios";
import { useRef, useState } from "react";
import '../styles/editorV2Styles.css';
import Sidebar from "../components/Sidebar";
import { CalendarClass, HatchClass } from "../../classes/classes";
import ImageCatalogue from "../components/ImageCatalogue";
import CalendarComponent from "../components/CalendarComponent";
import BackToTop from "../components/BackToTop";
import { addDataToFirestore } from '../auth/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setCalendar } from '../store/calendarSlice';

// Before friday: 
//  -Change the alert
//  -Optional Date Picker

const API_KEY = import.meta.env.VITE_UNSPLASH_API;
const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 30;

const EditorPageV2 = () => {
    const dispatch = useDispatch();
    const [images, setImages] = useState([]);
    const [bgObject, setBgObject] = useState({});
    const [calendarImage, setCalendarImage] = useState("https://images.unsplash.com/photo-1556888335-23631cd2801a?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    const [bool, setBool] = useState(false);
    const [bool2, setBool2] = useState(false);
    const [bool3, setBool3] = useState(false);
    const [bool4, setBool4] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [pageNr, setPageNr] = useState(1);
    const [hatchType, setHatchType] = useState('single');
    const [hatchSide, setHatchSide] = useState('left');
    const searchInput = useRef(null);
    const [calendar, setCalendar] = useState(null);
    const [guideH, setGuideH] = useState("Welcome to the calendar editor!");

    const [result, setResult] = useState([]);
    const [guideText, setGuideText] = useState("Start creating your calendar by searching for a theme.");

    const handleSearch = (event) => {
        event.preventDefault();
        fetchImages();
        setBool(true);
        setBool2(false);
        setBool3(false);
        setBool4(false);
        setGuideH("Choose a background image by clicking the image.");
        setGuideText("");
    }

    const handleSelection = (selection) => {
        searchInput.current.value = selection
    }

    const radioHandler = (e) => {
        const nameOfInput = e.target.name
        if (nameOfInput === 'hatchType') {
            setHatchType(e.target.value);
            if (bool4) {
                createCalendar(images, bgObject, e);
            }
        }
        if (nameOfInput === 'hatchSide') {
            setHatchSide(e.target.value);
            if (bool4) {
                createCalendar(images, bgObject, e);
            }
        }

    }

    const handleFetch = () => {
        const result = fetchImages();
        setBool(true);
        setBool2(false);
        setBool3(false);
        setBool4(false);
        setGuideH("Choose a background image by clicking the image.");
        setGuideText("");
    }

    const fetchImages = async () => {
        try {
            const { data } = await axios.get(`${API_URL}?query=${searchInput.current.value}&page=${pageNr}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
            setImages(data.results);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.log(error);
            setImages([]);
        }
    };

    const handleBgSelection = (hatchImg) => {
        let possibleBackground = hatchImg.urls.full;
        setCalendarImage(possibleBackground);
        setBgObject(hatchImg);
        setBool2(true);
        setGuideH("Are you happy with the background?");
        setGuideText("");
    }

    const handleUserReply = (userReply) => {
        if (userReply === "yes") {
            createCalendar(images, bgObject);
            setGuideH("Great!");
            setGuideText("Now you can start editing hatches. Have fun!");
            setBool4(true);
        } else if (userReply === "no") {
            setGuideH("Choose a background image by clicking the image.");
            setGuideText("");
            setBool2(false);
        } else {
            console.log("handleUserReply Error. Check your code!");
        }
    };

    const createCalendar = (result, bgImg, e) => {
        const calendarObj = createObject(result, bgImg, e);
        setCalendar(calendarObj);
        setTimeout(() => setBool3(true), 2500);
    }

    const createObject = (result, bgImg, e) => {
        let startDate = new Date(2024, 3, 10);
        let hatches = result.map((item, index) => {
            let date = new Date(startDate);
            date.setDate(startDate.getDate() + index);
            let hatchImg = item.urls.small;
            let status = false;
            let hatchNr = index + 1;
            let typeOfHatch = hatchType;
            let sideOfHatch = hatchSide;
            if (item.id === bgImg.id) {
                hatchNr = 0;
            }
            return new HatchClass(date, hatchNr, hatchImg, status, typeOfHatch, sideOfHatch);
        });
        let numbOfHatches = hatches.length;
        const calendar = new CalendarClass(startDate, startDate, bgImg.urls.full, hatches, numbOfHatches, false);
        return calendar;
    };


    console.log(`calendarSingle`, calendar);

    const saveCalendarFirestore = (calendar) => {
        return async (dispatch) => {
            const calendarData = JSON.parse(JSON.stringify(calendar));

            await addDataToFirestore("calendar", calendarData);

            dispatch({ type: "saveCalendarFirestore", payload: calendarData });
        };
    };



    return (
        <>
            <BackToTop />
            <div className="editorHolder">
                <div className="sideColumn">
                    <Sidebar
                        handleSearch={handleSearch}
                        searchInput={searchInput}
                        handleSelection={handleSelection}
                        hatchType={hatchType}
                        hatchSide={hatchSide}
                        radioHandler={radioHandler}
                    />
                </div>
                <div className="content">
                    {!bool2 && <ImageCatalogue bool={bool} images={images} handleBgSelection={handleBgSelection} guideH={guideH} guideText={guideText} calendarImage={calendarImage} />}
                    {bool2 && <CalendarComponent calendar={calendar} calendarImage={calendarImage} accessKey={true} bool3={bool3} bool4={bool4} handleUserReply={handleUserReply} guideH={guideH} guideText={guideText} />}
                </div>
            </div>
            <button onClick={() => dispatch(saveCalendarFirestore(calendar))}>
                Save
            </button>
        </>
    )
}
export default EditorPageV2;