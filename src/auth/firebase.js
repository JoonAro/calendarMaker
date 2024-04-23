import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { serverTimestamp } from "firebase/firestore";

import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {
    addDoc,
    collection,
    getFirestore,
    getDocs,
} from "firebase/firestore";
import {
    fetchCalendarStart,
    fetchCalendarSuccess,
    fetchCalendarFailure
} from '../store/calendarSlice';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API,
    authDomain: "countries-f2546.firebaseapp.com",
    projectId: "countries-f2546",
    storageBucket: "countries-f2546.appspot.com",
    messagingSenderId: "345028026141",
    appId: "1:345028026141:web:b80a8e04e2b49787f9cbf4",
    measurementId: "G-QFMMC3190L"
};
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const registerWithEmailAndPassword = async (name, email, password, avatar) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            timeStamp: serverTimestamp(),
            avatar,
        });
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
};

export const loginWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        alert(error.message);
    }
};

export const logout = () => {
    auth.signOut();
};
export const addDataToFirestore = async (uid, name) => {
    try {
        await addDoc(collection(db, "users"), {
            uid: uid,
            name,
            timeStamp: serverTimestamp(),
        });
    } catch (error) {
        console.log(error);
    }
};

const calendarsRef = collection(db, "calendar");

const calendarsSnapshot = await getDocs(calendarsRef);
const fetchCalendar = async (calendarId) => {
    try {
        const calendarDoc = await db.collection('calendars').doc(calendarId).get();
        if (calendarDoc.exists) {
            return calendarDoc.data();
        } else {
            console.log('No such calendar document found');
            return null;
        }
    } catch (error) {
        console.error('Error fetching calendar document:', error);
        return null;
    }
};

console.log(`calendarsSnapshot`, calendarsSnapshot);
const calendars = calendarsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
}));
console.log(`calendars`, calendarsRef);
console.log(initializeApp(firebaseConfig));
// Initialize Firebase
export const analytics = getAnalytics(app);

export { auth, db, registerWithEmailAndPassword, calendars };
