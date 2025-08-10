// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASp9ibkEjW7GNg27TwO1tbec3zwqrZuKo",
  authDomain: "netflix-9bbf5.firebaseapp.com",
  projectId: "netflix-9bbf5",
  storageBucket: "netflix-9bbf5.firebasestorage.app",
  messagingSenderId: "199154941166",
  appId: "1:199154941166:web:cbc7948a2bb4ecb58607ff",
  measurementId: "G-WR533GFVB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();