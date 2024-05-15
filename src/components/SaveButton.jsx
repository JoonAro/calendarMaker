import 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { addDataToFirestore, auth } from '../auth/firebase';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const SaveButton = () => {
    const calendar = useSelector(state => state.calendar.calendar);
    const dispatch = useDispatch();

    const saveCalendarFirestore = async () => {
        const calendarData = JSON.parse(JSON.stringify(calendar));

        const user = auth.currentUser;
        if (user) {
            await addDataToFirestore(user.uid, calendarData);


        }
    };

    return (
        <Link to="/collection">
            <Button className="w-36 border border-transparent bg-mainBackground-light p-2 rounded-lg hover:bg-accentColor-light text-fontDark hover:text-white mt-6"
                onClick={() => { dispatch(saveCalendarFirestore) }}
            >
                Next
            </Button>
        </Link>
    )
};


export default SaveButton;