import Carousel from '../components/Carousel';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import { Link } from 'react-router-dom';
import icon5 from '../assets/icon5.svg';
import { useTheme } from '../components/theme/ThemeContext';
import icon2 from '../assets/icon2.svg';

import Cookies from '../components/footercomponent/Cookies';


const Home = () => {
  const { theme } = useTheme();
  const mainBackground = theme === 'dark' ? 'bg-mainBackground-dark' : 'bg-mainBackground-light';
  const smallBackground = theme === 'dark' ? 'bg-smallBackground-dark' : 'bg-smallBackground-light';
  const fontDark = theme === 'dark' ? 'text-fontDark-dark' : 'text-fontDark-light';


  return (
    <Container fluid className={mainBackground} style={{
      width: "100%",
      paddingLeft: "0",
      paddingRight: "0"
    }}>

      <Carousel />

      <div className='flex flex-col justify-center items-center mt-20'>

        <div className={`${smallBackground} py-11 mt-5 mr-0 ml-0 border relative`} style={{ width: "100%" }}>

          <div className='flex flex-col justify-center items-center text-3xl mb-4 text-fontDark-light'>
            <h2 className="text-4xl mb-11 text-fontDark-light">Customize your calendar</h2>
          </div>

          <div className='flex justify-between mb-9'>
            <div className=" w-16 md:w-32 lg:w-60  ml-14 md:ml-40 flex flex-col sm:items-center">
              <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon2} alt="icon1" />
              <span className={`${fontDark} text-sm md:text-2xl mt-3 text-center`}>Choose a name of a calendar</span>
              <span className={`${fontDark} text-zinc-400 text-xs sm:text-sm md:text-base mt-1 text-center`}>What is the main idea of your calendar?</span>
            </div>


            <div className="w-16 md:w-32 lg:w-72 flex flex-col sm:items-center">
              <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon5} alt="icon5" />
              <span className={`${fontDark} text-sm md:text-2xl mt-3 text-center`}>Be the designer of your own calendar</span>
              <span className='text-zinc-400 text-xs sm:text-sm md:text-base mt-1 text-center'>Choose images, theme and style of the hatches
              </span>
            </div>


            <div className="w-16 md:w-32 lg:w-72 mr-14 md:mr-40 flex flex-col sm:items-center">
              <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon3} alt="icon3" />
              <span className={`${fontDark} text-sm md:text-2xl mt-3 text-center`}>Share your calendar</span>
              <span className='text-zinc-400 text-xs sm:text-sm md:text-base mt-1 text-center'>Whould you like to share your calendar? Sure, do it!
              </span>
            </div>
          </div>
        </div>
      </div>
      <Row className="mt-5 mr-0 mr-l0s" style={{ padding: "5rem" }}>
        <Col className="d-flex justify-content-center">
          <Card style={{ padding: "1rem", width: '20rem', height: "20rem" }}>
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


        <Col className="d-flex justify-content-center" style={{ padding: "0 1rem" }}>
          <Card style={{ padding: "1rem", width: '20rem', height: "20rem" }}>
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
            <h1 className={`${fontDark} text-sm md:text-2xl lg:text-3xl `}>We appreciate your feedback❤️</h1>
            <p className={`${fontDark} text-sm md:text-lg lg:text-xl opacity-75 mt-7`}>Thank you for taking the time to share your feedback with us!</p>
            <p className={`${fontDark} text-xs md:text-sm lg:text-lg opacity-75`}>Your input helps us improve our service.</p>
          </div>
          <Link to='/contact'>
            <Button className='button mt-7'>Contact us</Button>
          </Link>
          <img className='h-16 hover:-translate-y-1 hover:scale-125' src={icon4} alt="icon4" />
        </div>
      </Row >
<Cookies/>
    </Container >
  );
};

export default Home;