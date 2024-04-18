import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PieChartIcon from '@mui/icons-material/PieChart';
import coffee from "../assets/coffee.jpg";
import { useEffect } from 'react';
import { db } from "../auth/firebase";
import { query, where, collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import UserData from '../components/UserData';

const Dashboard = () => {
    const [amount, setAmount] = useState(null);
    const [difference, setDifference] = useState(null);
    let data;

    useEffect(()=>{
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
        fetchData();
    }, []
)



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
            <strong className="text-xl text-gray-700 font-semibold">20</strong>
            <span className="text-sm text-green-500 pl-2">+23</span>
        </div>
    </div>
        </div>

        <div className='rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>
        <div className="rounded-full h-20 w-12 flex items-center justify-center text-accentColor">
            <PieChartIcon style={{ fontSize: '3rem'}} />
            </div>
    <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Actions</span>
        <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">20</strong>
            <span className="text-sm text-green-500 pl-2">+23</span>
        </div>
    </div>
        </div>
        </div>


        <div className='flex flex-wrap flex-col gap-4 md:flex-row w-full mt-7'>
           <div className='flex flex-wrap p-px md:px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
            
           
       <UserData/>

              </div>
            <div className="w-[20rem] px-4 pt-3 pb-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Saved Calendars</strong>
			<div className="mt-4 flex justify-between gap-3">
            <div className="flex items-start w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={coffee}
                                alt="calendar"
							/>
						</div>
            <div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">Product name</p>
						</div>
                        
                </div>
                <div className="mt-4 flex justify-between gap-3">
            <div className="flex items-start w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={coffee}
                                alt="calendar"
							/>
						</div>
            <div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">Product name</p>
						</div>
                        
                </div>
                <div className="mt-4 flex justify-between gap-3">
            <div className="flex items-start w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={coffee}
                                alt="calendar"
							/>
						</div>
            <div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">Product name</p>
						</div>
                        
                </div>
                <div className="mt-4 flex justify-between gap-3">
            <div className="flex items-start w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={coffee}
                                alt="calendar"
							/>
						</div>
            <div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">Product name</p>
						</div>
                        
                </div>
            </div>
        </div>
        </div>
        
      
  )
}

export default Dashboard