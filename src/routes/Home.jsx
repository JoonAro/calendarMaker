import Carousel from '../components/Carousel';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Carousel as CarouselBS } from 'react-bootstrap';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <Container fluid style={{ maxWidth: "100vw", color: "whitesmoke", backgroundColor: "#67595E" }} className='font-sans'>
      <Carousel />

      <div className='flex flex-col justify-center items-center mt-20'>
        <h2 className="text-3xl mb-4">Customize your calendar</h2>
        <div className="w-full py-48 rounded-md mt-4 bg-smallBackground border relative">
          <div className=" w-16 md:w-32 lg:w-60 absolute top-0 left-0 mt-7 ml-14 md:ml-40 items-start flex flex-col sm:items-center">
            <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon1} alt="icon1" />
            <span className='text-sm md:text-2xl mt-3 text-fontDark text-center'>Choose a name of a calendar</span>
            <span className='text-zinc-400 text-xs sm:text-sm md:text-base mt-1 text-center'>What is the main idea of your calendar?</span>
          </div>


          <div className="w-16 md:w-32 lg:w-72 absolute top-24 left-1/2 transform -translate-x-1/2 mb-2 items-left-1/4 flex flex-col sm:items-center">
            <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon2} alt="icon2" />
            <span className='text-sm md:text-2xl mt-3 text-fontDark text-center'>Change style, upload images</span>
            <span className='text-zinc-400 text-xs sm:text-sm md:text-base mt-1 text-center'>Choose images and style of the hatches, theme
            </span>
          </div>


          <div className="w-16 md:w-32 lg:w-72 absolute top-0 right-0 mt-7 mr-14 md:mr-40 items-end flex flex-col sm:items-center">
            <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon3} alt="icon3" />
            <span className='text-sm md:text-2xl mt-3 text-fontDark text-center'>Share your calendar</span>
            <span className='text-zinc-400 text-xs sm:text-sm md:text-base mt-1 text-center'>Whould you like to share your calendar? Sure, do it!
            </span>
          </div>
        </div>
      </div>
      <Row className="mt-5" style={{ padding: "5rem" }}>
        <CarouselBS>
          <CarouselBS.Item>
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


          </CarouselBS.Item>
          <CarouselBS.Item>
            <Col className="d-flex justify-content-center">
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

          </CarouselBS.Item>
        </CarouselBS>

        <div className='flex flex-col justify-center items-center mt-20 w-full py-20 rounded-md bg-whiteReplacement mb-4'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-fontDark text-sm md:text-2xl lg:text-3xl '>We appreciate your feedback❤️</h1>
            <p className='text-fontDark text-sm md:text-lg lg:text-xl opacity-75 mt-7'>Thank you for taking the time to share your feedback with us!</p>
            <p className='text-fontDark text-xs md:text-sm lg:text-lg opacity-75'>Your input helps us improve our service.</p>
          </div>
          <Link to='/contact'>
            <Button className='button mt-7'>Contact us</Button>
          </Link>
          <img className='h-16 hover:-translate-y-1 hover:scale-125' src={icon4} alt="icon4" />
        </div>
      </Row>

    </Container >
  );
};


export default Home;