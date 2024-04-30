import TextComponent from "./TextComponent"

const ImageCatalogue = ({ bool, images, handleBgSelection, guideH, guideText, calendarImage }) => {
    return (
        <div className="calendarHolder">

            <div className="catalogueHolder" >
                {bool && <TextComponent guideH={guideH} guideText={guideText} yes={""} no={""} />}
                {!bool &&
                    <TextComponent guideH={guideH} guideText={guideText} yes={""} no={""} />
                }
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