import PickTheDate from "./PickTheDate"
import TextComponent from "./TextComponent"
import Search from "./Search"

const ImageCatalogue = ({ bool, images, searchInput, handleSearch, handleBgSelection, handleStartDate, handleEndDate, guideH, guideText, calendarImage, startDate, endDate, time, handleDatePick, hatchEdit, handleHatchImgSelect }) => {
    return (
        <div className="calendarHolder">
            {hatchEdit && <Search searchInput={searchInput} handleSearch={handleSearch} />}
            <div className="catalogueHolder" >
                {!bool && <PickTheDate searchInput={searchInput} handleSearch={handleSearch} handleStartDate={handleStartDate} handleEndDate={handleEndDate} startDate={startDate} endDate={endDate} guideH={guideH} guideText={guideText} yes={""} no={""} time={time} handleDatePick={handleDatePick} />}
                {bool && <TextComponent guideH={guideH} guideText={guideText} yes={""} no={""} />}
                {bool && !hatchEdit && images.map(hatchImg => {
                    return <div className="catalogueImage" key={hatchImg.id} onClick={() => handleBgSelection(hatchImg)} style={{
                        backgroundImage: `url(${hatchImg.urls.regular})`
                    }}></div>
                })}
                {hatchEdit &&
                    images.map(hatchImg => {
                        return <div className="catalogueImage" key={hatchImg.id} onClick={() => handleHatchImgSelect(hatchImg)} style={{
                            backgroundImage: `url(${hatchImg.urls.regular})`
                        }}></div>
                    })}
            </div>
        </div>
    )
}

export default ImageCatalogue