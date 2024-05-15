import TextComponent from "./TextComponent"
import { Form } from 'react-bootstrap';
import ButtonForTime from './ButtonComponent';

const HatchImageCatalogue = ({ images, hatchImages, hatchSearchInput, handleHatchImgSelect, handleHatchImgSearch, hatchSearch }) => {
    return (
        <div className="calendarHolder">
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px 0 0 0",
            }}>
                <div style={{ fontSize: "xxlarge" }}>
                    <h1 style={{
                        fontSize: "2em",
                        color: "white"
                    }}>Search:</h1>
                </div>
                <Form style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
                    onSubmit={handleHatchImgSearch}>
                    <Form.Control
                        style={{ width: "300px" }}
                        type="search2"
                        placeholder="Search for a new image"
                        aria-label="hatchSearch"
                        ref={hatchSearchInput}
                    />
                    <ButtonForTime handleDatePick={() => console.log("Search new images")}>
                        <h1>Search</h1>
                    </ButtonForTime>
                </Form>
            </div>
            <div className="hatchCatalogueHolder" >
                {!hatchSearch &&
                    images.map(hatchImg => {
                        return <div className="catalogueImage" key={hatchImg.id} onClick={() => handleHatchImgSelect(hatchImg)} style={{
                            backgroundImage: `url(${hatchImg.urls.regular})`
                        }}>Click to save as new hatch image</div>
                    })}
                {hatchSearch &&
                    hatchImages.map(hatchImg => {
                        return <div className="catalogueImageHolder" key={hatchImg.id}>Click to save as new hatch image.
                            <div className="catalogueImage" onClick={() => handleHatchImgSelect(hatchImg)} style={{
                                backgroundImage: `url(${hatchImg.urls.regular})`
                            }}></div>
                        </div>
                    })}
            </div>
        </div>
    )
}

export default HatchImageCatalogue