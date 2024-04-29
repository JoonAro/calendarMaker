// make a new div around welcomeText and make it's width 100% align text center etc.
const TextComponent = ({ guideH, guideText, yes, no, handleUserReply, bool4 }) => {
    return (
        <div className="welcomeText">
            <h1>{guideH}</h1>
            <div className="textHolder">
                <p>{guideText}</p>
                {!bool4 && <div><p onClick={() => handleUserReply("yes")}>{yes}</p>
                    <p onClick={() => handleUserReply("no")}>{no}</p></div>}
            </div>
        </div>
    )
}

export default TextComponent