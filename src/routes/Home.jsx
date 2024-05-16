import Carousel from '../components/Carousel';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import icon3 from '../assets/icon3.svg';
import { Link } from 'react-router-dom';
import icon5 from '../assets/icon5.svg';
import { useTheme } from '../components/theme/ThemeContext';
import icon2 from '../assets/icon2.svg';
import photo1 from "../assets/Michel.jpeg";
import photo2 from "../assets/Samuel.jpeg";
import photo3 from "../assets/Joona.jpeg";
import photo4 from "../assets/AlonaC.jpeg";


const Home = () => {
  const { theme } = useTheme();
  const mainBackground = theme === 'dark' ? 'bg-mainBackground-dark' : 'bg-mainBackground-light';
  const smallBackground = theme === 'dark' ? 'bg-smallBackground-dark' : 'bg-smallBackground-light';
  const fontDark = theme === 'dark' ? 'text-fontDark-dark' : 'text-fontDark-light';


  return (
    <Container fluid className={`${mainBackground} font-sans`} style={{
      width: "100%",
      paddingLeft: "0",
      paddingRight: "0"
    }}>

      <Carousel />

      <div className='flex flex-col justify-center items-center mt-20 font-sans'>

        <div className={`${smallBackground} py-11 mt-5 mr-0 ml-0 border relative`} style={{ width: "100%" }}>

          <div className={`flex flex-col justify-center items-center text-3xl mb-4 ${fontDark}`}>
            <h2 className={`text-lg md:text-4xl mb-11 `}>Customize your calendar</h2>
          </div>

          <div className='flex justify-between mb-9'>
            <div className=" w-16 md:w-32 lg:w-60  ml-14 md:ml-40 flex flex-col sm:items-center">
              <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon2} alt="icon1" />
              <span className={`${fontDark} text-sm md:text-2xl mt-3 text-center`}>Choose a style of your calendar</span>
              <span className={`${fontDark} text-sm md:text-lg mt-1 text-center`}>Choose images, theme and style of the hatches</span>
            </div>


            <div className="w-16 md:w-32 lg:w-72 flex flex-col sm:items-center">
              <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon5} alt="icon5" />
              <span className={`${fontDark} text-sm md:text-2xl mt-3 text-center`}>Create a collection of calendars</span>
              <span className={`${fontDark} text-sm md:text-lg mt-1 text-center`}>Save your favourite calendars
              </span>
            </div>


            <div className="w-16 md:w-32 lg:w-72 mr-14 md:mr-40 flex flex-col sm:items-center">
              <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon3} alt="icon3" />
              <span className={`${fontDark} text-sm md:text-2xl mt-3 text-center`}>Share your calendar</span>
              <span className={`${fontDark} text-sm md:text-lg mt-1 text-center`}>You can show your calendar to anyone
              </span>
            </div>
          </div>
        </div>
      </div>
      <Row className="mt-5 mr-l0s" style={{ padding: "2rem" }}>
        <Col className="d-flex justify-content-center" style={{ marginLeft: "5rem" }}>
          <Card style={{ margin: "1rem", padding: "1rem", minWidth: '18rem', height: "20rem" }}>
            <Card.Body>
              <Card.Title>Free Plan</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>
                €0/mo
              </Card.Text>
              <hr />
              <Card.Text>Includes:</Card.Text>
              <ul style={{ listStyleType: 'none' }}>
                <li style={{ padding: "0.5rem" }}>&#10003; 4 calendars</li>
                <li style={{ padding: "0.5rem" }}>&#10003; Feature text goes here</li>
                <li style={{ padding: "0.5rem" }}>&#10003; Feature text goes here</li>
              </ul>
              <Button style={{ backgroundColor: "#67595E", borderColor: "#67595E" }} onClick={() => window.location.href = '/register'}>Register</Button>
            </Card.Body>
          </Card>
        </Col>


        <Col className="d-flex justify" style={{ padding: "0 1rem" }}>
          <Card style={{ margin: "1rem", padding: "1rem", minWidth: '18rem', height: "20rem" }}>
            <Card.Body>
              <Card.Title>Premium Plan</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>
                €5/mo
              </Card.Text>
              <hr />
              <Card.Text>Includes:</Card.Text>
              <ul >
                <li style={{ padding: "0.5rem" }}>&#10003; 4 calendars</li>
                <li style={{ padding: "0.5rem" }}>&#10003; Shareble calendars</li>
                <li style={{ padding: "0.5rem" }}>&#10003; Technical Support</li>
              </ul>
              <Button style={{ backgroundColor: "#67595E", borderColor: "#67595E" }} onClick={() => window.location.href = '/premium'}>Get Started</Button>
            </Card.Body>
          </Card>
        </Col>


        <div className={`${smallBackground} flex flex-col justify-center items-center mt-20 w-full py-20 rounded-md mb-4`}>
          <div className='flex flex-col justify-center items-center'>
            <h1 className={`${fontDark} text-lg md:text-4xl`}>Behind the Project</h1>
            <p className={`${fontDark} text-xs md:text-lg lg:text-lg opacity-75 mt-7`}>This project was created by a team of enthusiastic full-stack web developer students </p>
            <p className={`${fontDark} text-xs md:text-lg lg:text-lg opacity-75`}>at Business College in Helsinki.</p>

            <div className="grid grid-cols-4 gap-x-3 md:gap-x-6 mt-8">
              <div className="relative ">
                <img className='h-36 w-28 object-cover rounded-xl drop-shadow-lg hover:-translate-y-0.5 hover:scale-125' src={photo1} alt="Michel" />
                <p className="absolute bottom-0 left-0 right-0 text-sm text-center bg-black bg-opacity-50 text-white py-0.5 rounded-lg">Michel</p>
              </div>

              <div className="relative ">
                <img className='h-36 w-28 object-cover rounded-xl drop-shadow-lg hover:-translate-y-0.5 hover:scale-125' src={photo2} alt="Samuel" />
                <p className="absolute bottom-0 left-0 right-0 text-sm text-center bg-black bg-opacity-50 text-white py-0.5 rounded-xl">Samuel</p>
              </div>

              <div className="relative ">
                <img className='h-36 w-28 object-cover rounded-xl drop-shadow-lg hover:-translate-y-0.5 hover:scale-125' src={photo3} alt="Joona" />
                <p className="absolute bottom-0 left-0 right-0 text-sm text-center bg-black bg-opacity-50 text-white py-0.5 rounded-xl">Joona</p>
              </div>

              <div className="relative">
                <img className='h-36 w-28 object-cover rounded-xl drop-shadow-lg hover:-translate-y-0.5 hover:scale-125' src={photo4} alt="Alona" />
                <p className="absolute bottom-0 left-0 right-0 text-sm text-center bg-black bg-opacity-50 text-white py-0.5 rounded-xl">Alona</p>
              </div>
            </div>



            <p className={`${fontDark} text-xs lg:text-sm opacity-75 mt-7`}>If you have anything to share, we would love to hear from you!</p>
          </div>
          <Link to='/contact'>
            <Button className='button mt-7'>Contact us</Button>
          </Link>

        </div>
      </Row >
    </Container >
  );
};

export default Home;