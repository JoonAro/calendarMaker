import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import PieChartIcon from '@mui/icons-material/PieChart';
import coffee from "../assets/coffee.jpg";

const Dashboard = () => {
  return (
    <div className='p-4'>
    <div className='flex gap-4'>
        <div className='smallBackground rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>

        <div className="rounded-full h-20 w-12 flex items-center justify-center text-accentColor">
            <SupervisedUserCircleIcon style={{ fontSize: '3rem'}} />
            </div>
        
    <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Users</span>
        <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">20</strong>
            <span className="text-sm text-green-500 pl-2">+23</span>
        </div>
    </div>
        </div>


        <div className='smallBackground rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>
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

        <div className='smallBackground rounded-sm p-4 flex-1 border border-gray-200 flex items-center w-full'>
        <div className="rounded-full h-20 w-12 flex items-center justify-center text-accentColor">
            <PieChartIcon style={{ fontSize: '3rem'}} />
            </div>
    <div className="pl-4">
        <span className="text-sm text-gray-500 font-light">Transactions</span>
        <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">20</strong>
            <span className="text-sm text-green-500 pl-2">+23</span>
        </div>
    </div>
        </div>
        </div>


        <div className='flex flex-row gap-4 w-full mt-7 bg'>
           <div className='px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
            <strong className='font-medium text-gray-700'>Customers</strong>
            <div className=" border-gray-200 rounded-sm mt-3">
<table className='w-full text-gray-700 border-separate border-spacing-5 border border-slate-400'>
    <thead className=' border border-slate-300 text-transform: uppercase bg-accentColor'>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Email address</th>
            <th>Date of registration</th> 
        </tr>
    </thead>
    <tbody >
    <tr className=' border border-slate-300'>
            <td className='border border-slate-300'>1</td>
            <td className='border border-slate-300'>Name</td>
            <td className='border border-slate-300'>Status</td>
            <td className='border border-slate-300'>Email address</td>
            <td className='border border-slate-300'>Date of registration</td>
        </tr>
        <tr className=' border border-slate-300'>
            <td className='border border-slate-300'>1</td>
            <td className='border border-slate-300'>Name</td>
            <td className='border border-slate-300'>Status</td>
            <td className='border border-slate-300'>Email address</td>
            <td className='border border-slate-300'>Date of registration</td>
        </tr>
        <tr className=' border border-slate-300'>
            <td className='border border-slate-300'>1</td>
            <td className='border border-slate-300'>Name</td>
            <td className='border border-slate-300'>Status</td>
            <td className='border border-slate-300'>Email address</td>
            <td className='border border-slate-300'>Date of registration</td>
        </tr>
        <tr className=' border border-slate-300'>
            <td className='border border-slate-300'>1</td>
            <td className='border border-slate-300'>Name</td>
            <td className='border border-slate-300'>Status</td>
            <td className='border border-slate-300'>Email address</td>
            <td className='border border-slate-300'>Date of registration</td>
        </tr>
    </tbody>
</table>
           </div>
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

