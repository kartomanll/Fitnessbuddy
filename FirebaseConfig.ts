// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe4lKMpO9SWeRFPyBrLg4J-y8PtksqygU",
  authDomain: "fitnessbuddy-7285d.firebaseapp.com",
  projectId: "fitnessbuddy-7285d",
  storageBucket: "fitnessbuddy-7285d.appspot.com",
  messagingSenderId: "156640071530",
  appId: "1:156640071530:web:f59ae5581aec08c6e25f13",
  measurementId: "G-HL8EM44TX0"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase}

