import Carousel from '../components/Carousel';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Carousel as CarouselBS } from 'react-bootstrap';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';

const Home = () => {
  return (
    <Container fluid style={{ maxWidth: "100vw", color: "whitesmoke", backgroundColor: "#67595E" }}>
      <Carousel />


      {/*
      <Col md={7}>
        <div >
          <div className="text-center mt-5">
            <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "whitesmoke" }}>Online Calendar</h1>
          </div>
        </div>
      </Col>
      <Row className="mt-5">
        <Col style={{ justifyContent: "center" }} md={5}>
          <div className="text-center mt-5" style={{ margin: "0 auto", maxWidth: "fit-content", textAlign: "justify" }}>
            <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", color: "whitesmoke", marginBottom: "2rem" }}>Advent Calendar<br />Create your style and share with friends!</h1>
            <h2>Create your own unique online advent calendar, where each day reveals a new virtual window, brimming with surprises and happiness.</h2>
          </div>
        </Col>
      </Row>

*/}
      <div className='flex flex-col justify-center items-center mt-20'>
        <h2 className="text-3xl mb-4">Customize your calendar</h2>
        <div className="w-screen py-40 rounded-md mt-4 bg-smallBackground border relative">
          <div className=" w-16 md:w-32 lg:w-60 absolute top-0 left-0 mt-2.5 ml-14 sm:ml-40 items-start flex flex-col sm:items-center">
            <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon1} alt="icon1" />
            <span className='text-xs sm:text-base mt-3 text-fontDark'>Choose a name of a calendar</span>
            <span className='text-zinc-400 text-xs'>What is the main idea of your calendar?</span>
          </div>

          <div className="w-16 md:w-32 lg:w-72 absolute top-20 left-1/2 transform -translate-x-1/2 mb-2 items-left-1/4 flex flex-col sm:items-center">
            <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon2} alt="icon2" />
            <span className='text-xs sm:text-base mt-3 text-fontDark'>Change style, upload images</span>
            <span className='text-zinc-400 text-xs'>Choose images and style of the hatches, theme
            </span>
          </div>

          <div className="w-16 md:w-32 lg:w-72 absolute top-0 right-0 mt-2.5 mr-14 sm:mr-40 items-end flex flex-col sm:items-center">
            <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon3} alt="icon3" />
            <span className='text-xs sm:text-base mt-3 text-fontDark'>Share your calendar</span>
            <span className='text-zinc-400 text-xs'>Whould you like to share your calendar? Sure, do it!
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
            <Col className="d-flex justify-content-center mt-5 mt-md-0">
              <Card style={{ padding: "1rem", width: '20rem', height: "20rem" }}>
                <Card.Body>
                  <Card.Title>Free Plan</Card.Title>
                  <Card.Text style={{ fontSize: '2rem' }}>
                    €5/mo
                  </Card.Text>
                  <hr />
                  <Card.Text>Includes:</Card.Text>
                  <ul >
                    <li style={{ padding: "0.5rem" }}>&#10003; 4 calendars</li>
                    <li style={{ padding: "0.5rem" }}>&#10003; Feature text goes here</li>
                    <li style={{ padding: "0.5rem" }}>&#10003; Feature text goes here</li>
                  </ul>
                  <Button style={{ backgroundColor: "#67595E", borderColor: "#67595E" }}>Get Started</Button>
                </Card.Body>
              </Card>
            </Col>

          </CarouselBS.Item>
        </CarouselBS>
      </Row>
      {/*    <Row className="mt-5" style={{ padding: "1rem" }}>
        <Col md={7} xs={12} className="d-flex justify-content-center ">
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
        <Col md={10} xs={10} lg={5} className="d-flex justify-content-left mt-5 mt-md-0">
          <Card style={{ padding: "1rem", width: '20rem', height: "20rem" }}>
            <Card.Body>
              <Card.Title>Free Plan</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>
                €5/mo
              </Card.Text>
              <hr />
              <Card.Text>Includes:</Card.Text>
              <ul >
                <li style={{ padding: "0.5rem" }}>&#10003; 4 calendars</li>
                <li style={{ padding: "0.5rem" }}>&#10003; Feature text goes here</li>
                <li style={{ padding: "0.5rem" }}>&#10003; Feature text goes here</li>
              </ul>
              <Button style={{ backgroundColor: "#67595E", borderColor: "#67595E" }}>Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
    </Container >

  );
};

export default Home;
