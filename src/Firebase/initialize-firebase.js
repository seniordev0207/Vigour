// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const initializeFirebase = () => initializeApp(firebaseConfig);
export default initializeFirebase;