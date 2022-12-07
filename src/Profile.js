import { useState, useEffect } from "react";
import React from "react";
import Form from "react-bootstrap/Form";

function Profile({  }) {


  const [inputName, setInputName] = useState("");

  const handleClick = ({ inputName }) => {
    localStorage.setItem("userName", inputName);
console.log(localStorage.getItem("lastname") )

  };






  return (
    <div className="container mt-6  ">
      <h1 className="hedline-text color-white pb-3">Profile</h1>
      <p className="subline-text color-white">User Name</p>

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
