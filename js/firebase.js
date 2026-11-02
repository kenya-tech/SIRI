
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCOu_XODk8QdFQR6q7n_JeEvO3rRVW7R0I",
  authDomain: "siri-6b9d3.firebaseapp.com",
  projectId: "siri-6b9d3",
  storageBucket: "siri-6b9d3.firebasestorage.app",
  messagingSenderId: "802866781121",
  appId: "1:802866781121:web:e18715e4eecae804c36d40"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
