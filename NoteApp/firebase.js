
import { initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const apiKey = import.meta.env.VITE_API_KEY;
const appId = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
  // apiKey: apiKey,
  apiKey : "AIzaSyDKGamQ1OHpAdlWW0SUOSg9gjHk6Cr38Eo",
  authDomain: "noteapp-158df.firebaseapp.com",
  projectId: "noteapp-158df",
  storageBucket: "noteapp-158df.appspot.com",
  messagingSenderId: "373793094830",
  // appId: appId
  appId: "1:373793094830:web:565fa23f6456fb423a813f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);