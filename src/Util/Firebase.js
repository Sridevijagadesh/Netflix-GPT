// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBECKbSS9K4i28L4yKkjMGnaLZUR2sPXQQ",
  authDomain: "netflixgpt-ef8c9.firebaseapp.com",
  projectId: "netflixgpt-ef8c9",
  storageBucket: "netflixgpt-ef8c9.firebasestorage.app",
  messagingSenderId: "937035916979",
  appId: "1:937035916979:web:165b778a78718d992bf2c6",
  measurementId: "G-7VC3LSC7SN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
