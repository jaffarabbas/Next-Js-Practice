// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKuHyWpIrdEjtvNA_5k11wU0IpTV2f-B0",
  authDomain: "jz-next-crud-app.firebaseapp.com",
  projectId: "jz-next-crud-app",
  storageBucket: "jz-next-crud-app.appspot.com",
  messagingSenderId: "1070809835326",
  appId: "1:1070809835326:web:c4e2401881a0fc5bbeae6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };