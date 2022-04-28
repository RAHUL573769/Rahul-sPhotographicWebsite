// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpqIIHPIzFS7nj9wVSUAKjp8qaeIFevTg",
  authDomain: "assignment10-7fbf3.firebaseapp.com",
  projectId: "assignment10-7fbf3",
  storageBucket: "assignment10-7fbf3.appspot.com",
  messagingSenderId: "76995508996",
  appId: "1:76995508996:web:4ff4b2291ad2a353672e51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
