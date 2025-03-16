// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqIeXJJrMGVNfyUK6f1ElniYJ36baFndY",
  authDomain: "coffee-master-application.firebaseapp.com",
  projectId: "coffee-master-application",
  storageBucket: "coffee-master-application.firebasestorage.app",
  messagingSenderId: "136621397170",
  appId: "1:136621397170:web:283deba05e0dc66964a5ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;