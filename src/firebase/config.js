import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAwCNNt5xOM_RUqD-PWrMDr_p8TfPn555s",
  authDomain: "allcom-d20f8.firebaseapp.com",
  projectId: "allcom-d20f8",
  storageBucket: "allcom-d20f8.appspot.com",
  messagingSenderId: "78384225309",
  appId: "1:78384225309:web:4aa13dbb6d8b0a3edffaf4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
