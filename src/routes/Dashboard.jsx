import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PieChartIcon from '@mui/icons-material/PieChart';
import { useEffect } from 'react';
import { db } from "../auth/firebase";
import { query, where, collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import UserData from '../components/dashboardComponents/UserData';
import ContactForm from '../components/dashboardComponents/ContactFormData';





const Dashboard = () => {
    const [amount, setAmount] = useState(null);
    const [difference, setDifference] = useState(null);
    const [amountMessage, setAmountMessage] = useState(null);
    const [differenceMessage, setDifferenceMessage] = useState(null);
    const [amountCalendars, setAmountCalendars] = useState(null);
    const [differenceCalendars, setDifferenceCalendars] = useState(null);
 

    useEffect(()=>{
        fetchData();
        fetchMessageData();
        fetchCalendarsData();
        }, []
)

const fetchData = async () =>{
    const today = new Date();
    const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
    console.log(lastMonth)

    const lastMonthQuery = query(collection(db,"users"), where("timeStamp", "<=", today), where("timeStamp", ">", lastMonth));

    const prevMonthQuery = query(collection(db,"users"), where("timeStamp", "<=", lastMonth), where("timeStamp", ">", prevMonth));

    const lastMonthData = await getDocs(lastMonthQuery);
    const prevMonthData = await getDocs(prevMonthQuery);

    setAmount(lastMonthData.docs.length);

    if(prevMonthData.docs.length !== 0){
        setDifference(
            ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) * 100);
    }
   else {
    setDifference(100);
   }
}

const fetchMessageData = async() =>{
    const today = new Date();
    const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
    const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
    const lastMonthQueryMessage = query(collection(db,"contactForm"), where("timeStamp", "<=", today), where("timeStamp", ">", lastMonth));

    const prevMonthQueryMessage = query(collection(db,"contactForm"), where("timeStamp", "<=", lastMonth), where("timeStamp", ">", prevMonth));

    const lastMonthDataMessage = await getDocs(lastMonthQueryMessage);
    const prevMonthDataMessage = await getDocs(prevMonthQueryMessage);

    setAmountMessage(lastMonthDataMessage.docs.length);

    if(prevMonthDataMessage.docs.length !==0){
        setDifferenceMessage(
            ((lastMonthDataMessage - prevMonthDataMessage) / prevMonthDataMessage) * 100);
    }
    else{
        setDifferenceMessage(100);
    }
}



// const fetchCalendarsData = async () => {
//     try {
//       const usersCollectionRef = collection(db, 'users');
//       const querySnapshot = await getDocs(usersCollectionRef);
     
  
//       querySnapshot.forEach(async (userDoc) => {
//         const calendarCollectionRef = collection(userDoc.ref, 'calendar');
//         const calendarsQuerySnapshot = await getDocs(calendarCollectionRef);
//         totalCalendars += calendarsQuerySnapshot.size;
//       });
  
//       setAmountCalendars(totalCalendars.docs.length);
   
//     } catch (error) {
//       console.error('Error fetching calendars:', error);
//     }
//   };
  
const fetchCalendarsData = async () => {
    try {
      const usersCollectionRef = collection(db, 'users');
      const querySnapshot = await getDocs(usersCollectionRef);
  
      let allCalendars = [];
  
      querySnapshot.forEach(async (userDoc) => {
        const calendarCollectionRef = collection(userDoc.ref, 'calendar');
        const calendarsQuerySnapshot = await getDocs(calendarCollectionRef);
        allCalendars = [...allCalendars, ...calendarsQuerySnapshot.docs];
      });
  
      setAmountCalendars(allCalendars.length);
    } catch (error) {
      console.error('Error fetching calendars:', error);
    }
  };
  


// const fetchCalendarsData = async() =>{
//     const today = new Date();
//     const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
//     const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
//     console.log(lastMonth)

//     const usersQuerySnapshot = await getDocs(collection(db, 'users'));

//     let totalCalendars = 0;

//     // Iterate through each user document
//     usersQuerySnapshot.forEach(userDoc => {
//         // Get the 'calendars' subcollection of the current user document
//         const calendarsQuerySnapshot = getDocs(collection(userDoc.ref, 'calendars'));
        
//         // Increment the total number of calendars by the number of documents in the 'calendars' subcollection
//         totalCalendars += calendarsQuerySnapshot.size;
//     });

    // const lastMonthQueryCalendars = query(collection(db,`users/calendar`), where("timeStamp", "<=", today), where("timeStamp", ">", lastMonth));

    // const prevMonthQueryCalendars = query(collection(db,`users/calendar`), where("timeStamp", "<=", lastMonth), where("timeStamp", ">", prevMonth));

    // const lastMonthDataMessages = await getDocs(lastMonthQueryCalendars);
    // const prevMonthDataMessages = await getDocs(prevMonthQueryCalendars);

    // setAmountCalendars(totalCalendars);

//     if(prevMonthDataMessages.docs.length !== 0){
//         setDifference(
//             ((lastMonthDataMessages.docs.length - prevMonthDataMessages.docs.length) / prevMonthDataMessages.docs.length) * 100);
//     }
//    else {
//     setDifferenceCalendars(100);
//    }


  return (
    <div className='p-4 font-sans'>
    <div className='flex gap-4 w-full flex-wrap'>
        <div className=' rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>

        <div className="rounded-full h-20 w-12 flex items-center justify-center text-accentColor">
            <SupervisedUserCircleIcon style={{ fontSize: '3rem'}} />
            </div>
        
    <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Users</span>
        <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{amount}</strong>
            <span className="text-sm text-green-500 pl-2">{difference}%</span>
        </div>
    </div>
        </div>


        <div className='rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>
        <div className="rounded-full h-20 w-12 flex items-center justify-center text-accentColor">
            <AccessTimeFilledIcon style={{ fontSize: '3rem'}} />
            </div>
    <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Saved calendars</span>
        <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{amountCalendars}</strong>
            <span className="text-sm text-green-500 pl-2">{differenceCalendars}</span>
        </div>
    </div>
        </div>

        <div className='rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>
        <div className="rounded-full h-20 w-12 flex items-center justify-center text-accentColor">
            <PieChartIcon style={{ fontSize: '3rem'}} />
            </div>
    <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Messages</span>
        <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">{amountMessage}</strong>
            <span className="text-sm text-green-500 pl-2">{differenceMessage}%</span>
        </div>
    </div>
        </div>
        </div>


        <div className='flex justify-center flex-wrap flex-col gap-4 md:flex-row w-full mt-7'>
           <div className='flex flex-wrap p-px md:px-4 pt-3 pb-4 rounded-sm border border-gray-200  '>
       <UserData />
              </div>
            
            <div className='flex flex-wrap p-px md:px-4 pt-3 pb-4 rounded-sm border border-gray-200'>
            <ContactForm/>
            </div>
            
        </div>
      
        </div>
        
      
  )
}

export default Dashboard