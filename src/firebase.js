// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDOm4FNfVoPjzH4dl0x3FQo54nlInm7Zk",
  authDomain: "cloudmoon-neko.firebaseapp.com",
  projectId: "cloudmoon-neko",
  storageBucket: "cloudmoon-neko.appspot.com",
  messagingSenderId: "350290366328",
  appId: "1:350290366328:web:832dabbe5c989b29ca828d",
  measurementId: "G-CTR763N7XL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage, app };