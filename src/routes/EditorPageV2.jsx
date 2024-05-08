import axios from "axios";
import { useRef, useState } from "react";
import '../styles/editorV2Styles.css';
import Sidebar from "../components/Sidebar";
import ImageCatalogue from "../components/ImageCatalogue";
import CalendarComponent from "../components/CalendarComponent";
import BackToTop from "../components/BackToTop";
import { useDispatch, useSelector } from 'react-redux';
import { setCalendar } from "../store/calendarSlice";
import ShowSidebarButton from "../components/ShowSidebarButton";

const API_KEY = import.meta.env.VITE_UNSPLASH_API;
const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 30;
const today = new Date();
const oneWeekFromNow = new Date(new Date(today).getTime() + (86400000 * 6));
const EditorPageV2 = () => {
    const dispatch = useDispatch();
    const calendar = useSelector(state => state.calendar.calendar);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(oneWeekFromNow);
    const [images, setImages] = useState([]);
    const [bgObject, setBgObject] = useState({});
    const [calendarImage, setCalendarImage] = useState("https://images.unsplash.com/photo-1556888335-23631cd2801a?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    const [bool, setBool] = useState(false);
    const [bool2, setBool2] = useState(false);
    const [bool3, setBool3] = useState(false);
    const [bool4, setBool4] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [pageNr, setPageNr] = useState(1);
    const [hatchAmount, setHatchAmount] = useState(null);
    const [gridRows, setGridRows] = useState(true);
    const [hatchType, setHatchType] = useState('single');
    const [hatchSide, setHatchSide] = useState('left');
    const searchInput = useRef(null);
    const [guideH, setGuideH] = useState("Welcome to the calendar editor!")
    const [guideText, setGuideText] = useState("Step 1: Start by searching for a theme");

    const handleSearch = (event) => {
        event.preventDefault();
        const calendarEnd = new Date(endDate).getTime() - (86400000 * 6)
        const calendarStart = new Date(startDate).getTime();
        if (searchInput.current.value === "") {
            setGuideText("Please write a theme in the search bar!");
            return
        };
        if (calendarEnd < calendarStart) {
            setGuideText("Calendar has to be atleast 7 days long.");
            return
        }
        handleFetch();
        if (bool2 === true) setBool2(!bool2);
    }

    const handleStartDate = (date) => {
        setStartDate(date);
    };

    const handleEndDate = (date) => {
        setEndDate(date);
    };

    const getHatchAmount = (startDate, endDate) => {
        /* console.log(startDate, "startDate");
        console.log(endDate, "endDate"); */
        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();
        const difference = end - start;
        const hatchTotal = Math.ceil(difference / (1000 * 60 * 60 * 24)) + 1;
        handleGridRows(hatchTotal);
        console.log(hatchTotal, "hatchTotal")
        setHatchAmount(hatchTotal);
    }

    const handleGridRows = (hatchTotal) => {
        if (hatchTotal < 11) {
            setGridRows("twoRows");
            //TODO: twoRows works with 7 hatches for now. Make it work with 10 hatches.
        }
        else if (hatchTotal >= 11 && hatchTotal < 16) {
            setGridRows("threeRows");
        }
        else if (hatchTotal >= 16 && hatchTotal < 21) {
            setGridRows("fourRows");
        }
        else if (hatchTotal >= 21 && hatchTotal < 26) {
            setGridRows("fiveRows");
        }
        else setGridRows("sixRows");
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
        setGuideH("Choose a background image by clicking the image.");
        setGuideText("");
        getHatchAmount(startDate, endDate);
    }
    const fetchImages = async () => {
        try {
            const { data } = await axios.get(`${API_URL}?query=${searchInput.current.value}&page=${pageNr}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
            console.log('result', data.results, 'length', data.results.length);
            //TODO: Change the text component on screen if there are zero results: Nothing found with that theme. Are you sure it's written like that? Try again etc.
            const result = data.results;
            setImages(data.results);
            setTotalPages(data.total_pages);
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
        setGuideH("Are you happy with the background?");
        setGuideText("");
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
        }
        else {
            console.log("handleUserReply Error. Check your code!");
        }
    }
    const createCalendar = (result, bgImg, e) => {
        const calendarObj = createObject(result, bgImg, e);
        //console.log(calendarObj);
        dispatch(setCalendar(calendarObj));
        setTimeout(() => setBool3(true), 2500);
    }

    // Idea for createObject. Add array of numbers etc. When user edits te calendar and chooses a hatch give him option to choose double hatch. If he chooses it then handleClick to add the hatch number to array and in createcalendar if number is this then hatchtype is that.

    //unsplash api has blur hash where you can first have a blurred image loaded on the page before the real thing loads.
    const createObject = (result, bgImg, e) => {
        let startRedux = startDate.toISOString();
        let hatches = [];
        let numbOfHatches = hatchAmount;
        let date;
        let dateRedux;
        let hatchModifier = 1;

        for (let i = 0; i < numbOfHatches; i++) {
            date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            dateRedux = date.toISOString();
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
                console.log('found match with bg id & took the first unused image instead');
                hatchImg = result[numbOfHatches].urls.small;
            }
            hatch = {
                date: dateRedux,
                hatchNr: hatchNr,
                hatchImg: hatchImg,
                status: status,
                hatchType: typeOfHatch,
                hatchSide: sideOfHatch
            };
            hatches.push(hatch);
        }
        const calendar = {
            start: startRedux,
            end: endDate.toISOString(),
            bgImage: bgImg.urls.full,
            hatches: hatches,
            numbOfHatches: numbOfHatches,
            privateCalendar: false
        };
        return calendar;
    }

    const hatchEditor = (hatch) => {
        console.log(hatch);
    }
    // Make a new type of hatch for editorPage that will have the edit on hover when clicked
    // Pass 
    // Add title to hatch and description
    // TODO: Create a function that saves the final calendar when user is finished.
    return (
        <>
            <BackToTop />
            <div className="editorHolder">
                <div className="sideColumn">
                    <ShowSidebarButton />
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
                    {!bool2 && <ImageCatalogue bool={bool} images={images} searchInput={searchInput} handleSearch={handleSearch} handleBgSelection={handleBgSelection} handleStartDate={handleStartDate} handleEndDate={handleEndDate} guideH={guideH} guideText={guideText} calendarImage={calendarImage} startDate={startDate} endDate={endDate} />
                    }
                    {bool2 && <CalendarComponent calendar={calendar} calendarImage={calendarImage} accessKey={true} bool3={bool3} bool4={bool4} handleUserReply={handleUserReply} guideH={guideH} guideText={guideText} gridRows={gridRows} hatchEditor={hatchEditor} />}
                </div>
            </div>
        </>
    )
}

export default EditorPageV2