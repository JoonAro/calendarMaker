import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PieChartIcon from '@mui/icons-material/PieChart';
import { useEffect } from 'react';
import { db } from "../auth/firebase";
import { query, collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import UserData from '../components/dashboardComponents/UserData';
import ContactForm from '../components/dashboardComponents/ContactFormData';


const Dashboard = () => {
    const [amount, setAmount] = useState(null);
    const [amountMessage, setAmountMessage] = useState(null);
    const [amountCalendars, setAmountCalendars] = useState(null);


    useEffect(() => {
        fetchData();
        fetchMessageData();
        fetchCalendarsData();
    }, []
    )

    const fetchData = async () => {
        const lastMonthQuery = query(collection(db, "users"))
        const lastMonthData = await getDocs(lastMonthQuery);
        setAmount(lastMonthData.docs.length);
    }

    const fetchMessageData = async () => {
        const lastMonthQueryMessage = query(collection(db, "contactForm"));
        const lastMonthDataMessage = await getDocs(lastMonthQueryMessage);
        setAmountMessage(lastMonthDataMessage.docs.length);
    }

    const fetchCalendarsData = async () => {
        const lastMonthQueryShareable = query(collection(db, "shareable"));
        const lastMonthDataShareable = await getDocs(lastMonthQueryShareable);
        setAmountCalendars(lastMonthDataShareable.docs.length);
    };



    return (
        <div className='p-4 font-sans'>
            <div className='flex gap-4 w-full flex-wrap'>
                <div className=' rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>

                    <div className="rounded-full h-20 w-12 flex items-center justify-center text-accentColor">
                        <SupervisedUserCircleIcon style={{ fontSize: '3rem' }} />
                    </div>

                    <div className="pl-4">
                        <span className="text-lg text-gray-500 font-light">Users</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">{amount}</strong>

                        </div>
                    </div>
                </div>


                <div className='rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>
                    <div className="rounded-full h-20 w-12 flex items-center justify-center text-accentColor">
                        <AccessTimeFilledIcon style={{ fontSize: '3rem' }} />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Shared calendars</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">{amountCalendars}</strong>
                        </div>
                    </div>
                </div>

                <div className='rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>
                    <div className="rounded-full h-20 w-12 flex items-center justify-center text-accentColor">
                        <PieChartIcon style={{ fontSize: '3rem' }} />
                    </div>
                    <div className="pl-4">
                        <span className="text-lg text-gray-500 font-light">Messages</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">{amountMessage}</strong>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex justify-center flex-wrap flex-col gap-4 md:flex-row w-full mt-7'>
                <div className='flex flex-wrap p-px md:px-4 pt-3 pb-4 rounded-sm border border-gray-200  '>
                    <UserData />
                </div>

                <div className='flex flex-wrap p-px md:px-4 pt-3 pb-4 rounded-sm border border-gray-200'>
                    <ContactForm />
                </div>

            </div>

        </div>
    )
}

export default Dashboard