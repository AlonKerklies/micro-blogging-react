import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { auth } from "./firebase";
import { useAuth } from "./contexts/AuthContext";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigae = useNavigate("");

  const logout = async () => {
    await signOut(auth);
    localStorage.setItem("userID", '');
    localStorage.setItem("userName", '');
  };

  const login = async () => {
    setErrorMsg("");
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user );
      localStorage.setItem("userID", user.user.uid);
 
      navigae("/Profile");
    } catch (error) {
      setErrorMsg(error.message);
      console.log(error.message);
    }
  };

  return auth.currentUser ? (
    <>
      {/* --------------alredy logged in------------ */}
      <div className="container mt-6  color-white ">
        <div className="App">
          <div>
            <h1 className="hedline-text color-white pb-3">
              yoe are log in at{" "}
            </h1>

            <p className="subline-text color-white">
              Logged In: {auth.currentUser.email}
            </p>

            <button
              onClick={logout}
              type="button"
              className="  btn mt-2  btn-primary btn-block"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      {/* ----------login form ------------- */}
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
              className="  btn mt-2 me-2 btn-primary btn-block"
            >
              Login
            </button>
            <span className="text-danger  ">{errorMsg}</span>
          </Form.Group>
        </Form>

        <p className="subline-text color-white mt-5">
          Don't have an account yet?
          <Link to="/Signup" className="subline-text color-white ms-2 ">
            sign up
          </Link>
        </p>
      </div>
    </>
  );
}
