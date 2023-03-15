import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUDrfz0EJuzUR3vmIclDorGtT8z2J3Vlw",
  authDomain: "redacao-mais.firebaseapp.com",
  projectId: "redacao-mais",
  storageBucket: "redacao-mais.appspot.com",
  messagingSenderId: "461862053753",
  appId: "1:461862053753:web:223f3c880872a921b5f1a8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
