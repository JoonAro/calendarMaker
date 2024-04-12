import TextComponent from "./TextComponent"

const ImageCatalogue = ({ bool, images, handleBgSelection, guideH, guideText }) => {
    return (
        <>
            {bool && <TextComponent guideH={guideH} guideText={guideText} />}
            {!bool &&
                <TextComponent guideH={guideH} guideText={guideText} />
            }
            {bool && images.map(hatchImg => {
                return <div className="calendarImage" key={hatchImg.id} onClick={() => handleBgSelection(hatchImg)} style={{
                    backgroundImage: `url(${hatchImg.urls.small})`
                }}></div>
            })}
        </>
    )
}

export default ImageCatalogue