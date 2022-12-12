import { getDatabase } from "firebase/database"; //הוספת האפשרות
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 

// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {

  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   apiKey: "AIzaSyAdpkCxrNhh147Li3rTDQJQq-dPWH02zEw",
  // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  authDomain: "alon-kerklies-tweet.firebaseapp.com",
  // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  projectId: "alon-kerklies-tweet",
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  storageBucket: "alon-kerklies-tweet.appspot.com",
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINSENDERID,
  messagingSenderId: "175355697879",
  // appId: process.env.REACT_APP_FIREBASE_APPID
  appId: "1:175355697879:web:6892a9a3bcdcc6f64aee92"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app); // משתנה חדש שמגדיר מה יש בדאטהבייס
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

console.log("start firebase file")


