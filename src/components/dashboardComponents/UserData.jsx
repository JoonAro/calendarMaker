import { query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../auth/firebase";
import { collection, getDocs } from "firebase/firestore";



const userData = () => {
    const [usersData, setUsersData] = useState([]);



    useEffect(() => {
        const getUsersData = async () => {

            const usersCollection = query(collection(db, "users"));
            const querySnapshot = await getDocs(usersCollection);
            const userInfo = querySnapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            }));
            setUsersData(userInfo);
        }
        getUsersData();

    }, [])



    return (
        <>
            <strong className='font-medium text-fontDark'>Customers</strong>
            <div className="flex items-center justify-center w-full border-none md:border-gray-200 sm:border-gray  rounded-sm mt-3">
                <table className='text-fontDark border-separate border-spacing-1 md:border-spacing-5 border border-slate-400 '>
                    <thead className=' border border-slate-300 text-transform: uppercase bg-accentColor'>
                        <tr >
                            <th className="text-xs md:text-base lg:text-lg">ID</th>
                            <th className="text-xs md:text-base lg:text-lg">Name</th>
                            <th className="text-xs md:text-base lg:text-lg">Email address</th>
                            <th className="text-xs md:text-base lg:text-lg">Date of registration</th>
                        </tr>
                    </thead>
                    <tbody >
                        {usersData.map((user) => (
                            <tr className=' border border-slate-300' key={user.id} style={{ textAlign: 'center' }}>
                                <td className='items-center border border-slate-300 text-xs md:text-base lg:text-lg'>{user.id}</td>
                                <td className='border border-slate-300  text-xs md:text-base lg:text-lg'>{user.name}</td>

                                <td className='border border-slate-300 text-xs md:text-base lg:text-lg'>{user.email}</td>
                                <td className='border border-slate-300 text-xs md:text-base lg:text-lg w-16 md:w-28'>{user.timeStamp?.toDate().toLocaleDateString()}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default userData
