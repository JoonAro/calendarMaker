import { query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../auth/firebase";
import { collection, getDocs } from "firebase/firestore";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';



const userData = () => {
    const [usersData, setUsersData] = useState([]);

const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6; 

   
    const indexOfLastItem = currentPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentItems = usersData.slice(indexOfFirstItem, indexOfLastItem);

 
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


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


    const totalPages = Math.ceil(usersData.length / pageSize);
    const pages = Array.from({ length: totalPages }, (_, i) => ({ page: i + 1 }));


   
    return (
        <>
        <div>
            <strong className='text-lg font-medium text-fontDark-light'>Users</strong>
            <div className="w-min md:w-full border-gray-200 rounded-sm mt-3">

                <table className='text-fontDark border-separate border-spacing-1 md:border-spacing-5 border border-slate-400 '>
                    <thead className=' border border-slate-300 text-transform:  bg-accentColor-light'>
                        <tr >
                            <th className="text-xs md:text-base lg:text-lg">ID</th>
                            <th className="text-xs md:text-base lg:text-lg">Name</th>
                            <th className="text-xs md:text-base lg:text-lg">Email address</th>
                            <th className="text-xs md:text-base lg:text-lg">Date of registration</th>
                        </tr>
                    </thead>

                    <tbody >

                         {currentItems.map((user) => (
                            <tr className='border border-slate-300' key={user.id} style={{ textAlign: 'center' }}>
                                <td className='border border-slate-300 text-xs md:text-base lg:text-lg'>{user.id}</td>
                                <td className='border border-slate-300 text-xs md:text-base lg:text-lg'>{user.name}</td>
                                <td className='border border-slate-300 text-xs md:text-base lg:text-lg'>{user.email}</td>
                                <td className='border border-slate-300 text-xs md:text-base lg:text-lg w-16 md:w-28'>{user.timeStamp?.toDate().toLocaleDateString()}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

        
        

              
                <div className="flex justify-center items-center mt-3">
               
                <button className="bg-accentColor hover:bg-smallBackground text-fontDark py-1 px-1 rounded mr-2" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><KeyboardDoubleArrowLeftIcon/></button>
                {
    pages.map((pg,i)=>(
        <button key={i} onClick={()=>setCurrentPage(pg.page)} className={ `h-6 md:h-8 lg:h-9 border-1 border-r-0 border-slate-300 w-6 md:w-8 lg:w-9 mr-2 ${currentPage === pg.page && 'bg-smallBackground-light'}`}>{pg.page}</button>
    
    ))
}
                <button className="bg-accentColor hover:bg-smallBackground text-fontDark py-1 px-1 rounded" onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >= usersData.length}><KeyboardDoubleArrowRightIcon/></button>
            </div>
                </div>
                </div>
        </>
    )
}

export default userData
