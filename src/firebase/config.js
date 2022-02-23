import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRRJexGN6oKIRjk-apLRLJNI0QxywdZVM",
  authDomain: "gamestore-ecommerce.firebaseapp.com",
  projectId: "gamestore-ecommerce",
  storageBucket: "gamestore-ecommerce.appspot.com",
  messagingSenderId: "980412505275",
  appId: "1:980412505275:web:da4cb1f5b84a6233d6dd9e",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
