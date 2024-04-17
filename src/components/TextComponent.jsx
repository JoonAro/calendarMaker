
const TextComponent = ({ guideH, guideText, yes, no, handleUserReply }) => {
    return (
        <div className="welcomeText">
            <h1>{guideH}</h1>
            <div className="textHolder">
                <p>{guideText}</p>
                <p onClick={() => handleUserReply("yes")}>{yes}</p>
                <p onClick={() => handleUserReply("no")}>{no}</p>
            </div>
        </div>
    )
}

export default TextComponent