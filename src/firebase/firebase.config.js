// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7T89YJot23v-04CYoi0T30bnMfWlIvl0",
  authDomain: "prothom-alu-8f57f.firebaseapp.com",
  projectId: "prothom-alu-8f57f",
  storageBucket: "prothom-alu-8f57f.appspot.com",
  messagingSenderId: "918478594223",
  appId: "1:918478594223:web:1202da997fae42c849f45a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;