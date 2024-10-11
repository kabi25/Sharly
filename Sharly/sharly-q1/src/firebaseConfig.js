/** @format */

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArDKZWCPB4D-IbtowFgphpW_14uk65eKw",
  authDomain: "testing-firebase-e879b.firebaseapp.com",
  projectId: "testing-firebase-e879b",
  storageBucket: "testing-firebase-e879b.appspot.com",
  messagingSenderId: "882184989884",
  appId: "1:882184989884:web:d43a89502f53c5f59a34b9",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const firestore = getFirestore(app);

export { storage, firestore };
