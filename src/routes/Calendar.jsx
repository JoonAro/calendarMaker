import fakeCalendar from '../../fakeCalendar.json';
import { useState } from "react";
import Hatch from "../components/Hatch";
import DoubleHatch from "../components/DoubleHatch";
import FakeSHatch from '../components/FakeSHatch';
import FakeDblHatch from '../components/FakeDblHatch';
import '../styles/editorStyles.css';
import TextComponent from '../components/TextComponent';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Container, Row, Spinner } from 'react-bootstrap';
import { addDataToFirestore, auth } from '../auth/firebase';
import ButtonComponent from '../components/ButtonComponent';

const Calendar = () => {
    const calendar = useSelector(state => state.calendar.calendar);
    const [calendarImage, setCalendarImage] = useState(calendar?.bgImage || 'default-image.jpg');
    const dispatch = useDispatch();

    const saveCalendarFirestore = async () => {
        const calendarData = JSON.parse(JSON.stringify(calendar));

        const user = auth.currentUser;
        if (user) {
            await addDataToFirestore(user.uid, calendarData);

            dispatch({ type: "saveCalendarFirestore", payload: calendarData });
        }
    };
    return (
        <>
            {!calendar ? (
                <Container fluid style={{ minWidth: "100vw", minHeight: "100vh", color: "whitesmoke", backgroundColor: "#67595E" }} className='font-sans'>
                    <Row className="vh-100 justify-content-center align-items-center">
                        <Col xs={6} md={1} className="d-flex flex-column align-items-center">
                            <Spinner animation="border" role="status" style={{ width: "15rem", height: "15rem", margin: "2rem" }} />
                            <div className="EditorHolder">
                                <ButtonComponent onClick={() => window.location.href = '/editorPageV2'}>Go back to editor</ButtonComponent>
                            </div>
                        </Col>
                    </Row>
                </Container>

            ) : (
                <div className="EditorHolder">
                    <div className="calendarContent">
                        <div className="spaceHolder">
                            <Button onClick={saveCalendarFirestore}>
                                Save
                            </Button>
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