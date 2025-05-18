// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzxfX2vc68vfesSp1o_SRUAgvRN-9eQAA",
  authDomain: "coffee-project-auth-6b002.firebaseapp.com",
  projectId: "coffee-project-auth-6b002",
  storageBucket: "coffee-project-auth-6b002.firebasestorage.app",
  messagingSenderId: "344508507704",
  appId: "1:344508507704:web:11131aeb699cb12d7d68cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
