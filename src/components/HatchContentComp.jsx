const HatchContent = () => {
    return (
        <div className='hatchContent' style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'gray',
            backgroundColor: 'white',
            position: 'absolute',
            width: '400px',
            height: '540px',
            borderRadius: '10px',
            top: '50vh',
            left: '50vw',
            zIndex: '9'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: "360px",
                height: "450px",
                margin: "20px 20px",
            }}>
                <h2>HatchContentComp</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro consectetur dicta magnam. Rerum reiciendis eum facere quae maiores ad? Beatae similique fugiat dolorum dignissimos? Magnam tempore earum laboriosam possimus doloribus!</p>

                <iframe width="350" height="315" src="https://www.youtube.com/embed/73DvTWzdt2Y?si=QUSigTjAyaptmod0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default HatchContent