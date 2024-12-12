import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBm9mzNzKczPbw9PiRaSXyHVau7Lcp-iNs",
  authDomain: "chat-2d2c4.firebaseapp.com",
  projectId: "chat-2d2c4",
  storageBucket: "chat-2d2c4.firebasestorage.app",
  messagingSenderId: "69957990091",
  appId: "1:69957990091:web:ccc68e526551eadc018d4e",
  measurementId: "G-M48WJDYRVW",
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore(app);
