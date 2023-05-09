// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/messaging';
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkpWGMv3bUoCSVrIRMg7RIFX-Cm3IBpf0",
  authDomain: "capstoneproject-3c99a.firebaseapp.com",
  projectId: "capstoneproject-3c99a",
  storageBucket: "capstoneproject-3c99a.appspot.com",
  messagingSenderId: "863866415247",
  appId: "1:863866415247:web:f912ed59a7f83e6a68a8fa",
  measurementId: "G-EF4H3KMH90"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
