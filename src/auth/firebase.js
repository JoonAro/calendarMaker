import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API,
    authDomain: "calendar-6ecfb.firebaseapp.com",
    projectId: "calendar-6ecfb",
    storageBucket: "calendar-6ecfb.appspot.com",
    messagingSenderId: "576536150205",
    appId: "1:576536150205:web:e26ec6b92a5c8b32d137d4",
    measurementId: "G-J61THVH573"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);