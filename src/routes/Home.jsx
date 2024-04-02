import Carousel from '../components/Carousel';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';

const Home = () => {
  return (
    <Container fluid style={{ color: "whitesmoke", backgroundColor: "#67595E", padding: "5rem" }}>
      <div className="text-center mt-5">
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "whitesmoke" }}>Virtual Calendar</h1>
      </div>

      <Row className="mt-5">
        <Col md={7}>
          <div style={{ marginLeft: '1rem' }}>
            <Carousel />
          </div>
        </Col>
        <Col style={{ justifyContent: "center" }} md={5}>
          <div className="text-center mt-5" style={{ margin: "0 auto", maxWidth: "fit-content", textAlign: "justify" }}>
            <h1 style={{ fontSize: "1rem", fontWeight: "bold", color: "whitesmoke" }}>Countdown to Joy: Unlock the Magic Daily!</h1>
            <h2>Embark on a digital journey of anticipation and delight with our Digital Advent Calendar, where each day unveils a new virtual window, brimming with surprises, joy, and festive cheer.</h2>
          </div>
        </Col>
      </Row>

    <div className='flex flex-col justify-center items-center mt-20'>
<h2 className="text-3xl">Customize your calendar</h2>
<div className="h-32 px-52 py-32 sm:px-80 rounded-md mt-3 sm:w-auto bg-whiteReplacement border relative">
<div className="absolute top-0 left-0 m-2.5 flex flex-col items-center">
  <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon1} alt="icon1"/>
  <span className='text-xs sm:text-sm mt-3 text-fontDark'>Choose a name of a calendar</span>
  </div>
  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 m-2.5 flex flex-col items-center">
  <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon2} alt="icon2"/>
  <span className='text-xs sm:text-sm mt-3 text-fontDark'>Change style, upload images</span>
  </div>
  <div className="absolute top-0 right-0 m-2.5 flex flex-col items-center">
        <img className='h-24 hover:-translate-y-1 hover:scale-125' src={icon3} alt="icon3"/>
        <span className='text-xs sm:text-sm mt-3 text-fontDark'>Share your calendar</span>
        </div>
</div>
    </div>

      <Row className="mt-5" style={{ padding: "5rem" }}>
        <Col md={6} className="d-flex justify-content-center">
          <Card style={{ padding: "2rem", width: '25rem', height: '25rem' }}>
            <Card.Body>
              <Card.Title>Free Plan</Card.Title>
              <Card.Text style={{ fontSize: '3rem' }}>
                €0/mo
              </Card.Text>
              <hr />
              <Card.Text>Includes:</Card.Text>
              <ul style={{ listStyleType: 'none' }}>
                <li style={{ padding: "0.5rem" }}>&#10003; 4 calendars</li>
                <li style={{ padding: "0.5rem" }}>&#10003; Feature text goes here</li>
                <li style={{ padding: "0.5rem" }}>&#10003; Feature text goes here</li>
              </ul>
              <Button style={{ backgroundColor: "#67595E" }}>Register</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="d-flex justify-content-center mt-5 mt-md-0">
          <Card style={{ padding: "2rem", width: '25rem', height: '25rem' }}>
            <Card.Body>
              <Card.Title>Free Plan</Card.Title>
              <Card.Text style={{ fontSize: '3rem' }}>
                €5/mo
              </Card.Text>
              <hr />
              <Card.Text>Includes:</Card.Text>
              <ul >
                <li style={{ padding: "0.5rem" }}>&#10003; 4 calendars</li>
                <li style={{ padding: "0.5rem" }}>&#10003; Feature text goes here</li>
                <li style={{ padding: "0.5rem" }}>&#10003; Feature text goes here</li>
              </ul>
              <Button style={{ backgroundColor: "#67595E" }}>Get Started</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
