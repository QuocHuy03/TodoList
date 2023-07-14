import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9dFpgmeYaaGkhl_YcVbCyc7rooBYb96Y",
  authDomain: "decent-rampart-368004.firebaseapp.com",
  projectId: "decent-rampart-368004",
  storageBucket: "decent-rampart-368004.appspot.com",
  messagingSenderId: "1022354562793",
  appId: "1:1022354562793:web:1cd5befffd223096361a78",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);

export { db };
