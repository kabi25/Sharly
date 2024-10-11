/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4z4HPQHfayJecuKCfJBLyHYwPiMLDnUU",
  authDomain: "sharly-authentication.firebaseapp.com",
  projectId: "sharly-authentication",
  storageBucket: "sharly-authentication.appspot.com",
  messagingSenderId: "1029242652107",
  appId: "1:1029242652107:web:6d9a08fa67b3c540b8e24e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
