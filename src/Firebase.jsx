import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDC8kv0zeY1iAwoOa7jaewYZHC5ktwfKvM",
  authDomain: "loginpage-53071.firebaseapp.com",
  projectId: "loginpage-53071",
  storageBucket: "loginpage-53071.firebasestorage.app",
  messagingSenderId: "678640872176",
  appId: "1:678640872176:web:71d2e97104ed32fa25b035",
  measurementId: "G-V8SB10PXQN",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
