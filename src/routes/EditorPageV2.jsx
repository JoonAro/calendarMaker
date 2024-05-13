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
    const [time, setTime] = useState(false);
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
        if (searchInput.current.value === "") {
            setGuideText("Please write a theme in the search bar!");
            return
        };
        handleFetch();
    }

    const handleDatePick = (event) => {
        console.log("handleDatePick")
        event.preventDefault();
        const calendarEnd = new Date(endDate).getTime() - (86400000 * 6)
        const calendarStart = new Date(startDate).getTime();
        if (calendarEnd < calendarStart) {
            setGuideText("Calendar has to be atleast 7 days long.");
            return
        }
        setTime(true);

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
        resetEditor("handleFetch");
        getHatchAmount(startDate, endDate);
    }

    const resetEditor = (origin) => {
        // background can be clicked before the search is done.
        if (origin === "handleFetch" || origin === "Background") {
            setBool(true);
            setGuideH("Choose a background image by clicking the image.");
            setGuideText("");
        }
        else if (origin === "Hatches") {
            setBool2(true);
            setBool3(true);
            setBool4(true);
            return;
        }
        else {
            setBool(false);
        }
        setBool2(false);
        setBool3(false);
        setBool4(false);
        if (origin === "Search") {
            setTime(true);
            setGuideH("Welcome to the calendar editor!");
        }
        else if (origin === "Dates") {
            setTime(false);
            setGuideH("Welcome to the calendar editor!");
        }
        else { console.log("resetEditor from background or handleFetch") }

    }
    const fetchImages = async () => {
        try {
            const { data } = await axios.get(`${API_URL}?query=${searchInput.current.value}&page=${pageNr}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
            console.log('result', data.results, 'length', data.results.length);
            const result = data.results;
            if (result.length === 0) {
                setGuideH("Nothing found with that theme.");
                setGuideText("Check for typos and try again.");
                setTimeout(() => resetEditor("Search"), 3000);
            }
            else {

                setImages(data.results);
                setTotalPages(data.total_pages);
                return result
            }
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
    const createCalendar = (images, bgImg, e) => {
        const calendarObj = createObject(images, bgImg, e);
        //console.log(calendarObj);
        dispatch(setCalendar(calendarObj));
        setTimeout(() => setBool3(true), 2500);
    }

    // Idea for createObject. Add array of numbers etc. When user edits te calendar and chooses a hatch give him option to choose double hatch. If he chooses it then handleClick to add the hatch number to array and in createcalendar if number is this then hatchtype is that.

    //unsplash api has blur hash where you can first have a blurred image loaded on the page before the real thing loads.
    const createObject = (images, bgImg, e) => {
        let startRedux = startDate.toISOString();
        let hatches = [];
        let numbOfHatches = hatchAmount;
        let imagesLength = images.length;
        let date;
        let dateRedux;
        let hatchModifier = 1;

        for (let i = 0; i < numbOfHatches; i++) {
            date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            dateRedux = date.toISOString();
            let hatchImg = images[i].urls.small;
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
            if (images[i].id === bgImg.id) {
                console.log('found match with bg id & took the first unused image instead');
                hatchImg = images[imagesLength - 1].urls.small;
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

    const goBackInEditor = (identifier) => {
        /* if (bool === false) return; */
        if (identifier === "Background") {
            resetEditor(identifier);
        }
        else if (identifier === "Search") {
            resetEditor(identifier);
        }
        else if (identifier === "Dates") {
            resetEditor(identifier);
        }
        else if (identifier === "Hatches") {
            console.log("Hatches clicked");
            resetEditor(identifier);
        }
        else {
            console.log("goBackInEditor Error. Check your code!")
        }
    }

    const hatchEditor = (hatch, editType) => {
        let updatedHatch;
        const { hatches } = calendar;
        //console.log("hatches", hatches)
        const { date, hatchNr, hatchImg, status, hatchType, hatchSide } = hatch;
        //console.log("hatchNr", hatchNr, "hatchImg", hatchImg, "status", status, "hatchType", hatchType, "hatchSide", hatchSide);
        if (editType === "hatchType") {
            updatedHatch = updateHatchType(hatch);
        }
        else if (editType === "hatchSide") {
            updatedHatch = updateHatchSide(hatch);
        }
        console.log("updatedHatch", updatedHatch);
        const updatedHatches = hatches.map(h => h.hatchNr === updatedHatch.hatchNr ? updatedHatch : h);
        const calendarUpdate = { ...calendar, hatches: updatedHatches };
        dispatch(setCalendar(calendarUpdate));

    }
    //TODO: Make a new component that will be a hatch editor. It will have a hatch image, hatch number, hatch type, hatch side and a save button. When user clicks save button it will save the new hatch to the calendar. There you can click the image and it will open the image catalogue. And it will change the image right there.

    const updateHatchType = (hatch) => {
        let updatedHatch;
        let hatchType = hatch.hatchType;
        if (hatchType === 'single') {
            updatedHatch = { ...hatch, hatchType: 'double' };
        }
        else {
            updatedHatch = { ...hatch, hatchType: 'single' };
        }
        return updatedHatch;
    }
    const updateHatchSide = (hatch) => {
        let updatedHatch;
        let hatchSide = hatch.hatchSide;
        if (hatchSide === 'left') {
            updatedHatch = { ...hatch, hatchSide: 'right' };
        }
        else {
            updatedHatch = { ...hatch, hatchSide: 'left' }
        };
        return updatedHatch;
    }

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
                        goBackInEditor={goBackInEditor}
                    />
                </div>
                <div className="content">
                    {!bool2 && <ImageCatalogue bool={bool} images={images} searchInput={searchInput} handleSearch={handleSearch} handleBgSelection={handleBgSelection} handleStartDate={handleStartDate} handleEndDate={handleEndDate} guideH={guideH} guideText={guideText} calendarImage={calendarImage} startDate={startDate} endDate={endDate} time={time} handleDatePick={handleDatePick} />
                    }
                    {bool2 && <CalendarComponent calendar={calendar} calendarImage={calendarImage} accessKey={true} bool3={bool3} bool4={bool4} handleUserReply={handleUserReply} guideH={guideH} guideText={guideText} gridRows={gridRows} hatchEditor={hatchEditor} />}
                </div>
            </div>
        </>
    )
}

export default EditorPageV2