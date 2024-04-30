import axios from "axios";
import { useRef, useState } from "react";
import '../styles/editorV2Styles.css';
import Sidebar from "../components/Sidebar";
import { CalendarClass, HatchClass } from "../../classes/classes";
import ImageCatalogue from "../components/ImageCatalogue";
import CalendarComponent from "../components/CalendarComponent";
import BackToTop from "../components/BackToTop";
import { useDispatch, useSelector } from 'react-redux';
import { setCalendar } from "../store/calendarSlice";

const API_KEY = import.meta.env.VITE_UNSPLASH_API;
const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 30;

// Before friday: 
//  -Change the alert
//      -The one in countries will do for now
//  -Date Picker
const EditorPageV2 = () => {
    const dispatch = useDispatch();
    const calendar = useSelector(state => state.calendar.calendar);
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

    const radioHandler = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
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
        console.log(bool, "bool");
        setGuideH("Choose a background image by clicking the image.");
        setGuideText("");
    }
    const fetchImages = async () => {
        try {
            const { data } = await axios.get(`${API_URL}?query=${searchInput.current.value}&page=${pageNr}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
            console.log('result', data.results, 'length', data.results.length);
            //TODO: Change the text component on screen if there are zero results: Nothing found with that theme. Are you sure it's written like that? Try again etc.
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
        let possibleBackground = hatchImg.urls.full;
        setCalendarImage(possibleBackground);
        setBgObject(hatchImg);
        setBool2(true);
        console.log("bool2", bool2)
        setGuideH("Are you happy with the background?");
        setGuideText("");
        // create calendar and pass to it also the hatchImg.id to get rid of the backgroundImg from the hatches
    }
    const handleUserReply = (userReply) => {
        console.log(userReply)
        if (userReply === "yes") {
            createCalendar(images, bgObject);
            setGuideH("Great!");
            setGuideText("Now you can start editing hatches. Have fun!")
            setBool4(true);
        }
        else if (userReply === "no") {
            setGuideH("Choose a background image by clicking the image.");
            setGuideText("");
            setBool2(false);
            // Todo: FIX guidetext!
        }
        else {
            console.log("handleUserReply Error. Check your code!");
        }
    }
    const createCalendar = (result, bgImg, e) => {
        const calendarObj = createObject(result, bgImg, e);
        // console.log(calendarObj);
        dispatch(setCalendar(calendarObj));
        setTimeout(() => setBool3(true), 2500);
    }

    // Idea for createObject. Add array of numbers etc. When user edits te calendar and chooses a hatch give him option to choose double hatch. If he chooses it then handleClick to add the hatch number to array and in createcalendar if number is this then hatchtype is that.

    //unsplash api has blur hash where you can first have a blurred image loaded on the page before the real thing loads.
    const createObject = (result, bgImg, e) => {
        let startDate = new Date(2024, 3, 10);
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
            let typeOfHatch;
            let sideOfHatch;
            if (!e) {
                typeOfHatch = hatchType;
                sideOfHatch = hatchSide;
            }
            else {
                console.log(e.target.name)
                if (e.target.name === "hatchType") {
                    typeOfHatch = e.target.value;
                    sideOfHatch = hatchSide;
                }
                else if (e.target.name === "hatchSide") {
                    sideOfHatch = e.target.value;
                    typeOfHatch = hatchType;
                }
            }
            if (result[i].id === bgImg.id) {
                //  console.log('found match with bg id & stopped creating the hatch');
                hatchModifier--;
            }
            else {
                hatch = new HatchClass(date, hatchNr, hatchImg, status, typeOfHatch, sideOfHatch);
                // console.log("hatchNr", hatchNr)
                hatches.push(hatch);
                numbOfHatches++;
            }
        }
        const calendar = new CalendarClass(startDate, date, bgImg.urls.full, hatches, numbOfHatches, false);
        return calendar;
    }

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
                    {!bool2 && <ImageCatalogue bool={bool} images={images} handleBgSelection={handleBgSelection} guideH={guideH} guideText={guideText} calendarImage={calendarImage} />
                    }
                    {bool2 && <CalendarComponent calendar={calendar} calendarImage={calendarImage} accessKey={true} bool3={bool3} bool4={bool4} handleUserReply={handleUserReply} guideH={guideH} guideText={guideText} />}
                </div>
            </div>
        </>
    )
}

export default EditorPageV2