import 'firebase/firestore';
import { useSelector } from 'react-redux';
import { addDataToFirestore, auth } from '../auth/firebase';
import { Link } from 'react-router-dom';


const SaveButton = () => {
    const calendar = useSelector(state => state.calendar.calendar);

    const saveCalendarFirestore = async () => {
        const calendarData = JSON.parse(JSON.stringify(calendar));

        const user = auth.currentUser;
        if (user) {
            await addDataToFirestore(user.uid, calendarData);

        }
    };

    return (
        <Link to="/calendar">
            <button
                type="submit"
                className="w-36 border border-transparent bg-mainBackground p-2 rounded-lg mb-6 hover:bg-accentColor text-fontDark hover:text-white"
                onClick={saveCalendarFirestore}
            >
                Next
            </button>
        </Link>
    )

};


export default SaveButton;