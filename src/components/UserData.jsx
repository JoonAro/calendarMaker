import { query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../auth/firebase";
import { collection, getDocs} from "firebase/firestore";



const userData = () => {
    const [usersData, setUsersData] = useState([]);
    


    useEffect(()=>{
        const getUsersData = async () =>{

                const usersCollection = query(collection(db, "users")); 
                const querySnapshot = await getDocs(usersCollection);
                const userInfo = querySnapshot.docs.map((doc) => ({
                    id: doc.id, ...doc.data()}));
                    setUsersData(userInfo);
                }
        getUsersData();
    
    }, [])



  return (
   <>
      <strong className='font-medium text-gray-700'>Customers</strong>
            <div className="w-min md:w-full border-gray-200 rounded-sm mt-3">
<table className=' text-gray-700 border-separate text-xs md:text-base sm:text-sm border-spacing-1 md:border-spacing-5 border border-slate-400'>
    <thead className=' border border-slate-300 text-transform: uppercase bg-accentColor'>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email address</th>
            <th>Date of registration</th> 
        </tr>
    </thead>
    <tbody >
        {usersData.map((user) => (
    <tr className=' border border-slate-300' key={user.id} style={{ textAlign: 'center' }}>
            <td className='items-center border border-slate-300' >{user.id}</td>
            <td className='border border-slate-300'>{user.name}</td>
            
            <td className='border border-slate-300'>{user.email}</td>
            <td className='border border-slate-300 '>{user.timeStamp?.toDate().toLocaleDateString()}</td>
        </tr>
        ))}
        
    </tbody>
</table>
           </div>

           </>
  )
}

export default userData
