import TextComponent from "./TextComponent"

const ImageCatalogue = ({ bool, images, handleBgSelection }) => {
    return (
        <>
            {!bool &&
                <TextComponent />
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