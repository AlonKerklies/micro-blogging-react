import { getDatabase } from "firebase/database"; //הוספת האפשרות
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries


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
export const db = getDatabase(app); // משתנה חדש שמגדיר מה יש בדאטהבייס

console.log("start firebase file")
console.log(db)

// {
//     "rules": {
//       ".read": "now < 1673128800000",  // 2023-1-8
//       ".write": "now < 1673128800000",  // 2023-1-8
//     }
//   }