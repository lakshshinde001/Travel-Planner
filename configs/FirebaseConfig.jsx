// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcetlg8A414-P5VrN4LmGs9Hra2cmQPlw",
  authDomain: "traveller-918d3.firebaseapp.com",
  projectId: "traveller-918d3",
  storageBucket: "traveller-918d3.firebasestorage.app",
  messagingSenderId: "370452777226",
  appId: "1:370452777226:web:76903fa4bc72a3cff212f3",
  measurementId: "G-Q1ZTKG243Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);