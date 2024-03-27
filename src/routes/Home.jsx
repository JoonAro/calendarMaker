import Carousel from '../components/Carousel';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const Home = () => {
  return (
    <Container fluid style={{ color: "whitesmoke", backgroundColor: "#67595E", padding: "5rem" }}>
      <div className="text-center mt-5">
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "whitesmoke" }}>Virtual Calendar</h1>
      </div>
      <Row className="mt-5">
        <Col md={6}>
          <div style={{ marginLeft: '5rem' }}>
            <Carousel />
          </div>
        </Col>
        <Col style={{ justifyContent: "center" }} md={6}>
          <div className="text-center mt-5" style={{ margin: "0 auto", maxWidth: "fit-content", textAlign: "justify" }}>
            <h1 style={{ fontSize: "1rem", fontWeight: "bold", color: "whitesmoke" }}>Countdown to Joy: Unlock the Magic Daily!</h1>
            <h2>Embark on a digital journey of anticipation and delight with our Digital Advent Calendar, where each day unveils a new virtual window, brimming with surprises, joy, and festive cheer.</h2>
          </div>
        </Col>
      </Row>
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
