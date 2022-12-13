// import { getDatabase } from "firebase/database"; //הוספת האפשרות
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 

const firebaseConfig = {

   apiKey: "AIzaSyAdpkCxrNhh147Li3rTDQJQq-dPWH02zEw",
  authDomain: "alon-kerklies-tweet.firebaseapp.com",
  projectId: "alon-kerklies-tweet",
  storageBucket: "alon-kerklies-tweet.appspot.com",
  messagingSenderId: "175355697879",
  appId: "1:175355697879:web:6892a9a3bcdcc6f64aee92"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };



// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);
// export const db = getFirestore(app);


// export const db = getDatabase(app); // משתנה חדש שמגדיר מה יש בדאטהבייס
// Initialize Firebase Authentication and get a reference to the service



// https://firebase.google.com/docs/web/setup#available-libraries


  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINSENDERID,
  // appId: process.env.REACT_APP_FIREBASE_APPID