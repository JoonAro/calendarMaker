import axios from "axios";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import Hatch from "../components/Hatch";
import DoubleHatch from "../components/DoubleHatch";
import '../styles/editorStyles.css';

const API_KEY = import.meta.env.VITE_UNSPLASH_API;
const API_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 25;

const EditorPage = () => {
    const [images, setImages] = useState([]);
    const [calendarImage, setCalendarImage] = useState("https://images.unsplash.com/photo-1605197161470-d0261cac6767?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hbGwlMjBkb2d8ZW58MHx8MHx8fDA%3D");
    const [bool, setBool] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [hatchSide, setHatchSide] = useState('right');
    const searchInput = useRef(null);
    let alternate = false;
    let counter = 0;

    //Setup options to change where the hatch opens atleast be able to change it from left to right
    //we need a usestate with left or right
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

    const fetchImages = async () => {
        try {

            const { data } = await axios.get(`${API_URL}?query=${searchInput.current.value}&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${API_KEY}`);
            console.log('result', data.results, 'length', data.results.length);
            const calendarBackground = data.results[data.results.length - 1].urls.full;
            setCalendarImage(calendarBackground);
            let result = data.results.pop();
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
            <Form onSubmit={handleSearch}>
                <Form.Control
                    style={{ width: "18rem", margin: "0", padding: "0" }}
                    type="search"
                    className="me-2 "
                    placeholder="Search for countries"
                    aria-label="Search"
                    ref={searchInput}
                />
            </Form>
            <div className="filters">
                <div onClick={() => handleSelection('nature')}>Nature</div>
                <div onClick={() => handleSelection('birds')}>Birds</div>
                <div onClick={() => handleSelection('cats')}>Cats</div>
                <div onClick={() => handleSelection('shoes')}>Shoes</div>
            </div>
            <div className="gridHolder" style={{
                backgroundImage: `url(${calendarImage})`,
                backgroundSize: 'cover',
                display: bool ? 'grid' : 'none'
            }}>

                {images.map(pic => {
                    counter++;
                    if (counter === 5) {
                        alternate = !alternate;
                        counter = 1;
                    }
                    alternate = !alternate;
                    return alternate ? <Hatch key={pic.id} pic={pic} handleClick={handleClick} hatchSide={hatchSide} /> : <DoubleHatch key={pic.id} pic={pic} />

                })}

            </div>
        </>
    )
}

export default EditorPage