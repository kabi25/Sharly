/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7zYpwJjcUYy5jQhtky2fQH9rOjZGd6qo",
  authDomain: "sharly-q3.firebaseapp.com",
  projectId: "sharly-q3",
  storageBucket: "sharly-q3.appspot.com",
  messagingSenderId: "484754108324",
  appId: "1:484754108324:web:1fc8aacf4b19def5c1db31",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
