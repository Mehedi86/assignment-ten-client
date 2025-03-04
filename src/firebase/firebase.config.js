// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWrmGiD21K4I80Qo636HPF87R4maIjUXw",
  authDomain: "assignment-ten-810d6.firebaseapp.com",
  projectId: "assignment-ten-810d6",
  storageBucket: "assignment-ten-810d6.firebasestorage.app",
  messagingSenderId: "596979436593",
  appId: "1:596979436593:web:f5c8e089722bed68a05910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);