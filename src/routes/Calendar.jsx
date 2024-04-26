import fakeCalendar from '../../fakeCalendar.json';
import { useState } from "react";
import Hatch from "../components/Hatch";
import DoubleHatch from "../components/DoubleHatch";
import FakeSHatch from '../components/FakeSHatch';
import FakeDblHatch from '../components/FakeDblHatch';
import '../styles/editorStyles.css';
import TextComponent from '../components/TextComponent';
import { useSelector } from 'react-redux';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import ButtonComponent from '../components/ButtonComponent';
import { Link } from 'react-router-dom';

const Calendar = () => {
    const calendar = useSelector(state => state.calendar.calendar);
    const [calendarImage, setCalendarImage] = useState(calendar?.bgImage || 'default-image.jpg');

    return (
        <>
            {!calendar ? (
                <Container fluid style={{ minWidth: "100vw", minHeight: "100vh", color: "whitesmoke", backgroundColor: "#67595E" }} className='font-sans'>
                    <Row className="vh-100 justify-content-center align-items-center">
                        <Col xs={6} md={1} className="d-flex flex-column align-items-center">
                            <Spinner animation="border" role="status" style={{ width: "15rem", height: "15rem", margin: "2rem" }} />
                            <div className="EditorHolder">
                                <Link to='/editorPageV2'><ButtonComponent>Go back to editor</ButtonComponent></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>

            ) : (
                <div className="EditorHolder">
                    <div className="calendarContent">
                        <div className="spaceHolder">

                        </div>
                        <div className="calendarGridHolder" style={{
                            backgroundImage: `url(${calendarImage})`,
                        }}>

                            {calendar?.hatches?.map(hatch => {
                                let hatchKey = hatch.hatchNr;
                                let hatchType = hatch.hatchType;
                                return hatchType === 'single' ? <FakeSHatch key={hatchKey} hatch={hatch} accessKey={false} /> : <FakeDblHatch key={hatchKey} hatch={hatch} accessKey={false} />
                            })}
                        </div>
                        <div className="spaceHolder"></div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Calendar;