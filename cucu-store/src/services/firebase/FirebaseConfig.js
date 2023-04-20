import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBSdEa0g-d4X4ERQMcDB0XznsBAERG_XwQ",
  authDomain: "e-comerce-humano.firebaseapp.com",
  projectId: "e-comerce-humano",
  storageBucket: "e-comerce-humano.appspot.com",
  messagingSenderId: "288128452271",
  appId: "1:288128452271:web:42ef45a50de8dc6793f65a",
  measurementId: "G-SZV8VTCNBN"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)