import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACEJuARWTJhkKlbY9e9B7BHW5HqDE7n5s",
  authDomain: "fir-database-b2ff2.firebaseapp.com",
  databaseURL: "https://fir-database-b2ff2-default-rtdb.firebaseio.com",
  projectId: "fir-database-b2ff2",
  storageBucket: "fir-database-b2ff2.firebasestorage.app",
  messagingSenderId: "574394099953",
  appId: "1:574394099953:web:92bf6bdb9cd263d839a150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);