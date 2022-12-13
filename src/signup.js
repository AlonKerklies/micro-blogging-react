import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { collection, addDoc, getDocs, onSnapshot } from 'firebase/firestore';
import { auth, db } from "./firebase";

import { useAuth } from "./contexts/AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// import "bootstrap/dist/css/bootstrap.min.css";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  // const [userInfoForServer, setUserInfoForServer] = useState("");
  const currentDate = new Date();




 
 



  const logout = async () => {
    await signOut(auth);
  };

  const register = async () => {
    try {

      
       const  userInfoForServer  =  {
        // mail: registerEmail,
        nickname: "nickname",
        profile_picture : "",
        date: currentDate.toLocaleString()
      } ;
    
      const takeItForStore = await addDoc(collection(db, `users`), userInfoForServer);
      // const usertWithIdFromServer = { ...userInfoForServer, id: takeItForStore.id,};
      // console.log(usertWithIdFromServer);
     localStorage.setItem("userID", takeItForStore.id);
      // console.log(localStorage.getItem("userID") )
      // localStorage.setItem("userName", inputName);
      // console.log(localStorage.getItem("userName") )
      

      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );




      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };



  return auth.currentUser ? (
    <>
        {/* --------------  למקרה שהיוזר כבר לוג אין ------------------ */}
      <div className="container mt-6  color-white ">
        <div className="App">
          <div>
            <h1 className="hedline-text color-white pb-3">Sign up </h1>

            <p className="subline-text color-white">
              {" "}
              Logged In: {auth.currentUser.email}
            </p>
            <p className="subline-text color-white">
              {" "}
              id: {auth.currentUser.uid}
            </p>

            <button
       onClick={logout}
        type="button"
        className="  btn mt-2  btn-primary btn-block" >
        Sign Out 
      </button>
        
          </div>
        </div>
      </div>
    </>
  ) : (

     
     <div className="container mt-6  "> {/* -------------- תחילת הרשמה----------- */}
    <h1 className="hedline-text color-white    ">Don't have an account yet?</h1>
    <p className="subline-text color-white mb-4">Sign Up</p>
    <Form>
        <Form.Group controlId="formBasicEmail">

          <Form.Control
            // value={inputName}
            onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            className="inputName bg-transparent  rounded  p-3 border border-2 mb-3"
            type="text"
            placeholder="Email..."
            />

            <Form.Control
            // value={inputName}
            onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            className="inputName bg-transparent  rounded  p-3 border border-2 mb-3"
            type="text"
            placeholder="Password..."
          />
        </Form.Group>
      </Form>
     

            <button
       onClick={register}
        type="button"
        className="profilebtn btn mt-2  btn-primary btn-block" >
         Create User
      </button>
      </div> 
  
  );
}
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  // const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
 // async function handleSubmit(e) {
  //   e.preventDefault();
  //   signup(emailRef.current.value, passwordRef.current.value);
  // }

  //בדיקת סיסמאות
  // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //   return setError("The passwords are not the same")
  // }