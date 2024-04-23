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
    authDomain: "countries-6a68c.firebaseapp.com",
    projectId: "countries-6a68c",
    storageBucket: "countries-6a68c.appspot.com",
    messagingSenderId: "596975822467",
    appId: "1:596975822467:web:b7e7d28b7e738ef6b2ddb6"
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
        await addDoc(collection(db, "calendars"), {
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
export const fetchCalendar = (calendarId) => {
    try {
        // const calendarDoc = await db.collection('calendars').doc(calendarId).get();
        const q = getDocs(collection(db, "calendars"))
            .then((snapShot) => {
                //console.log(snapShot.docs)
                let calendars = []
                snapShot.docs.forEach((doc) => {
                    calendars.push({ ...doc.data(), id: doc.id })
                })
                console.log("calendars", calendars)
            })
        if (q) {
            console.log("q calendar", q)
            return calendars;
        } else {
            console.log('No such calendar document found');
            return null;
        }
        //const name = getDocs(q);
        // const name = q._snapshot.docChanges[4].value
        /* const name = docData.value.mapValue.fields.name.stringValue; */
        //console.log(name);
        /*         const query = await getDocs(collection(db, "users", "vpuzBDN069UhgmJ9KRAU", "name", "hatches"));
                if (query) {
                    console.log("query", query)
                }
                else {
                    console.log("query failed")
                } */
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
