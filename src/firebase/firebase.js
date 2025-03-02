import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyB_gq-SbdFUzg1Xclr4QPb_7iUgDplhNhA",
  authDomain: "english-slient-react.firebaseapp.com",
  projectId: "english-slient-react",
  storageBucket: "english-slient-react.firebasestorage.app",
  messagingSenderId: "394653041321",
  appId: "1:394653041321:web:8f51a86c4b33375fc65fb8",
  measurementId: "G-G8KSLHQXT2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const analytics = getAnalytics(app);

export default db; 
