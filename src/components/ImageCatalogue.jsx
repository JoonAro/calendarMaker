import TextComponent from "./TextComponent"

const ImageCatalogue = ({ bool, images, handleBgSelection, guideH, guideText, calendarImage }) => {
    return (
        <div className="catalogueHolder" style={{
            backgroundImage: bool ? `url(${""})` : `url(${calendarImage})`,
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