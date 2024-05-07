import PickTheDate from "./PickTheDate"
import TextComponent from "./TextComponent"

const ImageCatalogue = ({ bool, images, searchInput, handleSearch, handleBgSelection, handleStartDate, handleEndDate, guideH, guideText, calendarImage, startDate, endDate }) => {
    return (
        <div className="calendarHolder">
            <div className="catalogueHolder" >
                {!bool && <PickTheDate searchInput={searchInput} handleSearch={handleSearch} handleStartDate={handleStartDate} handleEndDate={handleEndDate} startDate={startDate} endDate={endDate} guideH={guideH} guideText={guideText} yes={""} no={""} />}
                {bool && <TextComponent guideH={guideH} guideText={guideText} yes={""} no={""} />}
                {bool && images.map(hatchImg => {
                    return <div className="catalogueImage" key={hatchImg.id} onClick={() => handleBgSelection(hatchImg)} style={{
                        backgroundImage: `url(${hatchImg.urls.regular})`
                    }}></div>
                })}
            </div>
        </div>
    )
}

export default ImageCatalogue