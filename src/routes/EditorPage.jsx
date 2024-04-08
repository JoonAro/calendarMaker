import axios from "axios";
import { useRef, useState } from "react";
import Hatch from "../components/Hatch";
import DoubleHatch from "../components/DoubleHatch";
import '../styles/editorStyles.css';
import Sidebar from "../components/Sidebar";

const API_KEY = import.meta.env.VITE_UNSPLASH_API;
const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 30;

const EditorPage = () => {
    const [images, setImages] = useState([]);
    const [calendarImage, setCalendarImage] = useState("https://images.unsplash.com/photo-1556888335-23631cd2801a?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    const [bool, setBool] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [radioValue, setRadioValue] = useState('hatch');
    const [hatchSide, setHatchSide] = useState('left');
    const searchInput = useRef(null);

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchInput.current.value);
        fetchImages();
    }
    const handleSelection = (selection) => {
        searchInput.current.value = selection
    }

    const handleClick = () => {
        setShowContent(!showContent)
    }

    //Date
    // const hatchEnable = () => {
    //     if (year > 2023) return true;
    //     if (index <= day) return true;
    //     //if (month === 11 && index <= day) return true; December
    //     return false;
    
    // }

    let datesArray = [];
    const daysToAdd = 1;
     const startDate = new Date();

startDate.setDate(1);

   const currentMonth = startDate.getMonth();
   const daysInMonth = new Date(startDate.getFullYear(), currentMonth + 1, 0).getDate();

   for (let i = 0; i < daysInMonth; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + daysToAdd * i);
    datesArray.push(date);
}

for (let i = datesArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [datesArray[i], datesArray[j]] = [datesArray[j], datesArray[i]];
}

    const fetchImages = async () => {
        try {

            const { data } = await axios.get(`${API_URL}?query=${searchInput.current.value}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
            console.log('result', data.results, 'length', data.results.length);
            const calendarBackground = data.results[data.results.length - 1].urls.full;
            setCalendarImage(calendarBackground);
            data.results.pop();
            setImages(data.results);
            setTotalPages(data.total_pages);
            setBool(true);
        }
        catch (error) {
            console.log(error)
        }
    };

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

                    <div className="gridHolder" style={{
                        backgroundImage: `url(${calendarImage})`,
                    }}>
                        {!bool &&
                            <div className="welcomeText">
                                <h1>Welcome to the calendar editor!</h1>
                                <p>Start Creating your calendar by searching a theme</p>
                            </div>
                        }
                        {images.map((pic, index )=> {
                            

                            const formattedDate = datesArray[index].toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

                            return radioValue === 'hatch' ? 
                            <Hatch key={`${pic.id}_${index}`} 
                            pic={pic} 
                            handleClick={handleClick} 
                            hatchSide={hatchSide} 
                            date={formattedDate}/> : 
                            <DoubleHatch key={`${pic.id}_${index}`} 
                            pic={pic} 
                            />
                        })}
                     
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditorPage
