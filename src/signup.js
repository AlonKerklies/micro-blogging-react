import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { collection, addDoc, getDocs, onSnapshot ,setDoc, doc} from "firebase/firestore";
import { auth, db } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export default function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
 
  const currentDate = new Date();
  const navigae = useNavigate("");

  const logout = async () => {
    await signOut(auth);
    localStorage.setItem("userID", '');
    localStorage.setItem("userName", '');
  };

  const register = async () => {
    setErrorMsg("");
    try {
      // const userInfoForServer = {
      //   // mail: registerEmail,
      //   nickname: "nickname",
      //   profile_picture: "",
      //   date: currentDate.toLocaleString(),
      // };

      // const takeItForStore = await addDoc(
      //   collection(db, `users`),
      //   userInfoForServer
      // );

      // localStorage.setItem("userID", takeItForStore.id);
      // console.log(takeItForStore.id);

      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
        .then(function(user) {
        const newUid = user.user.uid;
        const tmpImageUrl ='https://firebasestorage.googleapis.com/v0/b/alon-kerklies-tweet.appspot.com/o/nouser.webp?alt=media&token=1e33cc58-cd1f-40b9-b127-811398a0976f';
         setDoc(doc(db, "usersPulicInfo",  newUid), {
          userName: "Tmp Name",
          userUid: newUid,
          imageUrl: tmpImageUrl,
        }
        );
        })
     
      //   const tmpImageUrl ='https://firebasestorage.googleapis.com/v0/b/alon-kerklies-tweet.appspot.com/o/nouser.webp?alt=media&token=1e33cc58-cd1f-40b9-b127-811398a0976f';
      //   // גם מייצר חדש וגם מעדכן
      //   await setDoc(doc(db, "usersPulicInfo",  user.uid ), {
      //   userName: "Tmp Name",
      //   userUid: user.uid,
      //   imageUrl: tmpImageUrl,
      // });




      // console.log(user);
      navigae("/Profile");
    } catch (error) {
      console.log(error.message);
      setErrorMsg(error.message);
    }





    
  };

  return auth.currentUser ? (
    <>
      {/* --------------already logged in------------------ */}
      <div className="container mt-6  color-white ">
        <div className="App">
          <div>
            <h1 className="hedline-text color-white pb-3">Sign up </h1>

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
    <div className="container mt-6  ">
      {/* --------form---------- */}
      <h1 className="hedline-text color-white    ">
        Don't have an account yet?
      </h1>
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
        className="profilebtn btn mt-2  btn-primary btn-block"
      >
        Create User
      </button>
      <p className="text-danger">{errorMsg}</p>
    </div>
  );
}
