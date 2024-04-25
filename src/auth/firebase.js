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

} from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API,
    authDomain: "calendar-6ecfb.firebaseapp.com",
    projectId: "calendar-6ecfb",
    storageBucket: "calendar-6ecfb.appspot.com",
    messagingSenderId: "576536150205",
    appId: "1:576536150205:web:e26ec6b92a5c8b32d137d4",
    measurementId: "G-J61THVH573"
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
export const addDataToFirestore = async (uid, data) => {
    try {
        await addDoc(collection(db, `users/${uid}/calendar`), {
            data: data,
            uid: uid,
            timeStamp: serverTimestamp(),
        });
    } catch (error) {
        console.log(error);
    }
};

console.log(initializeApp(firebaseConfig));
// Initialize Firebase
export const analytics = getAnalytics(app);

export { auth, db, registerWithEmailAndPassword };
