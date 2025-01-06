
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkbxiY75R4EuJoUuIq_628fs66Cb6ki1E",
  authDomain: "cinibyte-8207a.firebaseapp.com",
  projectId: "cinibyte-8207a",
  storageBucket: "cinibyte-8207a.firebasestorage.app",
  messagingSenderId: "1009179362612",
  appId: "1:1009179362612:web:7ec02cab97d1947835d161"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);