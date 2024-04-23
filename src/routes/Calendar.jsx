import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../auth/firebase'
import FakeSHatch from '../components/FakeSHatch'
import FakeDblHatch from '../components/FakeDblHatch'
import '../styles/editorStyles.css'

const Calendar = () => {
    const [calendar, setCalendar] = useState(null)
    const { calendar: calendarState } = useSelector(state => state)

    useEffect(() => {
        const fetchCalendar = async () => {
            const calendarRef = db.collection('calendars').doc(calendarState.id)
            const calendarDoc = await calendarRef.get()

            if (calendarDoc.exists) {
                setCalendar(calendarDoc.data())
            }
        }

        fetchCalendar()
    }, [calendarState.id])

    if (!calendar) {
        return <div>Loading...</div>
    }

    return (
        <div className="EditorHolder">
            <div className="calendarContent">
                <div className="spaceHolder"></div>
                <div className="calendarGridHolder" style={{
                    backgroundImage: `url(${calendar.bgImage})`,
                }}>

                    {calendar.hatches?.map(hatch => {
                        let hatchKey = hatch.hatchNr;
                        let hatchType = hatch.hatchType;
                        return hatchType === 'single' ? <FakeSHatch key={hatchKey} hatch={hatch} accessKey={false} /> : <FakeDblHatch key={hatchKey} hatch={hatch} accessKey={false} />
                    })}
                </div>
                <div className="spaceHolder"></div>
            </div>
        </div>
    )
}

export default Calendar