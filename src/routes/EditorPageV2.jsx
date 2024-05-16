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
import HatchImageCatalogue from "../components/HatchImageCatalogue";
import { set } from "date-fns";

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
    const [hatchImages, setHatchImages] = useState([]);
    const [bgObject, setBgObject] = useState({});
    const [calendarImage, setCalendarImage] = useState("https://images.unsplash.com/photo-1556888335-23631cd2801a?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    const [bool, setBool] = useState(false);
    const [bool2, setBool2] = useState(false);
    const [bool3, setBool3] = useState(false);
    const [bool4, setBool4] = useState(false);
    const [calendarCreated, setCalendarCreated] = useState(false);
    const [time, setTime] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [pageNr, setPageNr] = useState(1);
    const [hatchAmount, setHatchAmount] = useState(null);
    const [gridRows, setGridRows] = useState(["fiveColumns", "sixRows"]);
    const [grid, setGrid] = useState(["fiveColumns", "sixRows"]);
    const [hatchType, setHatchType] = useState('single');
    const [hatchSide, setHatchSide] = useState('left');
    const [hatchNumber, setHatchNumber] = useState('dateOfHatch');
    const [hatchEdit, setHatchEdit] = useState(false);
    const [editedHatch, setEditedHatch] = useState(null);
    const searchInput = useRef(null);
    const hatchSearchInput = useRef(null);
    const [hatchSearch, setHatchSearch] = useState(false);
    const [guideH, setGuideH] = useState("Welcome to the calendar editor!")
    const [guideText, setGuideText] = useState("Choose the start and end dates");
    const [hide, setHide] = useState("hide");
    const [sideColumnWidth, setSideColumnWidth] = useState("0px");
    const [gridColumnWidth, setGridColumnWidth] = useState("0px 1fr");
    const [sidebarMod, setSidebarMod] = useState("calc(100vw - 17px)");
    const [contentWidth, setContentWidth] = useState("calc(100vw - 17px)");

    const handleSearch = (event) => {
        event.preventDefault();
        if (searchInput.current.value === "") {
            setGuideText("Please write a theme in the search bar!");
            return
        };
        handleFetch();
    }
    const handleHatchImgSearch = (event) => {
        event.preventDefault();
        setHatchSearch(true);
        fetchHatchImages();
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
        setGuideH("Search for a theme for the calendar");
        setGuideText("Or choose one of our examples below");

    }

    const handleStartDate = (date) => {
        setStartDate(date);
    };

    const handleEndDate = (date) => {
        setEndDate(date);
    };

    const getHatchAmount = (startDate, endDate) => {
        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();
        const difference = end - start;
        const hatchTotal = Math.ceil(difference / (1000 * 60 * 60 * 24)) + 1;
        handleGridRows(hatchTotal);
        console.log(hatchTotal, "hatchTotal")
        setHatchAmount(hatchTotal);
    }

    const handleGridRows = (hatchTotal) => {
        const numberOfRows = hatchTotal / 5;
        console.log(hatchTotal, "hatchTotal")
        console.log(numberOfRows, "numberOfRows")
        if (hatchTotal < 10) {
            setGridRows(["threeColumns", "threeRows"]);
        }
        else if (hatchTotal >= 10 && hatchTotal < 13) {
            setGridRows(["threeColumns", "fourRows"]);
        }
        else if (hatchTotal >= 13 && hatchTotal < 17) {
            setGridRows(["fourColumns", "fourRows"]);
        }
        else if (hatchTotal >= 16 && hatchTotal < 21) {
            setGridRows(["fourColumns", "fiveRows"]);
        }
        else if (hatchTotal >= 21 && hatchTotal < 26) {
            setGridRows(["fiveColumns", "fiveRows"]);
        }
        else {
            setGridRows(["sixColumns", "fiveRows"]);
        }
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
        else if (nameOfInput === 'hatchSide') {
            setHatchSide(e.target.value);
            if (bool4) {
                createCalendar(images, bgObject, e);
            }
        }
        else if (nameOfInput === 'nrOfHatch') {
            if (bool4) {
                setHatchNumber(e.target.value);
                createCalendar(images, bgObject, e);
            }
        }
    }

    const handleFetch = () => {
        fetchImages();
        resetEditor("handleFetch");
        getHatchAmount(startDate, endDate);
    }

    const resetEditor = (origin) => {
        if (origin === "handleFetch" || origin === "Background") {
            setBool(true);
            setGuideH("Choose a background image by clicking the image.");
            setGuideText("");
        }
        else if (origin === "Hatches") {
            setBool2(true);
            setBool3(true);
            setBool4(true);
            setHatchEdit(false);
            return;
        }
        else {
            setBool(false);
        }
        setBool2(false);
        setBool3(false);
        setBool4(false);
        setHatchEdit(false);
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
            const { data } = await axios.get(`${API_URL}?query=${searchInput.current.value}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
            console.log('result', data.results, 'length', data.results.length, data, "data");
            const result = data.results;
            if (result.length === 0) {
                setGuideH("Nothing found with that theme.");
                setGuideText("Check for typos and try again.");
                setTimeout(() => resetEditor("Search"), 3000);
            }
            else {
                setImages(data.results);
                /* setTotalPages(data.total_pages);
                console.log(data.total_pages, "totalpages") */
                return result
            }
        }
        catch (error) {
            console.log(error)
        }
    };
    const fetchHatchImages = async () => {
        try {
            const { data } = await axios.get(`${API_URL}?query=${hatchSearchInput.current.value}&page=${pageNr}&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
            console.log('result', data.results, 'length', data.results.length);
            const result = data.results;
            if (result.length === 0) {
                setGuideH("Nothing found with that theme.");
                setGuideText("Check for typos and try again.");
            }
            else {
                setHatchImages(data.results);
                setTotalPages(data.total_pages);
                console.log(data.total_pages, "totalpages")
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
        dispatch(setCalendar(calendarObj));
        setTimeout(() => setBool3(true), 2500);
        setCalendarCreated(true);
    }

    const createDateString = (date) => {
        const day = new Date(date).getDate()
        const month = new Date(date).getMonth()
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const dateString = months[parseInt(month)] + " " + day;
        return dateString;
    }
    const numberOrDateHandler = (e, dateString, hatchNr) => {
        let result;
        if (e.target.value === "dateOfHatch") {
            result = dateString;
        }
        else {
            result = hatchNr;
        }
        return result;
    }

    const createObject = (images, bgImg, e) => {
        let startRedux = startDate.toISOString();
        let hatches = [];
        let numbOfHatches = hatchAmount;
        let imagesLength = images.length;
        let date;
        let dateRedux;
        let hatchModifier = 1;
        let nrOrDate;

        for (let i = 0; i < numbOfHatches; i++) {
            date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            dateRedux = date.toISOString();
            let hatchImg = images[i].urls.small;
            let status = false;
            let hatch;
            let dateString = createDateString(date);
            let hatchNr = i + hatchModifier;
            let typeOfHatch;
            let sideOfHatch;
            if (!e) {
                typeOfHatch = hatchType;
                sideOfHatch = hatchSide;
                nrOrDate = dateString;
            }
            // Create if statement if i is larger than imagesLength then take a placeholder image to the array.
            else {
                if (e.target.name === "hatchType") {
                    typeOfHatch = e.target.value;
                    sideOfHatch = hatchSide;
                    if (hatchNumber === "dateOfHatch") {
                        nrOrDate = dateString;
                    }
                    else {
                        nrOrDate = hatchNr;
                    }
                }
                else if (e.target.name === "hatchSide") {
                    sideOfHatch = e.target.value;
                    typeOfHatch = hatchType;
                    if (hatchNumber === "dateOfHatch") {
                        nrOrDate = dateString;
                    }
                    else {
                        nrOrDate = hatchNr;
                    }
                }
                else if (e.target.name === "nrOfHatch") {
                    nrOrDate = numberOrDateHandler(e, dateString, hatchNr);
                    typeOfHatch = hatchType;
                    sideOfHatch = hatchSide;
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
                hatchSide: sideOfHatch,
                dateString: dateString,
                nrOrDate: nrOrDate
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
            if (calendarCreated) {
                resetEditor(identifier);
            }
            else { console.log("Create calendar first!") }
        }
        else {
            console.log("goBackInEditor Error. Check your code!")
        }
    }

    const hatchEditor = (hatch, editType) => {
        let updatedHatch;
        const { hatches } = calendar;
        const { date, hatchNr, hatchImg, status, hatchType, hatchSide } = hatch;
        if (editType === "hatchType") {
            updatedHatch = updateHatchType(hatch);
        }
        else if (editType === "hatchImage") {
            setGuideH("Choose a new image for the hatch.");
            setGuideText("");
            setEditedHatch(hatch);
            setHatchEdit(true);
            setBool2(false);
            return;
        }
        console.log("updatedHatch", updatedHatch);
        const updatedHatches = hatches.map(h => h.hatchNr === updatedHatch.hatchNr ? updatedHatch : h);
        const calendarUpdate = { ...calendar, hatches: updatedHatches };
        dispatch(setCalendar(calendarUpdate));
    }

    const handleHatchImgSelect = (hatchImg) => {
        let updatedHatch = { ...editedHatch, hatchImg: hatchImg.urls.small };
        const { hatches } = calendar;
        const updatedHatches = hatches.map(h => h.hatchNr === updatedHatch.hatchNr ? updatedHatch : h);
        const calendarUpdate = { ...calendar, hatches: updatedHatches };
        dispatch(setCalendar(calendarUpdate));
        setHatchEdit(false);
        setBool2(true);
    }

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

    const handleLeave = () => {
        console.log("click")
        setTimeout(() => setHide("hide"), 1000);
        setSideColumnWidth("0px");
        setGridColumnWidth("0px 1fr");
        setSidebarMod("calc(100vw - 17px)");
        /* document.documentElement.style.setProperty('--hider', "0"); */
    }
    const handleClick = () => {
        console.log("click")
        setHide("show");
        setSideColumnWidth("220px");
        setGridColumnWidth("220px 1fr");
        setSidebarMod("calc(100vw - 235px)");
        /* document.documentElement.style.setProperty('--hider', "1"); */
    }

    return (
        <>
            <BackToTop />
            <div className="editorHolder" style={{ gridTemplateColumns: gridColumnWidth }}>
                <div className="sideColumn" style={{ width: sideColumnWidth }} >
                    <ShowSidebarButton handleClick={handleClick} />
                    <Sidebar
                        handleSearch={handleSearch}
                        searchInput={searchInput}
                        handleSelection={handleSelection}
                        hatchType={hatchType}
                        hatchSide={hatchSide}
                        hatchNumber={hatchNumber}
                        radioHandler={radioHandler}
                        goBackInEditor={goBackInEditor}
                        handleLeave={handleLeave}
                        hide={hide}
                        handleClick={handleClick}

                    />

                </div>
                <div className="content" style={{ width: sidebarMod }}>
                    {!bool2 && !hatchEdit && <ImageCatalogue bool={bool} images={images} searchInput={searchInput} handleSearch={handleSearch} handleBgSelection={handleBgSelection} handleStartDate={handleStartDate} handleEndDate={handleEndDate} guideH={guideH} guideText={guideText} calendarImage={calendarImage} startDate={startDate} endDate={endDate} time={time} handleDatePick={handleDatePick} hatchEdit={hatchEdit} handleHatchImgSelect={handleHatchImgSelect} handleSelection={handleSelection} sidebarMod={sidebarMod} />
                    }
                    {bool2 && !hatchEdit && <CalendarComponent calendar={calendar} calendarImage={calendarImage} accessHatch={true} bool3={bool3} bool4={bool4} handleUserReply={handleUserReply} guideH={guideH} guideText={guideText} gridRows={gridRows} hatchEditor={hatchEditor} hatchAmount={hatchAmount} sidebarMod={sidebarMod} />}
                    {hatchEdit && <HatchImageCatalogue images={images} hatchImages={hatchImages} hatchSearchInput={hatchSearchInput} handleHatchImgSelect={handleHatchImgSelect} handleHatchImgSearch={handleHatchImgSearch} hatchSearch={hatchSearch} sidebarMod={sidebarMod} />}
                </div>
            </div>
        </>
    )
}

export default EditorPageV2