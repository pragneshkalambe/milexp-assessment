import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBfh06n2NbIv7jsBm-dpL4iTa59NbBj4rw",
  authDomain: "mern-assignment-8abdf.firebaseapp.com",
  projectId: "mern-assignment-8abdf",
  storageBucket: "mern-assignment-8abdf.firebasestorage.app",
  messagingSenderId: "819933367708",
  appId: "1:819933367708:web:fee698ba3fcad0c86e4c59",
  measurementId: "G-MYD9M4BF2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//setting up auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();