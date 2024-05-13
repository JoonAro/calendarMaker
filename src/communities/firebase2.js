import { getFirestore, collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAQPvc7NH9Fl1JjLLLlmPehGW7PWgzreAg",
    authDomain: "disscussion-5c5ba.firebaseapp.com",
    projectId: "disscussion-5c5ba",
    storageBucket: "disscussion-5c5ba.appspot.com",
    messagingSenderId: "324906793846",
    appId: "1:324906793846:web:8e9dfb58e053c44b179857"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Function to add a new post to Firebase
export const addPost = async (post) => {
  try {
    const docRef = await addDoc(collection(firestore, "posts"), {
      ...post,
      timestamp: Timestamp.fromDate(new Date()), // Convert to Firestore Timestamp
      comments: [] // Initialize comments array
    });
    console.log("Post added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding post: ", error);
  }
};

// Function to retrieve all posts from Firebase
export const getPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(firestore, "posts"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting posts: ", error);
    return [];
  }
};

// Function to add a new comment to a post in Firebase
export const addComment = async (postId, comment) => {
  try {
    const docRef = await addDoc(collection(firestore, `posts/${postId}/comments`), {
      ...comment,
      timestamp: Timestamp.fromDate(new Date()) // Convert to Firestore Timestamp
    });
    console.log("Comment added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding comment: ", error);
  }
};

// Function to retrieve comments for a specific post from Firebase
export const getComments = async (postId) => {
  try {
    const q = query(collection(firestore, `posts/${postId}/comments`), orderBy("timestamp", "asc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting comments: ", error);
    return [];
  }
};

export default firestore; 
