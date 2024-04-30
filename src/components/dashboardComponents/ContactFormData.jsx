import { query } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../auth/firebase";
import { collection, getDocs } from "firebase/firestore";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const ContactFormData = () => {
    const [contactFormData, setContactFormData] = useState([]);

    useEffect(() => {
        const getContactFormData = async () => {

            const contactFormCollection = query(collection(db, "contactForm"));
            const querySnapshot = await getDocs(contactFormCollection);
            const contactInfo = querySnapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data()
            }));
            setContactFormData(contactInfo);
        }
        getContactFormData();

    }, [])



  return (
<>
    <div>
 
            <strong className='font-medium text-fontDark'>Messages</strong>
            <div className="w-min md:w-full border-gray-200 rounded-sm mt-3">
                <table className=' text-fontDark border-separate sm:text-sm border-spacing-1 md:border-spacing-5 border border-slate-400 '>
                    <thead className=' border border-slate-300 text-transform: uppercase bg-accentColor'>
                        <tr>
                            <th className="text-xs md:text-base lg:text-lg">Name</th>
                            <th className="text-xs md:text-base lg:text-lg">Email address</th>
                            <th className="text-xs md:text-base lg:text-lg">Message</th>
                            <th className="text-xs md:text-base lg:text-lg">Date sent</th>
                            
                        </tr>
                    </thead>
                    <tbody >
                 
                    {contactFormData.map((data) => (
                            <tr className=' border border-slate-300' key={data.id} style={{ textAlign: 'center' }}>
                              
                                <td className='border border-slate-300 text-xs md:text-base lg:text-lg'>{data.name}</td>

                                <td className='border border-slate-300 w-40 text-xs md:text-base lg:text-lg'>{data.email}</td>

                                <td >
                                    <div className='border border-slate-300 relative overflow-hidden'>
                                <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-10 cursor-pointer opacity-0 z-10"    />
                                <div className="w-full h-10 pl-5 flex items-center justify-center">
                                <h1 className="text-xs md:text-base lg:text-lg">Show message</h1>
                                </div>
                                <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
           <KeyboardDoubleArrowDownIcon />
        </div>

                                <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                                <div className="p-3 "><p className="text-xs md:text-base lg:text-lg">{data.message}</p></div></div>
                              
                                </div>
                                </td>

                                <td className='border border-slate-300 w-32 text-xs md:text-base lg:text-lg'>{data.timeStamp?.toDate().toLocaleDateString()}
                                </td>
                                
                                </tr>
                        ))}

                    </tbody>
                </table>
            </div>

            </div>
</>
    )

}

export default ContactFormData;

