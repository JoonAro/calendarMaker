import "../components/carousel.css";
import image1 from "../assets/elk2.jpg";
import image2 from "../assets/chocko.jpg";
import image3 from "../assets/fox.jpg";
import image4 from "../assets/stars.jpg";
import image5 from "../assets/bird.jpg";



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
          <div className="title">
            <h3>DREAM CALENDAR</h3>
            <p className="mt-8 text-2xl">Add a splash of joy to each day by creating the calendar of your dreams</p>
            <p className="mt-3 text-2xl">Immerse yourself in the atmosphere of beauty</p>
          </div>
        </div>
        <div className="slide two">
          <img src={image2} alt="Coffee" className="imageSlide" />
        </div>
        <div className="slide three">
          <img src={image3} className="imageSlide h-auto" />
        </div>
        <div className="slide four">
          <img src={image4} className="imageSlide" />
        </div>
        <div className="slide five">
          <img src={image5} className="imageSlide h-auto" />
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
