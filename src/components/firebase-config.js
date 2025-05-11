// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Import Firebase Authentication
import { getAuth } from "firebase/auth"; // <-- Added import for Authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8bv4331Sa2rrILwyjBBwegGqD07y3qcU",
  authDomain: "resumewebsitedatabase.firebaseapp.com",
  databaseURL: "https://resumewebsitedatabase-default-rtdb.firebaseio.com",
  projectId: "resumewebsitedatabase",
  storageBucket: "resumewebsitedatabase.firebasestorage.app",
  messagingSenderId: "1060871207984",
  appId: "1:1060871207984:web:495cb8d8d6dac222e441f5",
  measurementId: "G-71R3TF8WXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get references to the services you need
const database = getDatabase(app);
const auth = getAuth(app); // <-- Added initialization for Authentication

// Export the initialized services so you can use them in other files
export { database, auth }; // <-- Export both database and auth