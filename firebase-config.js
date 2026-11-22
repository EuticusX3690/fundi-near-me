
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUS8DXq0NAKrnEJNQg7MmSlOjqyobS8sg",
  authDomain: "fundi-near-me-273c0.firebaseapp.com",
  projectId: "fundi-near-me-273c0",
  storageBucket: "fundi-near-me-273c0.firebasestorage.app",
  messagingSenderId: "729204944702",
  appId: "1:729204944702:web:27c89c9ecb453d8788866f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
