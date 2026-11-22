// Firebase config for Fundi Near Me
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBFPc9FMfAQrb9Faw8WYo_w5GT8ReWUaw",
  authDomain: "fundi-near-me.firebaseapp.com",
  projectId: "fundi-near-me",
  storageBucket: "fundi-near-me.firebasestorage.app",
  messagingSenderId: "678611215285",
  appId: "1:678611215285:web:d9c8613a0e2eaf09ffeffc"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
