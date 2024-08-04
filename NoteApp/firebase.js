
import { initializeApp } from "firebase/app";
import { getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDKGamQ1OHpAdlWW0SUOSg9gjHk6Cr38Eo",
  authDomain: "noteapp-158df.firebaseapp.com",
  projectId: "noteapp-158df",
  storageBucket: "noteapp-158df.appspot.com",
  messagingSenderId: "373793094830",
  appId: "1:373793094830:web:565fa23f6456fb423a813f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const noteCollection = collection(db, 'noteapp');

