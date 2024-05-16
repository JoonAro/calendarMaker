import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PieChartIcon from '@mui/icons-material/PieChart';
import { useEffect } from 'react';
import { db } from "../auth/firebase";
import { query, collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import UserData from '../components/dashboardComponents/UserData';
import ContactForm from '../components/dashboardComponents/ContactFormData';
import { useTheme } from '../components/theme/ThemeContext';


const Dashboard = () => {
    const { theme } = useTheme();
  const mainBackground = theme === 'dark' ? 'bg-mainBackground-dark' : 'bg-mainBackground-light';

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
        <div className={`${mainBackground} p-4 font-sans`}>
            <div className='flex gap-4 w-full flex-wrap'>
                <div className='bg-whiteReplacement-dark rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>

                    <div className="rounded-full h-20 w-12 flex items-center justify-center text-accentColor-light">
                        <SupervisedUserCircleIcon style={{ fontSize: '3rem' }} />
                    </div>

                    <div className="pl-6">
                        <span className="text-lg text-gray-500 font-light">Users</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-fontDark-light font-semibold">{amount}</strong>

                        </div>
                    </div>
                </div>


                <div className='bg-whiteReplacement-dark rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>
                    <div className="rounded-full h-20 w-12 flex items-center justify-center text-accentColor-light">
                        <AccessTimeFilledIcon style={{ fontSize: '3rem' }} />
                    </div>
                    <div className="pl-6">
                        <span className="text-lg text-gray-500 font-light">Shared calendars</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-fontDark-light font-semibold">{amountCalendars}</strong>
                        </div>
                    </div>
                </div>

                <div className='bg-whiteReplacement-dark rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>
                    <div className="rounded-full h-20 w-12 flex items-center justify-center text-accentColor-light">
                        <PieChartIcon style={{ fontSize: '3rem' }} />
                    </div>
                    <div className="pl-6">
                        <span className="text-lg text-gray-500 font-light">Messages</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-fontDark-light font-semibold">{amountMessage}</strong>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex justify-center flex-wrap flex-col gap-4 2xl:flex-row w-full mt-7'>
                <div className='bg-whiteReplacement-dark flex flex-wrap p-px md:px-4 pt-3 pb-4 rounded-sm border border-gray-200  '>
                    <UserData />
                </div>

                <div className='bg-whiteReplacement-dark flex flex-wrap p-px md:px-4 pt-3 pb-4 rounded-sm border border-gray-200'>
                    <ContactForm />
                </div>

            </div>

        </div>
    )
}

export default Dashboard