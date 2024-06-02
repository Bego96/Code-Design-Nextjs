// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV00MBt7yFJMPruHl2as5SRo4qz3usbAY",
  authDomain: "code-design-36e78.firebaseapp.com",
  projectId: "code-design-36e78",
  storageBucket: "code-design-36e78.appspot.com",
  messagingSenderId: "441819669107",
  appId: "1:441819669107:web:82b8d03bda2ec1ed8f0006",
  measurementId: "G-T8BQ1CF97M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const storage = getStorage(app)
//const analytics = getAnalytics(app);

export {db, storage}