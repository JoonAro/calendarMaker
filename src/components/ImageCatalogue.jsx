import TextComponent from "./TextComponent"

// Idea! If image is width is bigger than length then make the image spread to two columns
const ImageCatalogue = ({ bool, images, handleBgSelection, guideH, guideText, calendarImage }) => {
    return (
        <div className="catalogueHolder" style={{
            backgroundImage: bool ? `url(${calendarImage})` : `url(${calendarImage})`,
        }}>
            {bool && <TextComponent guideH={guideH} guideText={guideText} />}
            {!bool &&
                <TextComponent guideH={guideH} guideText={guideText} />
            }
            {bool && images.map(hatchImg => {
                return <div className="catalogueImage" key={hatchImg.id} onClick={() => handleBgSelection(hatchImg)} style={{
                    backgroundImage: `url(${hatchImg.urls.small})`
                }}></div>
            })}
        </div>
    )
}

export default ImageCatalogue