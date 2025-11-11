// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDog3nu1gcZMOjoYcMqe-a81tWB6b_DBHQ",
  authDomain: "car-deals-react.firebaseapp.com",
  projectId: "car-deals-react",
  storageBucket: "car-deals-react.firebasestorage.app",
  messagingSenderId: "957859619557",
  appId: "1:957859619557:web:33aeca1650e79ac445aa0c",
};

// Initialize Firebase

initializeApp(firebaseConfig);
export const db = getFirestore();
