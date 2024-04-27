import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAI_SCfGOB60RVcb_br3VCww-nCSqvVXJ0",
  authDomain: "new-gifhov.firebaseapp.com",
  projectId: "new-gifhov",
  storageBucket: "new-gifhov.appspot.com",
  messagingSenderId: "1044680575468",
  appId: "1:1044680575468:web:cd545f7d6598ecaeead8c9",
  measurementId: "G-E5C1CEYFGW"
};
export const firebase_app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(firebase_app);
export const firestore_database = getFirestore(firebase_app);
export const firebase_storage = getStorage(firebase_app);
export const firebase_auth_google = new GoogleAuthProvider();
