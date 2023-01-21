import { useState } from "react";
import React from "react";
import Form from "react-bootstrap/Form";
import { db } from "./firebase";
import { useNavigate } from "react-router-dom";

import {
  collection,
  getDocs,
  query,
  doc,
  updateDoc,
  where,
} from "firebase/firestore";

function Profile({}) {
  const tweetsCollectionFromDB = collection(db, `tweets`);
  const [inputName, setInputName] = useState("");
  const navigae = useNavigate("");

  const handleClick = ({ inputName }) => {
    localStorage.setItem("userName", inputName);
    console.log(localStorage.getItem("userName"));
    changUserNameIntweetList();
    changUserNameInUserList();
  };

  const changUserNameInUserList = async () => {
    const changeTheUserCollection = doc(
      db,
      "users",
      localStorage.getItem("userID")
    );

    try {
      await updateDoc(changeTheUserCollection, {
        nickname: inputName,
      });
      navigae("/");
    } catch (err) {
      console.log(err);
    }
  };

  const changUserNameIntweetList = async () => {
    console.log("try");

    const q = query(
      collection(db, "tweets"),
      where("userID", "==", localStorage.getItem("userID"))
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      // updateDoc({ userName: inputName } )
    });

    try {
      //  await   q.update ({
      //   userID: inputName  });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-6  ">
      <h1 className="hedline-text color-white pb-3">Profile</h1>
      <p className="subline-text color-white">Choose Username</p>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            className="inputName bg-transparent  rounded  p-3 border border-2"
            type="text"
            placeholder="User Name"
          />
        </Form.Group>
      </Form>

      <button
        onClick={() => handleClick({ inputName })}
        type="button"
        className="profilebtn btn mt-2  btn-primary btn-block"
      >
        Save
      </button>
    </div>
  );
}
export default Profile;
