// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwQu2K3sYFq41u4pCbFF5_qX1Jy9W8c_4",
  authDomain: "dargon-news-auth-breaking.firebaseapp.com",
  projectId: "dargon-news-auth-breaking",
  storageBucket: "dargon-news-auth-breaking.firebasestorage.app",
  messagingSenderId: "713875746630",
  appId: "1:713875746630:web:9cead187cda29faec2bf47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);