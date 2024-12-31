// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcetlg8A414-P5VrN4LmGs9Hra2cmQPlw",
  authDomain: "traveller-918d3.firebaseapp.com",
  projectId: "traveller-918d3",
  storageBucket: "traveller-918d3.appspot.com",
  messagingSenderId: "370452777226",
  appId: "1:370452777226:web:76903fa4bc72a3cff212f3",
  measurementId: "G-Q1ZTKG243Z"
};

// Initialize Firebase
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Analytics if needed
const analytics = getAnalytics(app);

export { auth, analytics };