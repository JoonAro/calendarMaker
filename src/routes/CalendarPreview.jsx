import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../auth/firebase";
import FakeSHatch from '../components/FakeSHatch';
import FakeDblHatch from '../components/FakeDblHatch';
import { useAuthState } from 'react-firebase-hooks/auth';
import { setDoc } from 'firebase/firestore';

const CalendarPreview = () => {
    const { id } = useParams();
    const [calendar, setCalendar] = useState(null);
    const [shareableLink, setShareableLink] = useState('');
    const [linkCopied, setLinkCopied] = useState(false);
    const [user] = useAuthState(auth);
    const [linkGenerated, setLinkGenerated] = useState(false);

    useEffect(() => {
        const fetchCalendar = async () => {
            try {
                if (user) {
                    const calendarDoc = await getDoc(doc(db, `users/${user.uid}/calendar/${id}`));
                    if (calendarDoc.exists()) {
                        setCalendar({ id: calendarDoc.id, ...calendarDoc.data() });
                    } else {
                        console.log('Calendar not found');
                        setCalendar(null);
                    }
                } else {
                    console.log('No user signed in');
                }
            } catch (error) {
                console.error('Error fetching calendar:', error);
            }
        };
        fetchCalendar();
    }, [id, user]);

    const generateShareableLink = async () => {
        const newShareableLink = `https://calendar-6ecfb.web.app/shareable/${id}`;
        setShareableLink(newShareableLink);
        console.log("link", newShareableLink);

        try {
            if (user) {
                await setDoc(doc(db, 'shareable', id), {
                    data: calendar,
                    shareableLink: newShareableLink,
                    timeStamp: new Date()
                });
                setLinkGenerated(true);
            }
        } catch (error) {
            console.error('Error adding data to shareable collection:', error);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareableLink).then(() => {
            setLinkCopied(true);
        }).catch(error => {
            console.error('Error copying to clipboard:', error);
        });
    };

    return (
        <div>
            <div className="calendarContent">

                {calendar ? (
                    <div className="p-10 flex items-center justify-center">
                        <div className="flex items-center p-2">
                            <button
                                onClick={generateShareableLink}
                                type="submit"
                                className={`w-36 border border-transparent ${linkGenerated ? 'bg-accentColor-light' : 'bg-accentColor-light'} p-2 rounded-lg hover:bg-accentColor-light text-fontDark hover:text-white cursor-pointer`}
                                disabled={linkGenerated}
                            >
                                {linkGenerated ? "Copy link below" : "Generate Shareable Link"}
                            </button>
                            {linkGenerated && (
                                <>
                                    {linkCopied ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill='#E8B4B8' className="bi bi-clipboard-heart ml-5" viewBox="0 0 16 16">
                                            <path d="M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" />
                                            <path d="M3 1.5h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2" />
                                            <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.31 8 6.982" />
                                        </svg>
                                    ) : (
                                        <svg onClick={copyToClipboard} xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill='#E8B4B8' className="bi bi-copy ml-5 cursor-pointer" viewBox="0 0 16 16">
                                            <path d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                        </svg>
                                    )}
                                    {linkCopied && <span className="ml-2 text-accentColor-light">Link copied!</span>}
                                </>
                            )}
                        </div>
                    </div>
                ) : null}

                <div className="gridHolderPreview" style={{ backgroundImage: `url(${calendar?.data?.bgImage})` }}>
                    {calendar?.data?.hatches?.map(hatch => {
                        let hatchKey = hatch.hatchNr;
                        let hatchType = hatch.hatchType;
                        return hatchType === 'single' ? <FakeSHatch key={hatchKey} hatch={hatch} accessHatch={false} /> : <FakeDblHatch key={hatchKey} hatch={hatch} accessHatch={false} />;
                    })}
                </div>
                <div className='spaceHolder'></div>
            </div>
        </div >
    );


}

export default CalendarPreview;
