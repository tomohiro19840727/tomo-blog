
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfLaAKkr1YKB5q6RWJ00YYzE_KxsxD5Us",
  authDomain: "blog-eda18.firebaseapp.com",
  projectId: "blog-eda18",
  storageBucket: "blog-eda18.appspot.com",
  messagingSenderId: "105973386578",
  appId: "1:105973386578:web:effc5fad8285b31a75be8b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };