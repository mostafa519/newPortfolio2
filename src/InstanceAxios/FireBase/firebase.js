// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCW7_ymfsKYXTeHZZHv-JovtlhY33sW3AI",
  authDomain: "react-auth2-7e94e.firebaseapp.com",
  projectId: "react-auth2-7e94e",
  storageBucket: "react-auth2-7e94e.appspot.com",
  messagingSenderId: "921611614010",
  appId: "1:921611614010:web:a77007e9c62f6f637f0203",
  measurementId: "G-H95RDD2BZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);