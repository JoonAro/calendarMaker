import "../components/carousel.css";
import image1 from "../assets/beach.jpg";
import image2 from "../assets/coffee.jpg";
import image3 from "../assets/coffee1.png";
import image4 from "../assets/girl.jpg";
import image5 from "../assets/globe.jpg";



export default function Carousel() {
  return (
    <div className="showCard middle">
      <div className="slides">
        <input type="radio" name="r" id="r1" />
        <input type="radio" name="r" id="r2" />
        <input type="radio" name="r" id="r3" />
        <input type="radio" name="r" id="r4" />
        <input type="radio" name="r" id="r5" />
        <div className="slide one s1">
          <img src={image1} className="imageSlide" />
          <div className="image-date">
            <h2>Beach Calendar</h2>
          </div>
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20 text-fontDark-light text-5xl text-center">
            <h3>DREAM CALENDAR</h3>
          </div>
        </div>
        <div className="slide two">
          <img src={image2} alt="Coffee" className="imageSlide" />
          <div className="image-date">
            <h2>Coffee Calendar</h2>
          </div>
        </div>
        <div className="slide three">
          <img src={image3} className="imageSlide" />
          <div className="image-date">
            <h2>Coffee1 Calendar</h2>
          </div>
        </div>
        <div className="slide four">
          <img src={image4} className="imageSlide" />
          <div className="image-date">
            <h2>Girl Calendar</h2>
          </div>
        </div>
        <div className="slide five">
          <img src={image5} className="imageSlide" />
          <div className="image-date">
            <h2>Globe calendar</h2>
          </div>
        </div>
      </div>
      <div className="navigation">
        <label htmlFor="r1" className="bar"></label>
        <label htmlFor="r2" className="bar"></label>
        <label htmlFor="r3" className="bar"></label>
        <label htmlFor="r4" className="bar"></label>
        <label htmlFor="r5" className="bar"></label>
      </div>
    </div>
  );
}
