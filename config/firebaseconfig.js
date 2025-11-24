// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo2Y3OLD7EdszEEjprdAXHr86E5MKPg9U",
  authDomain: "medcon-5e864.firebaseapp.com",
  projectId: "medcon-5e864",
  storageBucket: "medcon-5e864.firebasestorage.app",
  messagingSenderId: "960799967860",
  appId: "1:960799967860:web:eb94221942d02af2f21f21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
export { db };