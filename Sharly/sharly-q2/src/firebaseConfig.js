/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChhUfPcncHtcQRXW_QCK3w1sFlRkVCe3A",
  authDomain: "sharly-q2.firebaseapp.com",
  projectId: "sharly-q2",
  storageBucket: "sharly-q2.appspot.com",
  messagingSenderId: "926128412737",
  appId: "1:926128412737:web:52d13e6e1abfcd2e4e4ec0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
