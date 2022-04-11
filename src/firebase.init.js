// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfhvAnLWUToyABUs0DLhsOJMDxRYUzxhc",
    authDomain: "car-model-3b926.firebaseapp.com",
    projectId: "car-model-3b926",
    storageBucket: "car-model-3b926.appspot.com",
    messagingSenderId: "983375220738",
    appId: "1:983375220738:web:e00c472d7e68a6c307571b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;