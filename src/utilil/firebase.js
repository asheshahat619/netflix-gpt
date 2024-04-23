// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATiLK6kM96LIpcl8lkksM6DYZ7w_-eiQQ",
  authDomain: "netflix-gpt-67915.firebaseapp.com",
  projectId: "netflix-gpt-67915",
  storageBucket: "netflix-gpt-67915.appspot.com",
  messagingSenderId: "390643522135",
  appId: "1:390643522135:web:46e831b504cd7a43a1e112",
  measurementId: "G-5C4Z2PGSYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();