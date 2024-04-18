
const TextComponent = ({ guideH, guideText }) => {
    return (
        <div className="welcomeText flexColumnCentered">
            <h1>{guideH}</h1>
            <div className="textHolder flexColumnCentered">
                <p>{guideText}</p>
            </div>
        </div>
    )
}

export default TextComponent