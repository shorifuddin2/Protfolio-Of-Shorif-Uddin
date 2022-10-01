// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyAWU-XVwfZzB0LMppp7sTDijyqlq641OvE",
  authDomain: "portfolio-of-shorif-uddin.firebaseapp.com",
  projectId: "portfolio-of-shorif-uddin",
  storageBucket: "portfolio-of-shorif-uddin.appspot.com",
  messagingSenderId: "661066648900",
  appId: "1:661066648900:web:130da5176d63126c159b11",
  measurementId: "G-WBF0VWDNYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;