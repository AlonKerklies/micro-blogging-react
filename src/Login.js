import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { auth } from "./firebase";
import { useAuth } from "./contexts/AuthContext";
import {
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import {
  Link
} from "react-router-dom";



export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });


  const logout = async () => {
    await signOut(auth);
  };



  async function handleSubmit(e) {
    e.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value);
  }

  //בדיקת סיסמאות
  // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //   return setError("The passwords are not the same")
  // }


  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
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
            <h1 className="hedline-text color-white pb-3">yoe are log in at </h1>

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

    <>
       {/* --------------  לוג אין------------------ */}
     <div className="container mt-6  ">
    <h1 className="hedline-text color-white  mb-4  ">Welcome Back</h1>
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
<button
            onClick={login}
            type="button"
            className="  btn mt-2  btn-primary btn-block" >
            Login
            </button>
        </Form.Group>
      </Form>

 <p className="subline-text color-white mt-5">Don't have an account yet?  
   <Link to="/Signup" className="subline-text color-white ms-2 ">sign up</Link>  

 
 </p>
</div> 

</>
 
  );
}
